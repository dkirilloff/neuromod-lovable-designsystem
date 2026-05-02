import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/lab/TopBar";
import { Sidebar } from "@/components/lab/Sidebar";
import { SimulationPanel } from "@/components/lab/SimulationPanel";
import { ChartPanel } from "@/components/lab/ChartPanel";
import { ControlsPanel } from "@/components/lab/ControlsPanel";
import { ChatPanel } from "@/components/lab/ChatPanel";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Нейромод — Виртуальная лаборатория" },
      { name: "description", content: "Премиальная образовательная платформа: симуляция фотосинтеза с AI-наставником." },
    ],
  }),
});

function Index() {
  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden">
      <TopBar />
      <div className="flex-1 flex min-h-0">
        <Sidebar />
        <main className="flex-1 flex flex-col gap-3 p-3 min-w-0">
          {/* Top 55% */}
          <div className="grid grid-cols-2 gap-3" style={{ flex: "55 1 0%", minHeight: 0 }}>
            <SimulationPanel />
            <ChartPanel />
          </div>
          {/* Bottom 45% */}
          <div className="grid grid-cols-2 gap-3" style={{ flex: "45 1 0%", minHeight: 0 }}>
            <ControlsPanel />
            <ChatPanel />
          </div>
        </main>
      </div>
    </div>
  );
}
