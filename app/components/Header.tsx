"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoMark from "./LogoMark";

const navItems = [
  ["Who we are", "/who-we-are"],
  ["What we do", "/what-we-do"],
  ["Strategy", "/strategic-priorities"],
  ["Where we work", "/where-we-work"],
  ["Leadership", "/leadership"],
  ["News", "/news"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"]
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isRouteActive = (href: string) => {
    if (href.startsWith("/#")) {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-bone/95 border-b border-ink/10 shadow-sm backdrop-blur-md" 
        : "bg-bone/50 border-b border-transparent backdrop-blur-sm"
    }`}>
      <div className="section-shell flex min-h-20 items-center gap-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="RIAMRIAM Peace and Development Network home">
          <LogoMark className="h-14 w-14" priority />
          <span className="leading-none">
            <strong className="block text-lg font-semibold tracking-normal text-ink">RIAMRIAM</strong>
            <span className="block pt-1 text-xs font-normal uppercase text-graphite/70 whitespace-nowrap">
              Peace and Development Network
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 text-[0.78rem] font-semibold uppercase text-ink lg:flex">
          {navItems.map(([label, href]) => {
            const isActive = isRouteActive(href);
            return (
              <Link
                key={href}
                href={href}
                className={`link-underline py-7 transition-colors duration-200 ${
                  isActive ? "text-teal border-b-2 border-teal" : "text-ink hover:text-teal"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/partnerships"
          className="ml-auto hidden rounded-sm bg-teal px-5 py-3 text-[0.78rem] font-semibold uppercase text-bone transition hover:bg-teal/90 hover:scale-[1.02] active:scale-[0.98] lg:ml-0 lg:inline-flex shadow-sm"
        >
          Partner with us
        </Link>

        <details className="group relative ml-auto lg:hidden">
          <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center rounded-sm border border-ink/15 text-ink marker:hidden">
            <span className="sr-only">Open navigation</span>
            <span className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-6 bg-current transition-transform duration-300 group-open:translate-y-2 group-open:rotate-45" />
              <span className="block h-0.5 w-6 bg-current transition-opacity duration-300 group-open:opacity-0" />
              <span className="block h-0.5 w-6 bg-current transition-transform duration-300 group-open:-translate-y-2 group-open:-rotate-45" />
            </span>
          </summary>
          <nav className="absolute right-0 top-14 w-72 rounded-sm border border-ink/10 bg-paper p-3 text-sm font-semibold uppercase text-ink shadow-soft">
            {navItems.map(([label, href]) => (
              <Link key={href} href={href} className="block rounded-sm px-4 py-3 hover:bg-bone transition-colors">
                {label}
              </Link>
            ))}
            <Link href="/partnerships" className="mt-2 block rounded-sm bg-teal px-4 py-3 text-center text-bone transition hover:bg-teal/90">
              Partner with us
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
