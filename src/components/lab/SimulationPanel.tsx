import { Activity } from "lucide-react";

export function SimulationPanel() {
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
        {/* lamp light cone */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[120px] border-r-[120px] border-t-[180px] border-l-transparent border-r-transparent border-t-[oklch(0.85_0.18_95/0.2)] animate-lamp" />

        {/* lamp */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-1 h-6 bg-gradient-to-b from-muted-foreground/40 to-muted-foreground/60" />
          <div className="relative w-16 h-8 rounded-b-full bg-gradient-to-b from-[oklch(0.4_0.04_95)] to-[oklch(0.3_0.03_95)] border border-white/10">
            <div className="absolute inset-x-2 -bottom-1 h-3 rounded-full bg-gradient-to-b from-[oklch(0.95_0.15_95)] to-[oklch(0.8_0.18_95)] blur-[1px] animate-lamp shadow-[0_0_30px_oklch(0.85_0.18_95/0.7)]" />
          </div>
        </div>

        {/* CO2 particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `${10 + i * 11}%`,
              top: `${30 + (i % 3) * 15}%`,
              animation: `pulse-glow ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* plant */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <svg width="160" height="180" viewBox="0 0 160 180" className="animate-sway">
            <defs>
              <linearGradient id="leaf" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.85 0.2 145)" />
                <stop offset="100%" stopColor="oklch(0.55 0.18 145)" />
              </linearGradient>
              <linearGradient id="stem" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="oklch(0.7 0.15 140)" />
                <stop offset="100%" stopColor="oklch(0.45 0.1 140)" />
              </linearGradient>
            </defs>
            {/* stem */}
            <path d="M80 180 Q78 130 80 80 Q82 50 80 30" stroke="url(#stem)" strokeWidth="4" fill="none" strokeLinecap="round" />
            {/* leaves */}
            <ellipse cx="50" cy="90" rx="32" ry="14" fill="url(#leaf)" transform="rotate(-25 50 90)" opacity="0.95" />
            <ellipse cx="110" cy="75" rx="34" ry="14" fill="url(#leaf)" transform="rotate(25 110 75)" opacity="0.95" />
            <ellipse cx="55" cy="55" rx="26" ry="11" fill="url(#leaf)" transform="rotate(-30 55 55)" opacity="0.9" />
            <ellipse cx="105" cy="45" rx="28" ry="12" fill="url(#leaf)" transform="rotate(30 105 45)" opacity="0.9" />
            <ellipse cx="80" cy="28" rx="20" ry="10" fill="url(#leaf)" opacity="0.95" />
          </svg>
          {/* pot */}
          <div className="w-24 h-8 -mt-2 bg-gradient-to-b from-[oklch(0.35_0.04_60)] to-[oklch(0.22_0.03_60)] rounded-b-lg border border-white/5 shadow-lg" style={{ clipPath: "polygon(8% 0, 92% 0, 100% 100%, 0 100%)" }} />
        </div>

        {/* O2 bubbles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`o2-${i}`}
            className="absolute w-2 h-2 rounded-full border border-primary/60 bg-primary/10 backdrop-blur-sm"
            style={{
              left: `${45 + i * 4}%`,
              bottom: `${20 + i * 12}%`,
              animation: `pulse-glow ${3 + (i % 2)}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

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
