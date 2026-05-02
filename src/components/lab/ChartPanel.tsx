import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip, CartesianGrid, Area, AreaChart } from "recharts";
import { TrendingUp } from "lucide-react";

const data = Array.from({ length: 30 }, (_, i) => ({
  t: i,
  rate: 30 + Math.sin(i / 3) * 15 + Math.random() * 6 + i * 0.4,
}));

export function ChartPanel() {
  const current = data[data.length - 1].rate.toFixed(1);

  return (
    <div className="glass-panel rounded-xl p-4 flex flex-col h-full overflow-hidden">
      <div className="flex items-start justify-between mb-1 shrink-0">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Скорость фотосинтеза</span>
          </div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-[26px] font-semibold tracking-tight tabular-nums text-glow">{current}</span>
            <span className="text-[11px] font-mono text-muted-foreground">μmol O₂ / m²·s</span>
          </div>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 border border-primary/20">
          <TrendingUp className="w-3 h-3 text-primary" />
          <span className="text-[11px] font-mono text-primary">+12.4%</span>
        </div>
      </div>

      <div className="flex-1 -mx-2 -mb-1">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 12, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.74 0.19 145)" stopOpacity={0.4} />
                <stop offset="100%" stopColor="oklch(0.74 0.19 145)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="oklch(0.74 0.19 145)" />
                <stop offset="100%" stopColor="oklch(0.85 0.2 150)" />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="oklch(1 0 0 / 0.05)" vertical={false} />
            <XAxis
              dataKey="t"
              tick={{ fontSize: 9, fill: "oklch(0.7 0.03 145)", fontFamily: "monospace" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 9, fill: "oklch(0.7 0.03 145)", fontFamily: "monospace" }}
              axisLine={false}
              tickLine={false}
              width={28}
            />
            <Tooltip
              contentStyle={{
                background: "oklch(0.2 0.025 145 / 0.95)",
                border: "1px solid oklch(1 0 0 / 0.1)",
                borderRadius: 8,
                fontSize: 11,
                fontFamily: "monospace",
                backdropFilter: "blur(12px)",
              }}
              labelStyle={{ color: "oklch(0.7 0.03 145)" }}
              itemStyle={{ color: "oklch(0.74 0.19 145)" }}
            />
            <Area
              type="monotone"
              dataKey="rate"
              stroke="url(#chartStroke)"
              strokeWidth={2}
              fill="url(#chartFill)"
              dot={false}
              activeDot={{ r: 4, fill: "oklch(0.85 0.2 150)", stroke: "oklch(0.18 0.025 145)", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
