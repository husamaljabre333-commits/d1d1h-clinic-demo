function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center justify-center gap-1" aria-label={`${count} نجوم`}>
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

  return (
    <section id="reviews" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="section-title text-2xl md:text-3xl text-center">آراء الناس</h2>
        <p className="section-subtitle mt-2 text-center">
          (نصوص تجريبية — بتقدر تغيّرها لما تجمع تقييمات حقيقية)
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="card card-hover p-6">
              <Stars />
              <p className="mt-4 text-sm text-[#1c2035]/75 leading-relaxed text-center">
                “{r.text}”
              </p>
              <div className="mt-4 text-center font-extrabold text-[#1c2035]">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
