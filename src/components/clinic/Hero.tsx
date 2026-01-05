import Image from "next/image";
import { clinicInfo, highlights } from "./data";

export default function Hero() {
  const telUrl = `tel:${clinicInfo.phoneDisplay}`;
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود حجز موعد في مركز القناص لطب وزراعة الأسنان."
  )}`;

  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-10 md:pt-16">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* العمود الأول: النص */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/85">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            استقبال وحجز سريع
          </span>

          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight text-white">
            ابتسامتك تبدأ من هنا
            <span className="block text-white/75 text-xl md:text-2xl font-semibold mt-2">
              {clinicInfo.name} — {clinicInfo.tagline}
            </span>
          </h1>

          <p className="mt-4 text-white/80 leading-relaxed">
            صفحة واحدة مرتبة: خدمات العيادة، التواصل، وحجز الموعد عبر واتساب مباشرة.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:bg-white/90"
            >
              احجز الآن
            </a>

            <a
              href={telUrl}
              className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm text-white hover:bg-white/15"
            >
              اتصال: {clinicInfo.phoneDisplay}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-emerald-500 px-5 py-3 text-sm text-white hover:bg-emerald-600"
            >
              واتساب
            </a>
          </div>
        </div>

        {/* العمود الثاني: صورة + مميزات */}
        <div className="grid gap-4">
          {/* صورة الهيرو */}
          <div className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl shadow-blue-500/20">
            <Image
              src="/chair.png"
              alt="كرسي عيادة أسنان"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>


        </div>
      </div>
    </section>
  );
}
