interface Feature {
  icon: string;
  title: string;
  desc: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: '安裝即上手',
    desc: '從零開始帶你安裝 Claude Code、ChatGPT 等工具，跟著做就會，不用懂技術也能 5 分鐘上線。',
    gradient: 'from-accent-violet to-accent-fuchsia',
  },
  {
    icon: '🎯',
    title: 'Prompt 設計',
    desc: '掌握指令的藝術 —— 用對的 Prompt 讓 AI 理解你、產出你真正要的內容,讓效率翻倍。',
    gradient: 'from-accent-fuchsia to-pink-400',
  },
  {
    icon: '🧠',
    title: 'AI 記憶系統',
    desc: '讓 AI 記住你的偏好、團隊規則、專案脈絡,把它養成你最了解工作的副駕。',
    gradient: 'from-accent-cyan to-accent-violet',
  },
  {
    icon: '🛡️',
    title: '資安意識',
    desc: '哪些資料能餵 AI、哪些不能?帶你建立正確的資安觀念,在享受效率的同時守住底線。',
    gradient: 'from-emerald-400 to-accent-cyan',
  },
];

function Features() {
  return (
    <section id="features" className="relative px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-accent-fuchsia">
            課程亮點
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            四大主軸,<span className="text-gradient">完整覆蓋</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            從安裝到實戰、從 Prompt 到資安,把 AI 工具真正內化進每天的工作流。
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <article
              key={feature.title}
              className="group relative animate-fade-up"
              style={{
                animationDelay: `${0.1 * idx}s`,
                opacity: 0,
              }}
            >
              <div
                className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60`}
              />
              <div className="relative h-full rounded-2xl glass p-7 transition-all duration-300 group-hover:-translate-y-2 group-hover:bg-white/10">
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-3xl shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {feature.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
