import { clinicInfo } from "./data";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  const telUrl = `tel:${clinicInfo.phoneDisplay}`;
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود الاستفسار عن العيادة."
  )}`;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
      {/* العنوان من فوق لتحت */}
      <Reveal direction="down">
        <h2 className="section-title text-2xl md:text-3xl">تواصل معنا</h2>
      </Reveal>

      {/* الوصف من تحت لفوق */}
      <Reveal direction="up" delayMs={80}>
        <p className="section-subtitle mt-2">
          يمكن استبدال الخريطة لاحقاً برابطك الحقيقي.
        </p>
      </Reveal>

      <div className="mt-7 grid gap-6 lg:grid-cols-2">
        {/* كرت المعلومات يدخل من اليسار لليمين */}
        <Reveal direction="left" delayMs={120}>
          <div className="card p-6">
            <div className="grid gap-3 text-sm">
              <Reveal direction="up" delayMs={0}>
                <div className="flex items-center justify-between rounded-xl bg-[#f1f3fa] p-4 border border-black/5">
                  <span>📞 رقم الهاتف</span>
                  <span className="font-bold">{clinicInfo.phoneDisplay}</span>
                </div>
              </Reveal>

              <Reveal direction="up" delayMs={80}>
                <div className="flex items-center justify-between rounded-xl bg-[#f1f3fa] p-4 border border-black/5">
                  <span>💬 واتساب</span>
                  <span className="font-bold">{clinicInfo.phoneDisplay}</span>
                </div>
              </Reveal>

              <Reveal direction="up" delayMs={160}>
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
              </Reveal>
            </div>

            <div className="mt-5 flex gap-2">
              {/* زر الاتصال من اليسار */}
              <Reveal direction="left" delayMs={140} className="flex-1">
                <a
                  href={telUrl}
                  className="btn-outline-main block text-center px-4 py-3 text-sm"
                >
                  اتصال
                </a>
              </Reveal>

              {/* زر واتساب من اليمين */}
              <Reveal direction="right" delayMs={140} className="flex-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-main block text-center px-4 py-3 text-sm"
                >
                  واتساب
                </a>
              </Reveal>
            </div>
          </div>
        </Reveal>

        {/* كرت الخريطة يدخل من اليمين لليسار */}
        <Reveal direction="right" delayMs={120}>
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
        </Reveal>
      </div>
    </section>
  );
}
