import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* gradient veil for readability, non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-slate-950/80" />
      <div className="relative z-10 h-full flex items-end pb-10 px-6 sm:px-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_24px_rgba(59,130,246,0.45)]">
            Terra Infinita
          </h1>
          <p className="mt-4 text-slate-200 text-base sm:text-lg leading-relaxed">
            Floating continents. Fraying reality. A blank who mirrors power at a cost. Enter Vadum—modern, familiar, and fundamentally wrong.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
