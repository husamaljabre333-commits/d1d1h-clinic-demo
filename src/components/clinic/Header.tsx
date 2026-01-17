"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { clinicInfo } from "./data";

export default function Header() {
  const telUrl = `tel:${clinicInfo.phoneDisplay}`;
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود حجز موعد في مركز القناص لطب وزراعة الأسنان."
  )}`;

  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-30 border-b backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "bg-white/95 border-black/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
          : "bg-white/80 border-black/10",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div
          className={[
            "flex items-center gap-3 transition-all duration-700 ease-out",
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6",
          ].join(" ")}
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow">
            <Image
              src="/Logo.jpg"
              alt="شعار مركز القناص"
              fill
              className="object-contain p-0.5"
              sizes="48px"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="font-extrabold text-[#1c2035]">{clinicInfo.name}</div>
            <div className="text-xs text-[#1c2035]/60">{clinicInfo.tagline}</div>
          </div>
        </div>

        {/* Nav */}
        <nav
          className={[
            "hidden md:flex items-center gap-6 text-sm text-[#1c2035]/80 transition-all duration-700 ease-out",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3",
          ].join(" ")}
          style={{ transitionDelay: "120ms" }}
        >
          <a className="hover:text-[#b19566] transition" href="#services">
            الخدمات
          </a>
          <a className="hover:text-[#b19566] transition" href="#booking">
            حجز موعد
          </a>
          <a className="hover:text-[#b19566] transition" href="#contact">
            تواصل
          </a>
        </nav>

        {/* CTA */}
        <div
          className={[
            "flex items-center gap-2 transition-all duration-700 ease-out",
            mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6",
          ].join(" ")}
          style={{ transitionDelay: "220ms" }}
        >
          <a href={telUrl} className="btn-outline-main px-4 py-2 text-sm">
            اتصال
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-main px-4 py-2 text-sm"
          >
            واتساب
          </a>
        </div>
      </div>
    </header>
  );
}
