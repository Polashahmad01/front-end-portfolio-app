import NavigationController from "@/components/NavigationController";
import IntroPage from "@/components/IntroPage";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <NavigationController />
      <IntroPage />
    </main>
  )
}

// import IntroPage from "@/components/IntroPage";
// import WhatIDoPage from "@/components/WhatIDoPage";
// import ToolIUsePage from "@/components/ToolsIUsePage";
// import MyRecentWorkPage from "@/components/MyRecentWorkPage";
// import MyExperiencePage from "@/components/MyExperiencePage";
// import ContactPage from "@/components/ContactPage";

// export default function HomePage() {
//   return (
//     <main className="container mx-auto">
//       <IntroPage />
//       <WhatIDoPage />
//       <ToolIUsePage />
//       <MyRecentWorkPage />
//       <MyExperiencePage />
//       <ContactPage />
//     </main>
//   );
// }
