"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Doctor = {
  id: string;
  name: string;
  specialty: string;
  img: string;
  bio: string;
};

const DOCTORS: Doctor[] = [
  {
    id: "d1",
    name: "د. عاطف العبدالله",
    specialty: "اختصاصي تجميل الأسنان والابتسامة",
    img: "/d1.png",
    bio: "نبذة تجريبية: يهتم بتصميم الابتسامة بشكل طبيعي ويشرح الخطة للمريض خطوة بخطوة. (غيّر النص لاحقًا)",
  },
  {
    id: "d2",
    name: "د. أحمد الكيالي",
    specialty: "اختصاصي زراعة الأسنان وجراحة الفم",
    img: "/d2.png",
    bio: "نبذة تجريبية: يعتمد بروتوكولات زراعة حديثة ويهتم بمتابعة المريض بعد الإجراء لضمان أفضل نتيجة. (غيّر النص لاحقًا)",
  },
  {
    id: "d3",
    name: "د. ندى الحسن",
    specialty: "اختصاصية علاج العصب (جذور الأسنان)",
    img: "/d3.png",
    bio: "نبذة تجريبية: متخصصة بحالات الألم المعقدة وعلاج الجذور بدقة مع راحة أثناء الجلسة. (غيّر النص لاحقًا)",
  },
  {
    id: "d4",
    name: "د. ريم العطار",
    specialty: "اختصاصية تقويم الأسنان",
    img: "/d4.jpg",
    bio: "نبذة تجريبية: خطط تقويم مخصصة وتقويم شفاف/ثابت مع متابعة دورية وإرشادات سهلة. (غيّر النص لاحقًا)",
  },
  {
    id: "d5",
    name: "د. سارة النجار",
    specialty: "طب أسنان عام وعلاج اللثة والتنظيف",
    img: "/d5.jpg",
    bio: "نبذة تجريبية: تركز على الوقاية وصحة اللثة وتنظيف الجير بشكل لطيف وفعّال. (غيّر النص لاحقًا)",
  },
];

function Modal({
  open,
  onClose,
  doctor,
}: {
  open: boolean;
  onClose: () => void;
  doctor: Doctor | null;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open || !doctor) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <button
        aria-label="إغلاق"
        onClick={onClose}
        className="absolute inset-0 bg-black/55"
      />

      <div
        dir="rtl"
        className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl"
      >
        <div className="flex items-start gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-xl border border-black/10 bg-[#f1f3fa]">
            <Image src={doctor.img} alt={doctor.name} fill className="object-cover" sizes="80px" />
          </div>

          <div className="flex-1">
            <div className="text-lg font-extrabold text-[#1c2035]">{doctor.name}</div>
            <div className="mt-1 text-sm font-semibold text-[#b19566]">{doctor.specialty}</div>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-black/10 px-3 py-2 text-sm text-[#1c2035] hover:bg-black/5"
          >
            إغلاق
          </button>
        </div>

        <div className="mt-4 text-sm leading-relaxed text-[#1c2035]/80">{doctor.bio}</div>
      </div>
    </div>
  );
}

export default function Doctors() {
  const [selected, setSelected] = useState<Doctor | null>(null);

  // نكررهم مرتين عشان الحركة تكون لا نهائية
  const loop = useMemo(() => [...DOCTORS, ...DOCTORS], []);

  return (
    <section id="doctors" className="w-full bg-[#f1f3fa]">
      <div className="px-4 pt-12">
        <h2 className="section-title text-2xl md:text-3xl text-center">أطباؤنا</h2>
        <p className="section-subtitle mt-2 text-center">
          فريق متخصص بخبرة عالية — اضغط على اسم الطبيب لعرض نبذة.
        </p>
      </div>

      {/* الحركة CSS - خليها LTR بس المحتوى داخل الكرت RTL */}
      <div dir="ltr" className="mt-8 doctors-marquee">
        <div className="doctors-track">
          {loop.map((d, i) => (
            <div key={`${d.id}-${i}`} className="shrink-0 w-[320px]">
              <div className="bg-white rounded-md overflow-hidden border border-black/5 shadow-[0_0_45px_rgba(0,0,0,0.08)] transition hover:-translate-y-1.5 hover:shadow-[0_0_45px_rgba(0,0,0,0.12)]">
                <div className="relative h-[380px] w-full bg-[#f1f3fa]">
                  <Image
                    src={d.img}
                    alt={d.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>

                <div dir="rtl" className="text-center px-4 py-3">
                  <button
                    onClick={() => setSelected(d)}
                    className="w-full font-extrabold text-[#1c2035] hover:text-[#b19566] transition"
                  >
                    {d.name}
                  </button>
                  <div className="mt-1 text-[12px] font-bold text-[#b19566]">{d.specialty}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 pb-10 text-xs text-[#1c2035]/60 text-center" dir="rtl">
        مرّر الماوس فوق الكروت لإيقاف الحركة مؤقتًا، ثم اضغط على اسم الطبيب.
      </div>

      <Modal open={!!selected} doctor={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
