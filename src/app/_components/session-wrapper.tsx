"use client";
import { SessionProvider } from "next-auth/react";
import { ReactElement } from "react";

export const SessionWrapper = ({ children }: { children: ReactElement }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
