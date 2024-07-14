import IntroPage from "@/components/IntroPage";
import WhatIDoPage from "@/components/WhatIDoPage";
import ToolIUsePage from "@/components/ToolsIUsePage";

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <IntroPage />
      <WhatIDoPage />
      <ToolIUsePage />
    </main>
  );
}
