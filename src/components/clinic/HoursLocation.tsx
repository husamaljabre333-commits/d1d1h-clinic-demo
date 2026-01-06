"use client";

import { useEffect, useMemo, useState } from "react";

function getAmmanMinutesNow() {
  // نجيب الوقت حسب Asia/Amman حتى لو جهاز الزائر على توقيت ثاني
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Asia/Amman",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const hh = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const mm = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  return hh * 60 + mm;
}

export default function HoursLocation() {
  const [mins, setMins] = useState(() => getAmmanMinutesNow());

  useEffect(() => {
    const t = setInterval(() => setMins(getAmmanMinutesNow()), 30_000);
    return () => clearInterval(t);
  }, []);

  const isOpen = useMemo(() => {
    const openAt = 8 * 60;   // 08:00
    const closeAt = 22 * 60; // 22:00
    return mins >= openAt && mins < closeAt;
  }, [mins]);

  return (
    <section id="hours" className="bg-[#f1f3fa]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="section-title text-2xl md:text-3xl text-center">ساعات العمل والموقع</h2>
        <p className="section-subtitle mt-2 text-center">العنوان: عمّان</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* ساعات العمل */}
          <div className="card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-extrabold text-[#1c2035]">الدوام اليومي</div>
                <div className="mt-1 text-sm text-[#1c2035]/70">
                  من 8:00 الصبح إلى 10:00 بالليل
                </div>
              </div>

              {/* الحالة */}
              <div className="flex items-center gap-2">
                <span
                  className={`h-3 w-3 rounded-full ${
                    isOpen ? "bg-emerald-500" : "bg-red-500"
                  }`}
                  style={{ boxShadow: isOpen ? "0 0 0 6px rgba(16,185,129,0.15)" : "0 0 0 6px rgba(239,68,68,0.15)" }}
                />
                <span className={`text-sm font-bold ${isOpen ? "text-emerald-600" : "text-red-600"}`}>
                  {isOpen ? "مفتوح الآن" : "مغلق الآن"}
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-3">
              <div className="rounded-xl bg-white p-4 border border-black/5">
                <div className="text-xs text-[#1c2035]/60">ملاحظة</div>
                <div className="mt-1 text-sm text-[#1c2035]/80">
                  إذا بترتاح، احجز واتساب وبنبعث لك تأكيد سريع.
                </div>
              </div>

              {/* نبضة */}
              <div className="flex items-center gap-2 text-xs text-[#1c2035]/60">
                <span className={`inline-block h-2 w-2 rounded-full ${isOpen ? "bg-emerald-500" : "bg-red-500"} animate-pulse`} />
                الحالة بتتحدّث تلقائيًا حسب توقيت عمّان.
              </div>
            </div>
          </div>

          {/* خريطة */}
          <div className="card p-3 overflow-hidden">
            <iframe
              title="Amman Map"
              src="https://www.google.com/maps?q=Amman&output=embed"
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl border border-black/5 bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
