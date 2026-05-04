import { Sparkles, BookOpen, Settings2 } from "lucide-react";

export function TopBar() {
  return (
    <header className="h-14 shrink-0 flex items-center justify-between px-5 border-b border-border/60 glass-panel relative z-10">
      <div className="flex items-center gap-2.5">
        <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center glow-primary">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-white/20" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-[15px] font-semibold tracking-tight text-glow">Нейромод</span>
          <span className="text-[11px] text-muted-foreground font-mono">v0.2 · LAB</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        <button className="h-8 px-3 rounded-md text-[13px] text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5" />
          Теория
        </button>
        <button className="h-8 px-3 rounded-md text-[13px] text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors flex items-center gap-1.5">
          <Settings2 className="w-3.5 h-3.5" />
          Настройки
        </button>
      </div>
    </header>
  );
}
