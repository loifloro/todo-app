"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }
  
  return (
    <div className="cursor-pointer">
      {theme === "dark" && (
        <IconSun
          width={32}
          height={32}
          color="white"
          onClick={() => {
            setTheme("light");
          }}
        />
      )}
      {theme === "light" && (
        <IconMoon
          width={32}
          height={32}
          color="white"
          onClick={() => {
            setTheme("dark");
          }}
        />
      )}
    </div>
  );
}
