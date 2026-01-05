import { clinicInfo } from "./data";

export default function Contact() {
  const telUrl = `tel:${clinicInfo.phoneDisplay}`;
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود الاستفسار عن العيادة."
  )}`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white">تواصل معنا</h2>
      <p className="mt-2 text-white/75">الخريطة iframe حالياً وهمية ويمكن استبدالها لاحقاً.</p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-lg shadow-blue-500/10">
          <div className="grid gap-3 text-sm text-white/85">
            <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 p-4">
              <span>📞 رقم الهاتف</span>
              <span className="font-semibold">{clinicInfo.phoneDisplay}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 p-4">
              <span>💬 واتساب</span>
              <span className="font-semibold">{clinicInfo.phoneDisplay}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 p-4">
              <span>📍 Google Maps</span>
            <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold underline underline-offset-4 text-white"
                >
                فتح الخريطة
            </a>

            </div>
          </div>

          <div className="mt-5 flex gap-2">
            <a
              href={telUrl}
              className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center text-sm text-white hover:bg-white/15"
            >
              اتصال
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 rounded-xl bg-emerald-500 px-4 py-3 text-center text-sm text-white hover:bg-emerald-600"
            >
              واتساب
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-3 shadow-lg shadow-blue-500/10 overflow-hidden">
          <iframe
            src={clinicInfo.googleMapsEmbedUrl}
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="خريطة (Demo)"
            className="rounded-2xl border border-white/20 bg-white/10"
          />
        </div>
      </div>
    </section>
  );
}
