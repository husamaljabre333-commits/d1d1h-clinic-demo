import { clinicInfo } from "./data";

export default function Contact() {
  const telUrl = `tel:${clinicInfo.phoneDisplay}`;
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود الاستفسار عن العيادة."
  )}`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="section-title text-2xl md:text-3xl">تواصل معنا</h2>
      <p className="section-subtitle mt-2">يمكن استبدال الخريطة لاحقاً برابطك الحقيقي.</p>

      <div className="mt-7 grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <div className="grid gap-3 text-sm">
            <div className="flex items-center justify-between rounded-xl bg-[#f1f3fa] p-4 border border-black/5">
              <span>📞 رقم الهاتف</span>
              <span className="font-bold">{clinicInfo.phoneDisplay}</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-[#f1f3fa] p-4 border border-black/5">
              <span>💬 واتساب</span>
              <span className="font-bold">{clinicInfo.phoneDisplay}</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-[#f1f3fa] p-4 border border-black/5">
              <span>📍 Google Maps</span>
              <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="font-bold underline underline-offset-4 text-primary"
              >
                فتح الخريطة
              </a>
            </div>
          </div>

          <div className="mt-5 flex gap-2">
            <a href={telUrl} className="btn-outline-main flex-1 text-center px-4 py-3 text-sm">
              اتصال
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-main flex-1 text-center px-4 py-3 text-sm"
            >
              واتساب
            </a>
          </div>
        </div>

        <div className="card p-3 overflow-hidden">
          <iframe
            src={clinicInfo.googleMapsEmbedUrl}
            width="100%"
            height="360"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="خريطة"
            className="rounded-2xl border border-black/5 bg-white"
          />
        </div>
      </div>
    </section>
  );
}
