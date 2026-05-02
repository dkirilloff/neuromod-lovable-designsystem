import { Sparkles, Send } from "lucide-react";

const messages = [
  {
    role: "ai",
    text: "Привет! Я твой AI-наставник. Сегодня изучаем фотосинтез 🌱",
  },
  {
    role: "user",
    text: "Что произойдёт, если увеличить интенсивность света?",
  },
  {
    role: "ai",
    text: "Отличный вопрос. Попробуй покрутить ручку «Свет» — посмотри, как изменится скорость на графике.",
  },
];

export function ChatPanel() {
  return (
    <div className="glass-panel rounded-xl flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 shrink-0">
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-primary-foreground" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary ring-2 ring-[oklch(0.235_0.028_145)] animate-pulse" />
          </div>
          <div>
            <div className="text-[12px] font-medium leading-none">AI-Наставник</div>
            <div className="text-[10px] text-muted-foreground font-mono mt-0.5">online · GPT-4o</div>
          </div>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Чат</span>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-3 space-y-3">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] px-3 py-2 rounded-lg text-[12.5px] leading-relaxed ${
                m.role === "user"
                  ? "bg-gradient-to-br from-primary to-[oklch(0.66_0.19_145)] text-primary-foreground rounded-br-sm"
                  : "bg-white/[0.04] border border-white/5 text-foreground/90 rounded-bl-sm"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        <div className="flex justify-start">
          <div className="px-3 py-2 rounded-lg bg-white/[0.04] border border-white/5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" style={{ animationDelay: "0.2s" }} />
            <span className="w-1.5 h-1.5 rounded-full bg-primary/70 animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-border/60 shrink-0">
        <div className="relative flex items-center gap-2 bg-white/[0.04] border border-white/8 rounded-lg pl-3 pr-1 py-1 focus-within:border-primary/40 focus-within:shadow-[0_0_0_3px_oklch(0.74_0.19_145/0.1)] transition-all">
          <input
            type="text"
            placeholder="Спроси что-нибудь..."
            className="flex-1 bg-transparent outline-none text-[12.5px] placeholder:text-muted-foreground/60 py-1"
          />
          <button className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground hover:brightness-110 transition-all glow-primary shrink-0">
            <Send className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
