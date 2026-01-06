import Image from "next/image";
import { clinicInfo } from "./data";

const items = [
  { title: "تبييض الأسنان", desc: "استعد إشراقة ابتسامتك بتقنيات تبييض آمنة ونتائج طبيعية.", img: "/تبييض الأسنان.png" },
  { title: "تجميل الأسنان", desc: "تصميم ابتسامة متناسقة (فينير/حشوات تجميلية) بحسب حالتك.", img: "/تجميل الأسنان.png" },
  { title: "تقويم الأسنان", desc: "حلول تقويم متعددة لتحسين الاصطفاف والإطباق ومظهر الابتسامة.", img: "/تقويم الأسنان.png" },
  { title: "تنظيف وإزالة الجير", desc: "تنظيف احترافي وإزالة الجير للحفاظ على صحة اللثة ومنع الالتهابات.", img: "/تنظيف وإزالة الجير.png" },
  { title: "زراعة الأسنان", desc: "تعويض ثابت وعملي للأسنان المفقودة باستخدام زرعات عالية الجودة.", img: "/زراعة الاسنان.png" },
  { title: "علاج العصب", desc: "علاج جذور الأسنان لتخفيف الألم وإنقاذ السن بأحدث الأجهزة.", img: "/علاج العصب.png" },
];

export default function Services() {
  const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
    "مرحباً، أود الاستفسار عن خدمات العيادة."
  )}`;

  return (
    <section id="services" className="bg-[#f1f3fa]">
      <div className="mx-auto max-w-6xl px-4 py-12">
<h2 className="section-title text-2xl md:text-3xl text-center">الخدمات</h2>
<p className="section-subtitle mt-2 text-center">
  خدماتنا الأساسية — اختر الخدمة واضغط للاستفسار عبر واتساب.
</p>


        <div className="mt-10 grid gap-10">
          {items.map((it, idx) => {
            const reversed = idx % 2 === 1; // كل خدمة ثانية نعكس "مكان الصورة فقط"

            return (
              <div key={it.title} className="card overflow-hidden">
                <div className="grid md:grid-cols-2 items-stretch">
                  {/* ✅ النص (دائمًا RTL وبنفس الترتيب) */}
                  <div
                    className={`p-6 md:p-10 order-1 ${
                      reversed ? "md:order-2" : "md:order-1"
                    }`}
                    dir="rtl"
                  >
                    <h3 className="text-xl md:text-2xl font-extrabold text-[#1c2035]">
                      {it.title}
                    </h3>

                    <p className="mt-3 text-sm md:text-base text-[#1c2035]/75 leading-relaxed">
                      {it.desc}
                    </p>

                    {/* ✅ الأزرار ثابتة وما بتنقلب */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a href="#booking" className="btn-main">
                        احجز الآن
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline-main"
                      >
                        استفسار واتساب
                      </a>
                    </div>
                  </div>

                  {/* ✅ الصورة (هي اللي بتنقلب يمين/شمال) */}
                  <div
                    className={`relative min-h-[220px] md:min-h-[320px] order-2 ${
                      reversed ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <Image
                      src={encodeURI(it.img)}
                      alt={it.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={idx < 2}
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
