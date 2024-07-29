import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export default function NavigationController() {
  return (
    <>
      <div className="hidden sm:block">
        <Navigation />
      </div>
      <div className="block sm:hidden">
        <MobileNavigation />
      </div>
    </>
  );
}
