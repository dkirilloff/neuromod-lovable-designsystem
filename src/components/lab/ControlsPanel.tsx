import { Sun, Wind, Play, RotateCcw } from "lucide-react";
import { Dial } from "./Dial";

export function ControlsPanel() {
  return (
    <div className="glass-panel rounded-xl p-4 flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between mb-2 shrink-0">
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Параметры</span>
        <div className="flex items-center gap-1">
          <button className="h-7 px-2.5 rounded-md text-[11px] font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 flex items-center gap-1 transition-colors">
            <RotateCcw className="w-3 h-3" />
            Сброс
          </button>
          <button className="h-7 px-3 rounded-md text-[11px] font-medium bg-gradient-to-b from-primary to-[oklch(0.66_0.19_145)] text-primary-foreground flex items-center gap-1.5 glow-primary hover:brightness-110 transition-all">
            <Play className="w-3 h-3 fill-current" />
            Запуск
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-around gap-2">
        <Dial
          label="Свет"
          value={72}
          unit="LUX"
          displayValue="7,200"
          icon={<Sun className="w-3.5 h-3.5" />}
        />
        <div className="w-px h-24 bg-border/60" />
        <Dial
          label="CO₂"
          value={45}
          unit="PPM"
          displayValue="450"
          icon={<Wind className="w-3.5 h-3.5" />}
        />
      </div>
    </div>
  );
}
