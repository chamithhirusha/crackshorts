"use client";

import { useMediaQuery } from "./useMediaQuery";

type Breakpoints = {
  mobile?: number;
  tablet?: number;
};

export function useResponsive(breakpoints?: Breakpoints) {
  const mobileMax = breakpoints?.mobile ?? 767;
  const tabletMax = breakpoints?.tablet ?? 1023;

  const isMobile = useMediaQuery(`(max-width: ${mobileMax}px)`);

  const isTablet = useMediaQuery(
    `(min-width: ${mobileMax + 1}px) and (max-width: ${tabletMax}px)`,
  );

  const isDesktop = useMediaQuery(`(min-width: ${tabletMax + 1}px)`);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
