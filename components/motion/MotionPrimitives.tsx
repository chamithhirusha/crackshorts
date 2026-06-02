"use client";

import { cn } from "@/lib/utils";
import {
  m,
  type HTMLMotionProps,
  type Transition,
} from "framer-motion";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const baseTransition: Transition = {
  duration: 0.7,
  ease: smoothEase,
};

type MotionMainProps = HTMLMotionProps<"main">;

export function MotionMain({
  className,
  children,
  ...props
}: MotionMainProps) {
  return (
    <m.main
      className={cn(className)}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={baseTransition}
      {...props}
    >
      {children}
    </m.main>
  );
}

type MotionSectionProps = HTMLMotionProps<"section"> & {
  delay?: number;
  once?: boolean;
  amount?: number;
  distance?: number;
};

export function MotionSection({
  className,
  children,
  delay = 0,
  once = true,
  amount = 0.25,
  distance = 30,
  ...props
}: MotionSectionProps) {
  return (
    <m.section
      className={cn(className)}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ ...baseTransition, delay }}
      {...props}
    >
      {children}
    </m.section>
  );
}

type MotionDivProps = HTMLMotionProps<"div"> & {
  delay?: number;
  once?: boolean;
  amount?: number;
  distance?: number;
};

export function MotionDiv({
  className,
  children,
  delay = 0,
  once = true,
  amount = 0.25,
  distance = 20,
  ...props
}: MotionDivProps) {
  return (
    <m.div
      className={cn(className)}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ ...baseTransition, delay }}
      {...props}
    >
      {children}
    </m.div>
  );
}