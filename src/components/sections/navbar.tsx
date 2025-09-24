"use client";

import Link from "next/link";
import { ABOUT_ME } from "../constants/data";
import ThemeToggle from "../ui/theme-toggle";

export default function Navbar() {
  return (
    <nav className="py-5 sm:py-10">
      <div className="flex items-center justify-between">
        {/* Logo/Brand link */}
        <Link href="/" className="text-lg font-semibold text-foreground">
          {ABOUT_ME.name?.split(" ")[0]}.
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
