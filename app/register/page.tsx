"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json();

    if (data.error) {
      setMessage(data.error);
      return;
    }

    setMessage("Account created!");

    setTimeout(() => {
      router.push("/login");
    }, 1000);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-black text-white">

      <div className="w-full max-w-md p-8 bg-slate-800 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Register
        </h1>

        {message && (
          <p className="text-green-400 text-center mb-4">
            {message}
          </p>
        )}

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
          />

          <button
            type="submit"
            className="w-full p-3 bg-green-600 hover:bg-green-500 rounded-lg font-semibold transition"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-6 text-slate-400">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400">
            Login
          </a>
        </p>

      </div>

    </div>
  );
}