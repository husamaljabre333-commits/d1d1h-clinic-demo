import { clinicInfo } from "./data";

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.8-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M6.6 10.8c1.5 3 3.7 5.2 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.4 2.6.6 4 .6.7 0 1.4.6 1.4 1.4V21c0 .8-.6 1.4-1.4 1.4C10.3 22.4 1.6 13.7 1.6 3.4 1.6 2.6 2.2 2 3 2h4c.8 0 1.4.6 1.4 1.4 0 1.4.2 2.7.6 4 .1.4 0 .9-.2 1.2l-2.2 2.2z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current">
      <path d="M19.11 17.2c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.02-.15.17-.3.2-.56.07-.26-.13-1.08-.4-2.06-1.28-.76-.68-1.27-1.53-1.42-1.79-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44h-.49c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.16 0 1.27.93 2.5 1.06 2.67.13.17 1.83 2.8 4.43 3.92.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.1.49-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z" />
      <path d="M26.67 5.33A14.67 14.67 0 0 0 4.73 24.9L3 30l5.27-1.68A14.67 14.67 0 0 0 26.67 5.33zm-11 24.4c-2.45 0-4.73-.72-6.65-1.96l-.48-.3-3.12 1 1.02-3.04-.31-.5a12.16 12.16 0 1 1 9.54 4.8z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const telUrl = `tel:${clinicInfo.phoneDisplay}`;
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود حجز موعد."
  )}`;

  return (
    <footer dir="rtl" className="relative bg-[#0f121e] text-white">
      {/* لمعة/تدرج خفيف للفخامة */}
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(177,149,102,0.18),transparent_55%),radial-gradient(800px_circle_at_80%_30%,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* خط ذهبي علوي */}
      <div className="relative h-[2px] w-full bg-gradient-to-l from-transparent via-[#b19566] to-transparent opacity-80" />

      <div className="relative mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* عمود 1: اسم + وصف + سوشال */}
          <div>
            <div className="text-2xl font-extrabold text-[#b19566]">
              {clinicInfo.name}
            </div>
            <div className="mt-2 text-sm text-white/70">
              {clinicInfo.tagline}
            </div>

            <div className="mt-5 flex items-center gap-2">
              <a
                href={clinicInfo.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center transition hover:bg-white/10 hover:border-white/20"
                style={{ color: "#1877F2" }}
                title="Facebook"
              >
                <IconFacebook />
              </a>

              <a
                href={clinicInfo.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center transition hover:bg-white/10 hover:border-white/20"
                style={{ color: "#E4405F" }}
                title="Instagram"
              >
                <IconInstagram />
              </a>

              <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Google Maps"
                className="h-10 w-10 rounded-full border border-white/10 bg-white/5 backdrop-blur flex items-center justify-center transition hover:bg-white/10 hover:border-white/20"
                style={{ color: "#EA4335" }}
                title="Google Maps"
              >
                <IconPin />
              </a>
            </div>

            <div className="mt-6 text-xs text-white/55">
              عناية متكاملة بتقنيات حديثة — حجز سريع عبر واتساب.
            </div>
          </div>

          {/* عمود 2: روابط */}
          <div>
            <div className="text-lg font-extrabold text-white">روابط</div>
            <div className="mt-4 space-y-3 text-sm">
              {[
                { label: "الخدمات", href: "#services" },
                { label: "الأطباء", href: "#doctors" },
                { label: "آراء الناس", href: "#reviews" },
                { label: "حجز موعد", href: "#booking" },
                { label: "تواصل", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:border-white/20"
                >
                  <span className="text-white/85 group-hover:text-white">{l.label}</span>
                  <span className="text-[#b19566]">›</span>
                </a>
              ))}
            </div>
          </div>

          {/* عمود 3: تواصل */}
          <div>
            <div className="text-lg font-extrabold text-white">تواصل</div>

            <div className="mt-4 space-y-3">
              <a
                href={telUrl}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:border-white/20"
              >
                <span className="text-[#b19566]">
                  <IconPhone />
                </span>
                <div>
                  <div className="text-sm font-bold text-white/90">اتصال</div>
                  <div className="text-xs text-white/65">{clinicInfo.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 transition hover:bg-emerald-400/15 hover:border-emerald-400/30"
              >
                <span className="text-emerald-300">
                  <IconWhatsApp />
                </span>
                <div>
                  <div className="text-sm font-bold text-white/90">واتساب</div>
                  <div className="text-xs text-white/65">حجز واستفسار سريع</div>
                </div>
              </a>

              <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition hover:bg-white/10 hover:border-white/20"
              >
                <span className="text-[#b19566]">
                  <IconPin />
                </span>
                <div>
                  <div className="text-sm font-bold text-white/90">الموقع</div>
                  <div className="text-xs text-white/65">افتح الخرائط للوصول السريع</div>
                </div>
              </a>
            </div>

            {/* ساعات دوام (اختياري) */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm font-extrabold text-white/90">ساعات الدوام</div>
              <div className="mt-2 text-xs text-white/65 leading-relaxed">
                السبت - الخميس: 8:00 ص — 10:00 م
           
              </div>
            </div>
          </div>
        </div>

        {/* شريط سفلي */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-white/60">
            © {year} {clinicInfo.name} — جميع الحقوق محفوظة
          </div>

          <a
            href="#top"
            className="text-xs text-white/70 hover:text-white transition underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
          >
            رجوع للأعلى
          </a>
        </div>
      </div>
    </footer>
  );
}
