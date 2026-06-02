"use client";

import { domAnimation, LazyMotion, MotionConfig } from "framer-motion";

export default function FramerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </MotionConfig>
  );
}