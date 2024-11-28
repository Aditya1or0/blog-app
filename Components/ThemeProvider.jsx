"use client";

import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Mark as mounted once client-side rendering starts
  }, []);

  if (!mounted) {
    return null; // Avoid rendering the theme provider during SSR
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
