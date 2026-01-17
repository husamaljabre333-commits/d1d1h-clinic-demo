"use client";

import Reveal from "@/components/ui/Reveal";
import { clinicInfo } from "./data";

export default function Hero() {
  const telUrl = `tel:${clinicInfo.phoneDisplay}`;
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود حجز موعد في مركز القناص لطب وزراعة الأسنان."
  )}`;

  return (
    <section className="relative w-full min-h-[70vh]">
      {/* أيقونات أعلى يمين */}
      <div className="absolute right-4 top-4 z-30 flex items-center gap-2">
        <Reveal direction="down" delayMs={0}>
          <a
            href={clinicInfo.facebookUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            title="Facebook"
            className="h-10 w-10 rounded-full bg-white/90 border border-black/10 backdrop-blur flex items-center justify-center hover:bg-white transition"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#1877F2]">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12z" />
            </svg>
          </a>
        </Reveal>

        <Reveal direction="down" delayMs={80}>
          <a
            href={clinicInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="h-10 w-10 rounded-full bg-white/90 border border-black/10 backdrop-blur flex items-center justify-center hover:bg-white transition"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#E4405F]">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.8-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </a>
        </Reveal>

        <Reveal direction="down" delayMs={160}>
          <a
            href={clinicInfo.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Google Maps"
            title="Google Maps"
            className="h-10 w-10 rounded-full bg-white/90 border border-black/10 backdrop-blur flex items-center justify-center hover:bg-white transition"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#EA4335]">
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
            </svg>
          </a>
        </Reveal>
      </div>

      {/* النص أقصى اليمين */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-right max-w-[700px]">
        <Reveal direction="right">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs text-[#1c2035] border border-black/10">
            <span className="h-2 w-2 rounded-full bg-[#b19566]" />
            استقبال وحجز سريع
          </span>
        </Reveal>

        <Reveal direction="right" delayMs={80}>
          <h1 className="mt-4 text-3xl md:text-6xl font-extrabold leading-tight text-white [text-shadow:0_12px_35px_rgba(0,0,0,0.75)]">
            ابتسامتك تبدأ من هنا
            <span className="block text-white/90 text-xl md:text-2xl font-semibold mt-2 [text-shadow:0_10px_28px_rgba(0,0,0,0.7)]">
              {clinicInfo.name} — {clinicInfo.tagline}
            </span>
          </h1>
        </Reveal>

        <Reveal direction="right" delayMs={140}>
          <p className="mt-4 text-white/90 leading-relaxed [text-shadow:0_10px_26px_rgba(0,0,0,0.65)]">
            عناية متكاملة لطب وزراعة الأسنان بأحدث التقنيات — احجز موعدك بسهولة عبر واتساب.
          </p>
        </Reveal>

        <Reveal direction="up" delayMs={200}>
          <div className="mt-6 flex flex-wrap gap-3 justify-end">
            <a href="#booking" className="btn-main">
              احجز الآن
            </a>

            <a
              href={telUrl}
              className="
                btn-life
                rounded-full px-6 py-3 font-semibold transition
                bg-gradient-to-l from-emerald-50/95 via-white/90 to-white/90
                border border-emerald-200/70 text-[#1c2035]
                hover:from-emerald-100/95 hover:border-emerald-300/80
              "
            >
              <span>اتصال: {clinicInfo.phoneDisplay}</span>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-main">
              واتساب
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
