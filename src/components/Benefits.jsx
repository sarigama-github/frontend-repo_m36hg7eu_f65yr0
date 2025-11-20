import { ShieldCheck, Sparkles, Wind, Leaf, Zap } from "lucide-react";

export default function Benefits() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Complete Dental Care",
      desc: "Fights cavity-causing bacteria and helps prevent tooth decay for long-lasting oral health.",
    },
    {
      icon: Zap,
      title: "Immediate Relief",
      desc: "Gives quick comfort for people with tooth decay-related pain.",
    },
    {
      icon: Wind,
      title: "Fresh Breath",
      desc: "Cardamom and clove help combat bad-breath causing bacteria to keep breath fresh.",
    },
    {
      icon: Leaf,
      title: "Herbal + Safe",
      desc: "No parabens, triclosan, or PEG. Optimum 1000 PPM fluoride for enamel protection.",
    },
    {
      icon: Sparkles,
      title: "Whitening Care",
      desc: "Gently lifts surface stains for naturally brighter teeth without harsh chemicals.",
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-white/5 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Promise of complete dental care</h2>
        <p className="mt-2 text-white/70 max-w-3xl">Toothwhite blends genuine herbal extracts with safe fluoride levels to protect, strengthen and refresh—every day.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <Icon className="h-6 w-6 text-emerald-300" />
              <h3 className="mt-3 font-semibold text-white">{title}</h3>
              <p className="mt-1 text-white/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
