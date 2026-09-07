"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { getCallLink, getWhatsAppLink } from "@/lib/contact";
import { NAV_LINKS } from "@/content/navigation";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] flex h-header items-center transition-[background-color,box-shadow] duration-300",
        scrolled
          ? "bg-cream/85 shadow-[0_1px_0_rgba(27,32,48,0.06),0_12px_30px_-20px_rgba(11,15,26,0.25)] backdrop-blur-md backdrop-saturate-150"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-6">
        <a href="#top" className="font-serif text-xl font-semibold text-ink" aria-label="Defence Overseas — home">
          Defence <span className="text-gold-dark">Overseas</span>
        </a>

        <nav aria-label="Primary" className="hidden gap-9 text-[15px] font-medium lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="group relative text-ink">
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-gold transition-all duration-250 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Button href={getWhatsAppLink()} target="_blank" rel="noopener" size="sm">
            <WhatsAppIcon />
            WhatsApp Us
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span
            className={cn(
              "block h-0.5 w-[22px] bg-ink transition-transform duration-250",
              menuOpen && "translate-y-[7px] rotate-45"
            )}
          />
          <span
            className={cn("block h-0.5 w-[22px] bg-ink transition-opacity duration-250", menuOpen && "opacity-0")}
          />
          <span
            className={cn(
              "block h-0.5 w-[22px] bg-ink transition-transform duration-250",
              menuOpen && "-translate-y-[7px] -rotate-45"
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-header z-[99] flex flex-col justify-between bg-cream px-6 pb-12 pt-10 transition-all duration-300 lg:hidden",
          menuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-7">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu} className="font-serif text-3xl text-ink">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-3.5">
          <Button href={getWhatsAppLink()} target="_blank" rel="noopener" className="w-full" onClick={closeMenu}>
            WhatsApp Us
          </Button>
          <Button href={getCallLink()} variant="outline" className="w-full" onClick={closeMenu}>
            Call Us
          </Button>
        </div>
      </div>
    </header>
  );
}
