export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-4xl font-bold mb-8">
        Security Architecture 🔐
      </h1>

      <div className="space-y-6 max-w-3xl">

        <div className="p-6 bg-slate-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Password Hashing
          </h2>
          <p>
            User passwords are hashed using Argon2 before being stored
            in the database. This prevents attackers from recovering
            plaintext passwords if the database is compromised.
          </p>
        </div>

        <div className="p-6 bg-slate-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            JWT Authentication
          </h2>
          <p>
            After successful login, a JSON Web Token is generated and
            stored in a secure HTTP-only cookie. This token is used to
            verify authenticated users.
          </p>
        </div>

        <div className="p-6 bg-slate-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Brute Force Protection
          </h2>
          <p>
            Accounts are automatically locked after 5 failed login
            attempts. This prevents brute force password attacks.
          </p>
        </div>

        <div className="p-6 bg-slate-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Protected Routes
          </h2>
          <p>
            Sensitive pages like the dashboard are protected using
            authentication middleware which verifies JWT tokens before
            granting access.
          </p>
        </div>

        <div className="p-6 bg-slate-800 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">
            Secure Database Storage
          </h2>
          <p>
            User data is stored in PostgreSQL using Supabase with
            parameterized SQL queries to prevent SQL injection attacks.
          </p>
        </div>

      </div>

    </div>
  );
}