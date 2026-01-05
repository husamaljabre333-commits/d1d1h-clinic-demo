import Image from "next/image";
import { clinicInfo } from "./data";

export default function Header() {
  const telUrl = `tel:${clinicInfo.phoneDisplay}`;
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود حجز موعد في مركز القناص لطب وزراعة الأسنان."
  )}`;

  return (
    <header className="sticky top-0 z-30 border-b border-white/20 bg-white/10 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-3">
<div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white shadow-lg shadow-blue-500/20 ring-1 ring-white/25">
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
            <div className="font-bold text-white">{clinicInfo.name}</div>
            <div className="text-xs text-white/70">{clinicInfo.tagline}</div>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a className="hover:text-white" href="#services">الخدمات</a>
          <a className="hover:text-white" href="#booking">حجز موعد</a>
          <a className="hover:text-white" href="#contact">تواصل</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href={telUrl}
            className="rounded-xl border border-white/25 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/15"
          >
            اتصال
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-emerald-500 px-3 py-2 text-sm text-white hover:bg-emerald-600"
          >
            واتساب
          </a>
        </div>
      </div>
    </header>
  );
}
