"use client";

import { useState } from "react";
import { clinicInfo, services } from "./data";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [note, setNote] = useState("");

  const telUrl = `tel:${clinicInfo.phoneDisplay}`;

  function submitToWhatsapp(e: React.FormEvent) {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanService = service.trim();
    const cleanNote = note.trim();

    if (!cleanName || !cleanPhone || !cleanService) {
      alert("رجاءً أدخل الاسم ورقم الهاتف واختر الخدمة.");
      return;
    }

    const msg =
      `مرحباً، أود حجز موعد في ${clinicInfo.name}.\n\n` +
      `الاسم: ${cleanName}\n` +
      `رقم الهاتف: ${cleanPhone}\n` +
      `الخدمة: ${cleanService}\n` +
      (cleanNote ? `ملاحظة: ${cleanNote}\n` : "");

    const url = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="booking" className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white">حجز موعد</h2>
      <p className="mt-2 text-white/75">الفورم يفتح واتساب برسالة جاهزة تلقائياً.</p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <form
          onSubmit={submitToWhatsapp}
          className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-lg shadow-blue-500/10"
        >
          <div className="grid gap-4">
            <div>
              <label className="text-sm text-white/80">الاسم</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/20"
                placeholder="اكتب اسمك"
              />
            </div>

            <div>
              <label className="text-sm text-white/80">رقم الهاتف</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/20"
                placeholder="07XXXXXXXX"
              />
            </div>

            <div>
              <label className="text-sm text-white/80">الخدمة</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-white/20"
              >
                <option value="" className="text-slate-900">اختر الخدمة</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title} className="text-slate-900">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-white/80">ملاحظة (اختياري)</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white/20"
                placeholder="مثال: أفضل وقت بعد الساعة 5"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="rounded-xl bg-emerald-500 px-4 py-3 text-white text-sm font-semibold hover:bg-emerald-600"
            >
              إرسال على واتساب
            </button>

            <div className="text-xs text-white/65">
              أو اتصل مباشرة:{" "}
              <a href={telUrl} className="underline underline-offset-4 text-white">
                {clinicInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </form>

        <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 shadow-lg shadow-blue-500/10">
          <div className="text-white font-bold text-lg">روابط سريعة</div>
          <div className="mt-4 grid gap-3">
            <a
              href={clinicInfo.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white hover:bg-white/15"
            >
              فيسبوك (وهمي)
            </a>
            <a
              href={clinicInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white hover:bg-white/15"
            >
              إنستغرام (وهمي)
            </a>
                <a
                href={clinicInfo.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white hover:bg-white/15"
                >
                افتح الموقع على Google Maps
                </a>

          </div>
        </div>
      </div>
    </section>
  );
}
