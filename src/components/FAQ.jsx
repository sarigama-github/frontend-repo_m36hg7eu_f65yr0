export default function FAQ() {
  const faqs = [
    {
      q: "Is Toothwhite safe for daily use?",
      a: "Yes. It uses genuine herbal extracts with an optimum 1000 PPM fluoride level for enamel protection, suitable for all age groups.",
    },
    {
      q: "Does it contain harmful chemicals?",
      a: "No. It's formulated without parabens, triclosan, PEGs, artificial colors, or artificial flavors.",
    },
    {
      q: "Will it help with bad breath?",
      a: "Cardamom and clove help fight odor-causing bacteria to provide long-lasting freshness.",
    },
    {
      q: "What about sensitivity?",
      a: "Sensitivity often results from enamel thinning due to fluoride deficiency. Toothwhite includes safe fluoride levels to help protect enamel.",
    },
    {
      q: "Who manufactures Toothwhite?",
      a: "Produced by a GMP certified company, approved by Dept of Ayush (Govt of Telangana), and tested in NABL accredited labs.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white/5 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Questions & answers</h2>
        <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 overflow-hidden">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group open:bg-white/5">
              <summary className="cursor-pointer px-6 py-4 text-white font-medium select-none">
                {q}
              </summary>
              <div className="px-6 pb-6 pt-0 text-white/80">{a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
