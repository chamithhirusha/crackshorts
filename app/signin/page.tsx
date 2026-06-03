"use client";

import { MotionDiv, MotionSection } from "@/components/motion/MotionPrimitives";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function SignIn() {
  return (
    <MotionSection
      id="signin"
      className="flex flex-col h-screen items-center justify-center gap-10 py-40 px-4"
    >
      <MotionDiv
        className="flex flex-col items-center justify-center text-center"
        delay={0.06}
      >
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-center">
          Connect your
        </h1>
        <h1 className="text-4xl sm:text-6xl lg:text-8xl text-muted-foreground text-center">
          <span className="text-red-500">YouTube</span> channel.
        </h1>
      </MotionDiv>
      <hr className="w-11/12 max-w-4xl border-muted" />
      <MotionDiv
        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        delay={0.14}
      >
        <Button
          className="w-full sm:w-auto"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          Connect
        </Button>
        <Link href="/">
          <Button variant="link" className="w-full sm:w-auto">
            Back to Homepage
          </Button>
        </Link>
      </MotionDiv>
    </MotionSection>
  );
}
