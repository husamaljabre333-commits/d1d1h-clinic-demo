import { services, clinicInfo } from "./data";

export default function Services() {
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود الاستفسار عن خدمات العيادة."
  )}`;

  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white">الخدمات</h2>
      <p className="mt-2 text-white/75">خدمات شائعة — يمكن تعديلها حسب العيادة.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-5 shadow-lg shadow-blue-500/10"
          >
            <div className="text-lg font-bold text-white">{s.title}</div>
            <p className="mt-2 text-sm text-white/75 leading-relaxed">{s.desc}</p>
            <div className="mt-4 flex gap-2">
              <a
                href="#booking"
                className="rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-white/90"
              >
                حجز
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15"
              >
                واتساب
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
