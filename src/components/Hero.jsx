import { Sparkles, ShieldCheck, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-500/10 to-sky-500/20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur">
            <Leaf className="h-4 w-4 text-emerald-300" />
            Herbal fluoride care • 1000 PPM max
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            Toothwhite by ZN Herbals
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/80 leading-relaxed">
            Promise of complete dental care. Healthy, naturally white teeth powered by genuine herbal extracts — crafted for everyday protection and lasting freshness.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white">
              <Sparkles className="h-4 w-4 text-amber-300" />
              Whitens and strengthens
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-white">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Cavity + Gingivitis protection
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href="#benefits" className="px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-400 transition">Explore benefits</a>
            <a href="#ingredients" className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/10 transition">See ingredients</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-tr from-emerald-500/20 via-cyan-400/10 to-transparent rounded-3xl blur-2xl" />
          <div className="relative aspect-[4/5] md:aspect-square rounded-3xl bg-white/5 border border-white/10 backdrop-blur p-6 flex items-end shadow-2xl">
            {/* Minimal product mockup */}
            <div className="w-full h-full rounded-2xl bg-gradient-to-b from-white to-slate-100 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="h-2 w-20 rounded-full bg-emerald-500/80" />
                <div className="h-2 w-8 rounded-full bg-slate-300" />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">TOOTHWHITE</h3>
                <p className="text-slate-600">Herbal Fluoride Toothpaste</p>
                <div className="mt-4 flex gap-2">
                  <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700">Cardamom</span>
                  <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700">Clove</span>
                  <span className="text-xs px-2 py-1 rounded bg-emerald-100 text-emerald-700">Neem</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
