export const runtime = "nodejs";

import { NextResponse } from "next/server";
import {pool} from "@/lib/db";
import { hashPassword } from "@/lib/password";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const hashed = await hashPassword(password);

    const result = await pool.query(
      "INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING id, username",
      [username, hashed]
    );

    return NextResponse.json({ user: result.rows[0] });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}