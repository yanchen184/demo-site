function Footer() {
  return (
    <footer className="relative px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl glass p-10 text-center glow">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-accent-cyan">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan animate-pulse" />
            BUILT WITH CLAUDE CODE
          </div>
          <p className="text-xl font-semibold text-white sm:text-2xl">
            Powered by <span className="text-gradient">Claude Code</span>
          </p>
          <p className="mt-3 text-base text-slate-400">
            從零到上線只花了 10 分鐘
          </p>

          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} AI 概論初級班 · 用 AI 重新定義工作效率
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
