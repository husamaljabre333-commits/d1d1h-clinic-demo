import Image from "next/image";
import { clinicInfo } from "./data";

export default function Header() {
  const telUrl = `tel:${clinicInfo.phoneDisplay}`;
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود حجز موعد في مركز القناص لطب وزراعة الأسنان."
  )}`;

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-black/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow">
            <Image
              src="/logo.jpg"
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
        <nav className="hidden md:flex items-center gap-6 text-sm text-[#1c2035]/80">
          <a className="hover:text-[#b19566] transition" href="#services">الخدمات</a>
          <a className="hover:text-[#b19566] transition" href="#booking">حجز موعد</a>
          <a className="hover:text-[#b19566] transition" href="#contact">تواصل</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
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
