
export default function AppFooter() {
  return (
    <footer className="font-light opacity-85 border-t border-solid border-[#181818]">
      <div className="container mx-auto flex justify-center">
        <p className="py-6 text-sm sm:text-base">&copy; {new Date().getFullYear()} All rights reserved - Polash Ahmad</p>
      </div>
    </footer>
  );
}
