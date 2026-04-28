function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <div
          className="mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-slate-300 animate-fade-in"
          style={{ animationDelay: '0.1s', opacity: 0 }}
        >
          <span className="h-2 w-2 rounded-full bg-accent-cyan animate-pulse" />
          2026 春季開課 · 全公司適用
        </div>

        <h1
          className="text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl md:text-8xl animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <span className="text-gradient">AI 概論</span>
          <br />
          <span className="text-white">初級班</span>
        </h1>

        <p
          className="mx-auto mt-8 max-w-2xl text-lg text-slate-300 sm:text-xl animate-fade-up"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          用 AI 工具提升每個人的工作效率
        </p>

        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          <a
            href="#about"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-violet via-accent-fuchsia to-accent-cyan px-8 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 glow"
          >
            開始了解
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#features"
            className="rounded-full glass px-8 py-3 font-medium text-slate-200 transition-colors hover:bg-white/10"
          >
            課程亮點
          </a>
        </div>

        <div
          className="mt-20 animate-float"
          style={{ animationDelay: '1s' }}
          aria-hidden
        >
          <div className="mx-auto h-10 w-6 rounded-full border-2 border-white/30 p-1">
            <div className="mx-auto h-2 w-1 rounded-full bg-white/60 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
