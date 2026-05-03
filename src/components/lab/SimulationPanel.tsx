import { Activity } from "lucide-react";
import { TreeScene } from "@/components/TreeScene";

interface SimulationPanelProps {
  lightValue: number;
}

export function SimulationPanel({ lightValue }: SimulationPanelProps) {
  return (
    <div className="glass-panel rounded-xl p-4 flex flex-col h-full overflow-hidden relative">
      <div className="flex items-center justify-between mb-3 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_oklch(0.74_0.19_145)]" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Симуляция</span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted-foreground">
          <Activity className="w-3 h-3 text-primary" />
          <span>LIVE · 60fps</span>
        </div>
      </div>

      <div className="flex-1 relative rounded-lg grid-bg bg-[oklch(0.15_0.025_145)] overflow-hidden border border-border/50">
        {/* 3D tree */}
        <div className="absolute inset-0">
          <TreeScene lightIntensity={lightValue} />
        </div>

        {/* lamp light cone */}
        <div
          className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none"
          style={{
            width: `${120 + lightValue * 1.6}px`,
            height: `${140 + lightValue * 1.2}px`,
            background:
              "radial-gradient(ellipse at top, oklch(0.92 0.14 90 / 0.35) 0%, oklch(0.92 0.14 90 / 0.12) 40%, transparent 75%)",
            clipPath: "polygon(35% 0, 65% 0, 100% 100%, 0 100%)",
            opacity: 0.4 + (lightValue / 100) * 0.6,
            transition: "opacity 0.3s, width 0.3s, height 0.3s",
          }}
        />

        {/* grow light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
          {/* cable */}
          <div className="w-px h-5 bg-gradient-to-b from-white/10 to-white/30" />
          {/* mount */}
          <div className="w-3 h-1 rounded-sm bg-gradient-to-b from-white/30 to-white/10" />
          {/* lamp body */}
          <div
            className="relative rounded-md border border-white/15 shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
            style={{
              width: 120,
              height: 10,
              background:
                "linear-gradient(180deg, oklch(0.45 0.01 250) 0%, oklch(0.28 0.01 250) 50%, oklch(0.18 0.01 250) 100%)",
            }}
          >
            {/* LED strip */}
            <div
              className="absolute inset-x-1.5 -bottom-[2px] h-[3px] rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.95 0.12 90) 0%, oklch(1 0.08 95) 50%, oklch(0.95 0.12 90) 100%)",
                boxShadow: `0 0 ${8 + lightValue * 0.4}px ${2 + lightValue * 0.15}px oklch(0.92 0.16 90 / ${0.4 + (lightValue / 100) * 0.5})`,
                opacity: 0.6 + (lightValue / 100) * 0.4,
                transition: "box-shadow 0.3s, opacity 0.3s",
              }}
            />
          </div>
        </div>

        {/* metric overlay */}
        <div className="absolute bottom-3 left-3 glass-panel-elevated rounded-md px-2.5 py-1.5 flex items-center gap-2">
          <div className="text-[9px] font-mono uppercase text-muted-foreground">O₂</div>
          <div className="text-[12px] font-mono font-semibold text-primary tabular-nums">+2.4 ml/min</div>
        </div>
        <div className="absolute bottom-3 right-3 glass-panel-elevated rounded-md px-2.5 py-1.5 flex items-center gap-2">
          <div className="text-[9px] font-mono uppercase text-muted-foreground">T°</div>
          <div className="text-[12px] font-mono font-semibold tabular-nums">22.4°C</div>
        </div>
      </div>
    </div>
  );
}
