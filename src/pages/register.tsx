import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import "@/app/globals.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { signUpWithEmail, signInWithGoogle } = useAuth();

  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await signUpWithEmail(email, password);
      router.push("/dashboard");
    } catch (error) {
      setError("Failed to create account");
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await signInWithGoogle();
      router.push("/dashboard");
    } catch (error) {
      setError("Failed to sign up with Google");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] p-4">
      <h2 className="text-4xl font-bold text-[var(--foreground)] mb-10">
        Register
      </h2>

      <div className="max-w-md w-full space-y-8 p-8 bg-[var(--background)] rounded-lg shadow-xl border border-gray-700">
        {error && (
          <div className="bg-red-900 border border-red-500 text-red-200 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailRegister} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--foreground)] mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md shadow-sm p-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[var(--foreground)] mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md shadow-sm p-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[var(--foreground)] mb-2"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full rounded-md shadow-sm p-3 border border-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
          >
            Sign up
          </button>
        </form>

        <div className="mt-8">
          <button
            onClick={handleGoogleRegister}
            className="w-full py-3 px-4 border border-gray-700 rounded-md shadow-sm bg-[var(--input-background)] text-[var(--foreground)] hover:bg-gray-800"
          >
            Sign up with Google
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-[var(--foreground)]">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-500 hover:text-indigo-400">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
