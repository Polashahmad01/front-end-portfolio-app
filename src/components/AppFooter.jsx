
export default function AppFooter() {
  return (
    <footer className="border-t border-solid border-[#181818] font-light opacity-85 px-4 lg:px-0">
      <div className="container mx-auto grid grid-rows-1 justify-center items-center">
        <p className="text-sm py-8">&copy; {new Date().getFullYear()} All rights reserved - PolashAhmad</p>
      </div>
    </footer>
  );
}
