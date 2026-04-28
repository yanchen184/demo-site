function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent-cyan">
            關於這堂課
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            讓公司<span className="text-gradient">每個人</span>
            <br className="sm:hidden" />
            都能用 AI 工具
          </h2>
        </div>

        <div className="mt-14 glass rounded-3xl p-8 sm:p-12 glow">
          <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
            這是一堂專為公司同仁設計的 AI 入門課程。
            無論你是業務、設計、工程還是行政，
            都能透過淺顯易懂的教學與實作，把 AI 工具真正用進每天的工作裡。
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            我們不講玄學、不堆名詞，而是從<span className="text-white font-semibold">「明天就能用」</span>
            的角度出發 ——
            從安裝、操作、Prompt 設計，到資安守則，一條龍帶你從零開始。
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-gradient sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: '4', label: '核心模組' },
  { value: '0→1', label: '從零到實戰' },
  { value: '100%', label: '同仁適用' },
  { value: '∞', label: '提效空間' },
];

export default About;
