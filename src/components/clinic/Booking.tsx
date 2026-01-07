"use client";

import { useState } from "react";
import { clinicInfo, services } from "./data";

export default function Booking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [note, setNote] = useState("");
const [age, setAge] = useState("");

  const telUrl = `tel:${clinicInfo.phoneDisplay}`;

  function submitToWhatsapp(e: React.FormEvent) {
    e.preventDefault();

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanService = service.trim();
    const cleanNote = note.trim();
const cleanAge = age.trim();

    if (!cleanName || !cleanPhone || !cleanService) {
      alert("رجاءً أدخل الاسم ورقم الهاتف واختر الخدمة.");
      return;
    }

const msg =
  `مرحباً، أود حجز موعد في ${clinicInfo.name}.\n\n` +
  `الاسم: ${cleanName}\n` +
  `رقم الهاتف: ${cleanPhone}\n` +
  (cleanAge ? `العمر: ${cleanAge}\n` : "") +
  `الخدمة: ${cleanService}\n` +
  (cleanNote ? `ملاحظة: ${cleanNote}\n` : "");


    const whatsappUrl = `https://wa.me/${clinicInfo.phoneE164}?text=${encodeURIComponent(
      msg
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
<section id="booking" className="mx-auto max-w-7xl px-4 py-12">
<h2 className="section-title text-2xl md:text-3xl text-center">حجز موعد</h2>
<p className="section-subtitle mt-2 text-center">
  الفورم يفتح واتساب برسالة جاهزة تلقائياً.
</p>
<div className="mt-7 flex justify-center">
  <form
    onSubmit={submitToWhatsapp}
    className="card p-6 w-full max-w-3xl"
  >

          <div className="grid gap-4">
            <div>
              <label className="text-sm text-[#1c2035]/80">الاسم</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input mt-1"
                placeholder="اكتب اسمك"
              />
            </div>

            <div>
              <label className="text-sm text-[#1c2035]/80">رقم الهاتف</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input mt-1"
                placeholder="07xxxxxxxx"
              />
            </div>

<div>
  <label className="text-sm text-[#1c2035]/80">العمر</label>
  <input
    value={age}
    onChange={(e) => setAge(e.target.value)}
    className="input mt-1"
    placeholder="مثال: 25"
    inputMode="numeric"
  />
</div>

            <div>
              <label className="text-sm text-[#1c2035]/80">الخدمة</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="input mt-1"
              >
                <option value="">اختر الخدمة</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-[#1c2035]/80">ملاحظات (اختياري)</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="input mt-1"
                placeholder="مثال: أمراض القلب والضغط"
                rows={4}
              />
            </div>

<button
  type="submit"
  className="
    btn-life
    w-fit
    rounded-full px-6 py-3 font-semibold transition
    bg-gradient-to-l from-emerald-500 via-emerald-500 to-emerald-600
    text-white border border-emerald-300/30
    hover:from-emerald-600 hover:to-emerald-700
  "
>
  <span>إرسال على واتساب</span>
</button>


            <div className="text-xs text-[#1c2035]/70">
              أو اتصل مباشرة:{" "}
              <a href={telUrl} className="underline underline-offset-4 text-primary">
                {clinicInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
