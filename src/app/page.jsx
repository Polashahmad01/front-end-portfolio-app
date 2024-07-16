import IntroPage from "@/components/IntroPage";
import WhatIDoPage from "@/components/WhatIDoPage";
import ToolIUsePage from "@/components/ToolsIUsePage";
import MyRecentWorkPage from "@/components/MyRecentWorkPage";

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <IntroPage />
      <WhatIDoPage />
      <ToolIUsePage />
      <MyRecentWorkPage />
    </main>
  );
}
