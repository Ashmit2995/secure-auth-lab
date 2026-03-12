"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0d1224] to-[#060a14] text-white font-sans antialiased">

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0e1a]/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-10 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Secure Auth Lab
            </h1>
          </div>

          <button
            onClick={logout}
            className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-red-500/15 hover:border-red-500/30 text-sm font-medium text-slate-300 hover:text-red-400 transition-all duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 py-10 space-y-8">

        {/* Welcome Card */}
        <div className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:p-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Authenticated
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
              Welcome to your Secure Dashboard
            </h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              You are successfully authenticated. This dashboard demonstrates
              a secure authentication system built with Next.js and PostgreSQL.
            </p>
          </div>
        </div>

        {/* Security Status Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Auth Status", value: "Active", color: "emerald" },
            { label: "Session", value: "Secure", color: "cyan" },
            { label: "Threats", value: "0 Detected", color: "emerald" },
            { label: "Encryption", value: "AES-256", color: "blue" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 text-center">
              <p className="text-[11px] uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
              <p className={`text-sm font-semibold ${item.color === "emerald" ? "text-emerald-400" : item.color === "cyan" ? "text-cyan-400" : "text-blue-400"}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="grid sm:grid-cols-2 gap-4">

          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-6 transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/15 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            </div>
            <h3 className="text-base font-semibold mb-3 text-white/90">Password Security</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyan-500/60" />Argon2 password hashing</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyan-500/60" />Salted hash storage</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-cyan-500/60" />Secure password verification</li>
            </ul>
          </div>

          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-6 transition-all duration-300 hover:border-emerald-500/20 hover:shadow-lg hover:shadow-emerald-500/5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/15 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
            </div>
            <h3 className="text-base font-semibold mb-3 text-white/90">Authentication</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500/60" />JWT token authentication</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500/60" />HTTP-only cookie sessions</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-emerald-500/60" />Middleware protected routes</li>
            </ul>
          </div>

          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-6 transition-all duration-300 hover:border-red-500/20 hover:shadow-lg hover:shadow-red-500/5">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400"><circle cx="12" cy="12" r="10"/><line x1="4.93" x2="19.07" y1="4.93" y2="19.07"/></svg>
            </div>
            <h3 className="text-base font-semibold mb-3 text-white/90">Brute Force Protection</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500/60" />Login attempt tracking</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500/60" />Account lock after 5 failures</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-red-500/60" />Automatic attempt reset</li>
            </ul>
          </div>

          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-6 transition-all duration-300 hover:border-violet-500/20 hover:shadow-lg hover:shadow-violet-500/5">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/15 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
            </div>
            <h3 className="text-base font-semibold mb-3 text-white/90">Database Security</h3>
            <ul className="text-slate-400 text-sm space-y-2">
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-500/60" />PostgreSQL database</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-500/60" />Parameterized queries</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-violet-500/60" />SQL injection protection</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="text-center text-slate-600 text-xs pt-4 pb-8 tracking-wide">
          Cybersecurity Authentication Project — Built with Next.js & PostgreSQL
        </div>

      </main>

    </div>
  );
}