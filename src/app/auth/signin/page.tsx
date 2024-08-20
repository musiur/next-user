"use client";

import { signIn } from "next-auth/react";
import { Button } from "antd";

export default function SignInPage() {
  // useEffect(() => {
  //   if (!session) {
  //     router.push("/auth/signin");
  //   }
  // }, [session, router]);

  // if (!session) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Sign in with Google</h1>
        <Button type="primary" onClick={() => signIn("google")}>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
}
