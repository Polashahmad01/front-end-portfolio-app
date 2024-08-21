"use client";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function ResumeDownloadButton() {

  return (
    <a
      className="flex items-center justify-center gap-2 bg-[#20bf55] w-52 text-black py-[11px] rounded-xl border border-solid border-[rgba(255,255,255,.1)] transition-all hover:border-[#20bf55] hover:rounded-xl hover:opacity-90"
      href="/polash-ahmad-resume.pdf"
      download="Polash_Ahmad_Resume.pdf"
    >
      <FaCloudDownloadAlt size="20px" className="text-black" />
      <span className="">Resume</span>
    </a>
  )
}
