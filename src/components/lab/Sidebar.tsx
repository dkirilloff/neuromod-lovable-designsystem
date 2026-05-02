import { Check } from "lucide-react";

const steps = [
  { n: 1, title: "Введение", status: "done" },
  { n: 2, title: "Гипотеза", status: "done" },
  { n: 3, title: "Эксперимент", status: "active" },
  { n: 4, title: "Наблюдение", status: "todo" },
  { n: 5, title: "Анализ", status: "todo" },
  { n: 6, title: "Вывод", status: "todo" },
];

export function Sidebar() {
  return (
    <aside className="w-[200px] shrink-0 glass-panel border-r border-border/60 p-4 flex flex-col gap-1 relative z-10">
      <div className="px-2 pb-3 mb-1">
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Урок 03</div>
        <div className="text-[13px] font-medium mt-0.5">Фотосинтез</div>
      </div>

      <div className="relative flex-1">
        <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-border to-border" />

        {steps.map((s) => {
          const done = s.status === "done";
          const active = s.status === "active";
          return (
            <button
              key={s.n}
              className={`relative w-full flex items-center gap-3 py-2 px-2 rounded-md text-left transition-all group ${
                active ? "bg-primary/10" : "hover:bg-white/5"
              }`}
            >
              <div
                className={`relative z-10 w-[14px] h-[14px] ml-0.5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ring-2 ring-background ${
                  done
                    ? "bg-primary text-primary-foreground"
                    : active
                    ? "bg-primary text-primary-foreground animate-pulse-glow shadow-[0_0_12px_oklch(0.74_0.19_145/0.8)]"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {done ? <Check className="w-2.5 h-2.5" strokeWidth={3} /> : s.n}
              </div>
              <span
                className={`text-[12.5px] truncate transition-colors ${
                  active ? "text-foreground font-medium" : done ? "text-muted-foreground" : "text-muted-foreground/70"
                }`}
              >
                {s.title}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-3 border-t border-border/60">
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1.5">Прогресс</div>
        <div className="h-1.5 rounded-full bg-muted overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-primary to-primary-glow rounded-full glow-primary" />
        </div>
        <div className="flex justify-between mt-1.5 text-[10px] font-mono">
          <span className="text-muted-foreground">2 / 6</span>
          <span className="text-primary">33%</span>
        </div>
      </div>
    </aside>
  );
}
