"use client";

import { Button } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { data: session } = useSession();
  const [logined, setLogined] = useState(false);

  useEffect(() => {
    if (session) {
      setLogined(true);
    }
  }, [session]);
  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="container flex justify-between items-center">
        <Link href="/">Home</Link>
        {!logined ? (
          <div className="flex items-center justify-end gap-4">
            <Link href="/auth/signup">
              <Button>Sign Up</Button>
            </Link>
            <Button type="primary" onClick={() => signIn()}>
              Sign In
            </Button>
          </div>
        ) : (
          <Button danger type="primary" onClick={() => signOut()}>
            Sign Out
          </Button>
        )}
      </div>
    </nav>
  );
}
