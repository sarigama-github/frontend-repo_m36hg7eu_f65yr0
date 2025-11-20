export default function Ingredients() {
  const herbs = [
    "Neem (Azadirachta indica)",
    "Tulasi (Ocimum tenuiflorum)",
    "Pippali (Piper longum)",
    "Neelagiri (Eucalyptus globulus)",
    "Clove (Syzygium aromaticum)",
    "Guava (Psidium guajava)",
    "Cardamom (Elettaria cardamomum)",
    "Rock Salt",
    "Fennel (Foeniculum vulgare)",
    "Mint (Mentha piperita)",
    "Vidanga (Embelia ribes)",
    "Haldi (Curcuma longa)",
    "Babool (Acacia arabica)",
    "Akarakara (Anacyclus pyrethrum)",
  ];

  return (
    <section id="ingredients" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Genuine herbal extracts</h2>
        <p className="mt-2 text-white/70 max-w-3xl">Researched combinations to enhance the efficiency of natural ingredients for all-day freshness and protection.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {herbs.map((h) => (
            <div key={h} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90">{h}</div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 text-emerald-100">
          <p className="font-medium">No harmful chemicals</p>
          <ul className="list-disc list-inside text-emerald-100/90 mt-2 space-y-1 text-sm">
            <li>No parabens</li>
            <li>No triclosan</li>
            <li>No PEGs</li>
            <li>No artificial colors or flavors</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
