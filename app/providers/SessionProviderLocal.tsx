"use client";

import { SessionProvider } from "next-auth/react";
import LenisProvider from "@/components/providers/LenisProvider";
import FramerProvider from "@/components/providers/FramerProvider";
import RouteChrome from "@/components/layout/RouteChrome";

export default function SessionProviderLocal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <LenisProvider>
        <FramerProvider>
          <RouteChrome>{children}</RouteChrome>
        </FramerProvider>
      </LenisProvider>
    </SessionProvider>
  );
}
