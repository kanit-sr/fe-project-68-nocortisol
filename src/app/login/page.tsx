"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);
    if (res?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* ── Left panel: hero image with orange overlay ── */}
      <div
        className="hidden lg:flex lg:w-[62%] relative items-end p-14"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Orange overlay */}
        <div className="absolute inset-0 bg-primary opacity-75" />

        {/* Text */}
        <div className="relative z-10">
          <h1
            className="text-white font-black text-5xl leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            ONLINE JOB FAIR 2022
          </h1>
          <p className="text-white text-sm tracking-widest leading-relaxed font-light">
            Discover Opportunities. Connect with Top Companies.
            <br />
            Book Your Interview Sessions and Start Your Career Journey Today.
          </p>
        </div>
      </div>

      {/* ── Right panel: form ── */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-8 py-12 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute bottom-0 left-0 w-24 h-32 bg-primary rounded-tr-full opacity-90" />
        <div className="absolute bottom-0 right-4 w-20 h-28 bg-primary-light rounded-tl-full opacity-80" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none select-none text-3xl opacity-60">
          🧑‍💼
        </div>

        <div className="w-full max-w-sm relative z-10">
          {/* Title */}
          <div className="text-center mb-8">
            <h2
              className="text-4xl font-bold text-primary mb-1"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Welcome
            </h2>
            <p className="text-primary text-sm tracking-widest font-medium">
              Login with email
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-1 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email ID
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-primary rounded px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-1 font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-primary rounded px-3 py-2 text-sm text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="text-right mt-1">
                <a
                  href="#"
                  className="text-xs text-primary hover:underline italic"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold tracking-widest uppercase text-sm py-2.5 rounded transition-colors disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Login"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-500">
            Don&apos;t have an account?{" "}
            <a
              href="/register"
              className="text-primary font-semibold hover:underline"
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}