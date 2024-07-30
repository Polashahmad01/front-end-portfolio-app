import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="relative text-white font-light uppercase text-sm tracking-wide opacity-85">
      <div className="fixed top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-solid rounded-[80px] backdrop-blur-xl border-[rgba(255,255,255,.1)] bg-[rgba(4,19,14,.5)] flex items-center p-4">
        <div>
          <Link className="px-8 border-r border-solid border-[rgba(255,255,255,.1)]" href="#">Home</Link>
        </div>
        <div>
          <Link className="px-8 border-r border-solid border-[rgba(255,255,255,.1)]" href="#">Skills</Link>
        </div>
        <div>
          <Link className="px-8 border-r border-solid border-[rgba(255,255,255,.1)]" href="#">Tools</Link>
        </div>
        <div>
          <Link className="px-8 border-r border-solid border-[rgba(255,255,255,.1)]" href="#">Projects</Link>
        </div>
        <div>
          <Link className="px-8 border-r border-solid border-[rgba(255,255,255,.1)]" href="#">Career</Link>
        </div>
        <div>
          <Link className="px-8" href="#">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
