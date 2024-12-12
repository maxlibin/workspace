import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { LeftPanel } from "@/components/panels/LeftPanel";
import { RightPanel } from "@/components/panels/RightPanel";

export default function Home() {
  return (
    <main className="h-screen">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <LeftPanel />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <RightPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
