import { clinicInfo} from "./data";

export default function Hero() {
  const telUrl = `tel:${clinicInfo.phoneDisplay}`;
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود حجز موعد في مركز القناص لطب وزراعة الأسنان."
  )}`;

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs text-[#1c2035] border border-black/5">
            <span className="h-2 w-2 rounded-full bg-[#b19566]" />
            استقبال وحجز سريع
          </span>

          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-white drop-shadow">
            ابتسامتك تبدأ من هنا
            <span className="block text-white/85 text-xl md:text-2xl font-semibold mt-2">
              {clinicInfo.name} — {clinicInfo.tagline}
            </span>
          </h1>

          <p className="mt-4 text-white/85 leading-relaxed max-w-xl">
            عناية متكاملة لطب وزراعة الأسنان بأحدث التقنيات — احجز موعدك بسهولة عبر واتساب.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#booking" className="btn-main">
              احجز الآن
            </a>

            <a href={telUrl} className="btn-outline-main bg-white/85 border-white/60 text-[#1c2035]">
              اتصال: {clinicInfo.phoneDisplay}
            </a>

            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-main">
              واتساب
            </a>
          </div>

       
        </div>

        {/* Empty column (hero image already in Page background) */}
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
