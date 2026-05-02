interface DialProps {
  label: string;
  value: number; // 0-100
  unit: string;
  displayValue: string;
  icon: React.ReactNode;
}

export function Dial({ label, value, unit, displayValue, icon }: DialProps) {
  const size = 140;
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c * 0.78; // 78% arc
  const arcLength = c * 0.78;

  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <div className="relative" style={{ width: size, height: size }}>
        {/* glow */}
        <div
          className="absolute inset-2 rounded-full blur-2xl opacity-60"
          style={{ background: `radial-gradient(circle, oklch(0.74 0.19 145 / ${0.3 + value / 250}), transparent 70%)` }}
        />
        <svg width={size} height={size} className="relative -rotate-[140deg]">
          <defs>
            <linearGradient id={`dial-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.74 0.19 145)" />
              <stop offset="100%" stopColor="oklch(0.85 0.2 150)" />
            </linearGradient>
          </defs>
          {/* track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke="oklch(1 0 0 / 0.06)"
            strokeWidth={stroke}
            strokeDasharray={`${arcLength} ${c}`}
            strokeLinecap="round"
          />
          {/* fill */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={`url(#dial-${label})`}
            strokeWidth={stroke}
            strokeDasharray={`${arcLength} ${c}`}
            strokeDashoffset={c - (value / 100) * arcLength}
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 6px oklch(0.74 0.19 145 / 0.6))" }}
          />
          {/* tick marks */}
          {Array.from({ length: 11 }).map((_, i) => {
            const a = (i / 10) * 0.78 * 2 * Math.PI;
            const x1 = size / 2 + Math.cos(a) * (r - stroke - 2);
            const y1 = size / 2 + Math.sin(a) * (r - stroke - 2);
            const x2 = size / 2 + Math.cos(a) * (r - stroke - 7);
            const y2 = size / 2 + Math.sin(a) * (r - stroke - 7);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="oklch(1 0 0 / 0.15)"
                strokeWidth={1}
              />
            );
          })}
        </svg>

        {/* center */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pb-2">
          <div className="text-muted-foreground/80 mb-0.5">{icon}</div>
          <div className="text-[22px] font-semibold tabular-nums tracking-tight text-glow">
            {displayValue}
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{unit}</div>
        </div>
      </div>
      <div className="text-[12px] font-medium text-foreground/90">{label}</div>
    </div>
  );
}
