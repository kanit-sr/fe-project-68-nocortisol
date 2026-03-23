"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import userRegister from "@/libs/userRegister";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await userRegister({ name: form.name, email: form.email, tel: form.tel, password: form.password, role: "user" });
      router.push("/login");
    } catch (err: any) {
      setError(err?.message ?? "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* ── Left panel: hero image with orange overlay ── */}
      <div
        className="hidden lg:flex lg:w-[62%] relative items-end p-14"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Orange overlay */}
        <div className="absolute inset-0 bg-primary opacity-75" />

        {/* Text content */}
        <div className="relative z-10">
          <h1 className="text-white font-black text-5xl leading-tight tracking-tight mb-4"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "0.02em" }}>
            ONLINE JOB FAIR 2022
          </h1>
          <p className="text-white text-sm tracking-widest leading-relaxed font-light">
            Discover Opportunities. Connect with Top Companies.<br />
            Book Your Interview Sessions and Start Your Career Journey Today.
          </p>
        </div>
      </div>

      {/* ── Right panel: form ── */}
      <div className="flex-1 flex flex-col items-center justify-center bg-white px-8 py-12 relative">
        {/* Decorative blobs bottom */}
        <div className="absolute bottom-0 left-0 w-24 h-32 bg-primary rounded-tr-full opacity-90" />
        <div className="absolute bottom-0 right-4 w-20 h-28 bg-primary-light rounded-tl-full opacity-80" />
        {/* Sitting person illustration placeholder */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 opacity-60 pointer-events-none select-none text-3xl">
          🧑‍💼
        </div>

        <div className="w-full max-w-sm relative z-10">
          {/* Title */}
          <div className="text-center mb-6">
            <h2
              className="text-4xl font-bold text-primary mb-1"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Welcome
            </h2>
            <p className="text-primary text-sm tracking-widest uppercase font-medium">
              Register
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-1 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border border-primary rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Tel */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-1 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Telephone number
              </label>
              <input
                type="tel"
                name="tel"
                required
                value={form.tel}
                onChange={handleChange}
                className="w-full border border-primary rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-1 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email ID
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border border-primary rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Password */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-1 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full border border-primary rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="flex items-center gap-2 text-sm text-gray-700 mb-1 font-medium">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border border-primary rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
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
              {loading ? "Creating account…" : "Register"}
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-500">
            Already have account?{" "}
            <a href="/login" className="text-primary font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}