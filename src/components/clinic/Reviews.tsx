"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div
      className="flex items-center justify-center gap-1"
      aria-label={`${count} نجوم`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-4 w-4 fill-[#b19566]">
          <path d="M12 17.3l-6.18 3.73 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.46 4.76 1.64 7.03z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const reviews = [
    {
      name: "أبو أحمد",
      text: "الصراحة تعاملهم راقي وشرحهم واضح… حجزت واتساب وجيت على الموعد بالزبط. 👍",
    },
    {
      name: "رنا",
      text: "كنت خايفة من الألم، بس جد الأمور كانت سهلة والدكتور كان يهدي ويحكي معي خطوة بخطوة.",
    },
    {
      name: "محمد",
      text: "نضافة وتعقيم ممتاز، ونتيجة التبييض طلعت طبيعية مش مبالغ فيها.",
    },
    {
      name: "هبة",
      text: "الموظفة اللي على الاستقبال لطيفة كثير، وخدمتهم سريعة وما طولوني.",
    },
    {
      name: "أم ليث",
      text: "خلع وتنظيف بدون وجع… وبصراحة حسّيت اهتمام ومتابعة بعد الزيارة.",
    },
    {
      name: "سامي",
      text: "أسعارهم واضحة من البداية، وما في مفاجآت… وهذا أهم إشي بالنسبة إلي.",
    },
  ];

  // نكررهم مرتين عشان الحركة تكون لا نهائية
  const loop = useMemo(() => [...reviews, ...reviews], [reviews]);

  // refs للحركة + السحب
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const pauseRef = useRef(false);

  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  const [dragging, setDragging] = useState(false);

  // Auto-scroll لا نهائي
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    let raf = 0;
    let last = 0;

    // السرعة px/second (غيّر الرقم إذا بدك أسرع/أبطأ)
    const speed = 35;

    const tick = (t: number) => {
      if (!last) last = t;
      const dt = t - last;
      last = t;

      const half = el.scrollWidth / 2;

      if (!pauseRef.current && half > 0) {
        el.scrollLeft += (dt * speed) / 1000;

        // لف لا نهائي
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="reviews" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="section-title text-2xl md:text-3xl text-center">
          آراء الناس
        </h2>
        <p className="section-subtitle mt-2 text-center">
          (نصوص تجريبية — بتقدر تغيّرها لما تجمع تقييمات حقيقية)
        </p>

        {/* الحاوية: Scroll + Drag + Auto */}
        <div
          dir="ltr"
          ref={marqueeRef}
          className={`mt-8 no-scrollbar select-none ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            WebkitOverflowScrolling: "touch",
            touchAction: "pan-x",
          }}
          onMouseEnter={() => (pauseRef.current = true)}
          onMouseLeave={() => (pauseRef.current = false)}
          onPointerDown={(e) => {
            const el = marqueeRef.current;
            if (!el) return;

            isDraggingRef.current = true;
            setDragging(true);

            pauseRef.current = true;

            startXRef.current = e.clientX;
            startScrollLeftRef.current = el.scrollLeft;

            (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
          }}
          onPointerMove={(e) => {
            const el = marqueeRef.current;
            if (!el || !isDraggingRef.current) return;

            const dx = e.clientX - startXRef.current;

            const half = el.scrollWidth / 2 || 1;

            let next = startScrollLeftRef.current - dx;

            // لف لا نهائي حتى أثناء السحب
            next = ((next % half) + half) % half;
            el.scrollLeft = next;
          }}
          onPointerUp={() => {
            isDraggingRef.current = false;
            setDragging(false);
            pauseRef.current = false;
          }}
          onPointerCancel={() => {
            isDraggingRef.current = false;
            setDragging(false);
            pauseRef.current = false;
          }}
        >
          <div
            className="doctors-track"
            style={{
              display: "flex",
              flexWrap: "nowrap",
              gap: "20px",
              width: "max-content",
              padding: "8px 0",
              animation: "none",
              transform: "none",
            }}
          >
            {loop.map((r, i) => (
              <div key={`${r.name}-${i}`} className="shrink-0 w-[320px]">
                <div className="card card-hover p-6">
                  <Stars />
                  <p className="mt-4 text-sm text-[#1c2035]/75 leading-relaxed text-center">
                    “{r.text}”
                  </p>
                  <div className="mt-4 text-center font-extrabold text-[#1c2035]">
                    {r.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 text-xs text-[#1c2035]/60 text-center" dir="rtl">
          اسحب يمين/يسار للتنقل بين التقييمات.
        </div>
      </div>
    </section>
  );
}
