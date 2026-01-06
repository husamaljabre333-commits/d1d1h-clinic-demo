export default function WhyUs() {
  const points = [
    {
      title: "تعقيم على أصوله",
      desc: "بنلتزم بتعقيم عالي ومعايير سلامة واضحة… راحة بالك قبل كل إشي.",
    },
    {
      title: "أجهزة حديثة ونتائج أدق",
      desc: "تشخيص أوضح وخطة علاج مرتبة، عشان نتيجتك تطلع قوية ومضمونة.",
    },
    {
      title: "دكاترة خبرة وفهم",
      desc: "بنشرح لك الخيارات ببساطة، وبنختار الأنسب لإلك بدون تعقيد.",
    },
    {
      title: "مواعيد سريعة ومرونة",
      desc: "بنحاول نلاقي لك موعد قريب، وكمان بنراعي وقتك قد ما نقدر.",
    },
    {
      title: "متابعة بعد العلاج",
      desc: "مش بس علاج… متابعة ونصائح عشان تضل النتيجة ثابتة.",
    },
    {
      title: "تعامل راقي وأسعار واضحة",
      desc: "بنحكي معك بصراحة وبوضوح قبل ما نبدأ، عشان تكون عارف كل شي.",
    },
  ];

  return (
    <section id="why-us" className="bg-[#f1f3fa]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="section-title text-2xl md:text-3xl text-center">ليش إحنا؟</h2>
        <p className="section-subtitle mt-2 text-center">
          شغلة بسيطة: بدنا نخلّي زيارتك مريحة والنتيجة تطلع ممتازة.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="card card-hover p-6">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#b19566]/15 text-[#b19566] font-extrabold">
                  ✓
                </span>
                <div>
                  <div className="font-extrabold text-[#1c2035]">{p.title}</div>
                  <div className="mt-2 text-sm text-[#1c2035]/70 leading-relaxed">{p.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
