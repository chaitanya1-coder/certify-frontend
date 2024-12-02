"use client";

import Image from "next/image";
import Link from "next/link";
import { useOkto } from "okto-sdk-react";
import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { isLoggedIn, authenticate } = useOkto();

  const handleAuthenticate = async () => {
    if (!session) {
      // Start Google sign-in
      await signIn("google", { callbackUrl: "/login" });
      return;
    }

    // If we have a session but no Okto login, try Okto authentication
    if (session.id_token && !isLoggedIn) {
      authenticate(session.id_token, (result, error) => {
        if (result) {
          console.log("Okto authentication successful:", result);
          router.push("/dashboard");
        } else {
          console.error("Okto authentication error:", error);
        }
      });
    }
  };

  // Automatically try Okto auth when we get a session
  useEffect(() => {
    if (session?.id_token && !isLoggedIn) {
      handleAuthenticate();
    }
  }, [session, isLoggedIn]);

  // Debug logging
  useEffect(() => {
    if (session) {
      console.log("Session:", session);
      console.log("ID Token:", session.id_token);
    }
  }, [session]);

  return (
    <div className="min-h-screen bg-[#f1f1e9] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <div
          onClick={handleAuthenticate}
          className="flex items-center space-x-4 p-4 bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg cursor-pointer w-full"
        >
          <Image
            src="https://storage.googleapis.com/a1aa/image/ehGaT2Ke9Ti8U0o2d2FRhCslHAfXeKZOQ0q00cQwtlDr76ZPB.jpg"
            alt="Okto Icon"
            width={40}
            height={40}
          />
          <span className="font-medium">
            {status === "loading"
              ? "Loading..."
              : session
              ? "Continue with Okto"
              : "Sign in with Okto"}
          </span>
        </div>

        {session && (
          <div className="mt-4 text-center">
            <p className="text-green-500">
              Signed in as: {session.user?.email}
            </p>
          </div>
        )}

        <div className="mt-6 text-center text-gray-500 text-sm">
          By connecting, you agree to the{" "}
          <Link href="#" className="text-[#dbfb58] hover:underline">
            Terms of Service
          </Link>{" "}
          &amp;{" "}
          <Link href="#" className="text-[#dbfb58] hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
