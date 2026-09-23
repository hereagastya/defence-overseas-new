"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { MAIN_NAV, STUDY_NAV } from "@/content/site";
import { CONTACT_CONFIG, getCallLink } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Chevron, CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("group/logo flex items-center gap-3", className)} aria-label="Defence Overseas — home">
      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[14px] bg-forest ring-1 ring-forest/20">
        <Image src="/images/logo-emblem.webp" alt="" fill sizes="48px" className="scale-110 object-cover" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("whitespace-nowrap font-crest text-[17px] font-bold uppercase tracking-[0.08em]", light ? "text-on-forest" : "text-forest")}>
          Defence Overseas
        </span>
        <span className={cn("mt-1.5 whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.2em]", light ? "text-gold" : "text-gold-deep")}>
          Study abroad consultancy
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [studyOpen, setStudyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const studyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!studyOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!studyRef.current?.contains(e.target as Node)) setStudyOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setStudyOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [studyOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => {
    setStudyOpen(false);
    setMenuOpen(false);
  };

  const studyActive = pathname.startsWith("/study-abroad");

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper">
      <div className="mx-auto flex h-[var(--spacing-header)] w-full max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <div ref={studyRef} className="relative">
            <button
              type="button"
              onClick={() => setStudyOpen((o) => !o)}
              aria-expanded={studyOpen}
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2.5 text-[15px] font-semibold transition-colors duration-200 hover:bg-mist",
                studyActive || studyOpen ? "text-forest" : "text-ink"
              )}
            >
              Study Abroad
              <Chevron className={cn("h-4 w-4 transition-transform duration-300 ease-[var(--ease-out-expo)]", studyOpen && "rotate-180")} />
            </button>
            <div
              className={cn(
                "absolute left-0 top-full w-[340px] pt-3 transition-[opacity,transform] duration-300 ease-[var(--ease-out-expo)]",
                studyOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
              )}
            >
              <ul className="rounded-3xl border border-line bg-white p-2 shadow-lift">
                {STUDY_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={close}
                      tabIndex={studyOpen ? 0 : -1}
                      className="group/item flex items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-colors duration-200 hover:bg-mist"
                    >
                      <span>
                        <span className="block font-display text-[17px] font-semibold text-forest">{item.label}</span>
                        <span className="block text-[13px] text-muted">{item.blurb}</span>
                      </span>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-forest/40 transition-[transform,color] duration-300 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-forest" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {MAIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-full px-3.5 py-2.5 text-[15px] font-semibold transition-colors duration-200 hover:bg-mist",
                pathname === item.href ? "text-forest underline decoration-gold decoration-2 underline-offset-[10px]" : "text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={getCallLink()}
            aria-label={`Call ${CONTACT_CONFIG.phoneDisplay}`}
            title={CONTACT_CONFIG.phoneDisplay}
            className="grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-forest/25 text-forest transition-colors duration-300 hover:border-forest hover:bg-forest hover:text-on-forest"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <Button href="/contact#counselling" variant="forest" size="md" arrow>
            Free counselling
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-forest/25 text-forest lg:hidden"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "on-dark fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-forest-deep text-on-forest transition-[opacity,transform] duration-500 ease-[var(--ease-out-expo)] lg:hidden",
          menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <div className="flex h-[var(--spacing-header)] shrink-0 items-center justify-between px-5">
          <Logo light />
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-on-forest/30 text-on-forest"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 px-5 pb-10 pt-4">
          <p className="mb-1 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold">Study abroad</p>
          {STUDY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              tabIndex={menuOpen ? 0 : -1}
              className="flex items-center justify-between border-b border-on-forest/15 py-3.5 font-display text-[26px] font-semibold"
            >
              {item.label}
              <ArrowUpRight className="h-6 w-6 text-gold" />
            </Link>
          ))}
          <div className="mt-6 flex flex-col">
            {MAIN_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                tabIndex={menuOpen ? 0 : -1}
                className="border-b border-on-forest/15 py-3.5 font-display text-[26px] font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-auto flex flex-col gap-3 pt-10">
            <Button href="/contact#counselling" variant="gold" size="lg" arrow onClick={close}>
              Book free counselling
            </Button>
            <Button href={getCallLink()} variant="outline-light" size="lg" onClick={close}>
              <PhoneIcon className="lead" />
              Call us
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

