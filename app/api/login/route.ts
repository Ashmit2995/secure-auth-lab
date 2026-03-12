export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { verifyPassword } from "@/lib/password";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    if (result.rows.length === 0) {
      return NextResponse.json({ error: "User not found" });
    }

    const user = result.rows[0];

    // account locked
    if (user.is_locked) {
      return NextResponse.json({ error: "Account locked" });
    }

    const valid = await verifyPassword(password, user.password_hash);

    // wrong password
    if (!valid) {
      const attempts = user.failed_attempts + 1;

      if (attempts >= 5) {
        await pool.query(
          "UPDATE users SET failed_attempts = $1, is_locked = true WHERE id = $2",
          [attempts, user.id]
        );

        return NextResponse.json({
          error: "Account locked after 5 failed attempts"
        });
      }

      await pool.query(
        "UPDATE users SET failed_attempts = $1 WHERE id = $2",
        [attempts, user.id]
      );

      return NextResponse.json({ error: "Invalid password" });
    }

    // reset attempts after successful login
    await pool.query(
      "UPDATE users SET failed_attempts = 0 WHERE id = $1",
      [user.id]
    );

    // 🔐 create JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    // create response
    const response = NextResponse.json({
      message: "Login successful",
      user: {
        id: user.id,
        username: user.username
      }
    });

    // store token in cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false, // set true in production
      path: "/",
      maxAge: 60 * 60 // 1 hour
    });

    return response;

  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}