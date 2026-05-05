import { BookOpen, Settings2 } from "lucide-react";
import modumLogo from "@/assets/modum-lab-logo.png";

export function TopBar() {
  return (
    <header className="h-14 shrink-0 flex items-center justify-between px-5 border-b border-border/60 glass-panel relative z-10">
      <div className="flex items-center gap-3">
        <img src={modumLogo} alt="Modum Lab" className="h-7 w-auto" />
        <span className="text-[11px] text-muted-foreground font-mono">v0.3 · LAB</span>
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
