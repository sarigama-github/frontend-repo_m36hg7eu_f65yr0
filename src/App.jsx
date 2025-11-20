import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Ingredients from "./components/Ingredients";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-slate-900/70">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-emerald-500 to-teal-500" />
            <span className="font-bold tracking-tight">Toothwhite</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#ingredients" className="hover:text-white">Ingredients</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Benefits />
        <Ingredients />
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Manufacturing & Certifications</h2>
              <ul className="mt-4 space-y-2 text-white/80">
                <li>Manufactured in a GMP certified facility</li>
                <li>Approved by Dept of Ayush, Govt of Telangana (Lic No: L-299/Ayur)</li>
                <li>Tested in NABL accredited laboratories</li>
              </ul>
              <p className="mt-6 text-white/70">For more information, please write to: info@znherbals.example</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold">Key Statements</h3>
              <ul className="list-disc list-inside mt-3 text-white/80 space-y-1 text-sm">
                <li>Permanent solution for gingivitis</li>
                <li>No harmful chemicals, artificial flavors or colors</li>
                <li>Say no to carcinogens: no parabens, triclosan, PEG</li>
                <li>Safe fluoride dose (1000 PPM max) for enamel protection</li>
              </ul>
            </div>
          </div>
        </section>
        <FAQ />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} ZN Herbals • Toothwhite</p>
          <div className="flex gap-4">
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#ingredients" className="hover:text-white">Ingredients</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
