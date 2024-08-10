import { Righteous } from "next/font/google";
import { FaHtml5, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoCss3, IoLogoSass, IoLogoReact, IoTerminal } from "react-icons/io5";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiFirebase, SiRedux } from "react-icons/si";
import { BsStripe } from "react-icons/bs";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function ToolsIUsePage() {
  return (
    <section className="common-container" id="tools-i-use">
      <div className="px-4 xl:px-0 mb-[10vh]">
        <h3 className={`${righteous.className} text-3xl opacity-85 mb-[10vh] text-center lg:text-[56px]`}>Tools I Use</h3>
        <div className="grid grid-cols-2 justify-center lg:grid-cols-4 gap-4">
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <FaHtml5 color="#FFFF00" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">Html</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <IoLogoCss3 color="#FF00FF" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">Css</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <IoLogoSass color="#CE649A" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">Sass</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <RiJavascriptFill color="#EFD81A" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">JavaScript</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <IoLogoReact color="#5ED2F3" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">ReactJS</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <SiRedux color="#7248B6" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">ReduxJS</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <RiNextjsFill color="#01FFFF" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">NextJS</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <SiFirebase color="#FFCD34" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">FirebaseJS</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <BsStripe color="#685FFF" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">StripeJS</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <FaGitAlt color="#F0563B" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">Git</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <FaGithub className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">Github</p>
              </div>
            </div>
          </div>
          <div className="py-[6vh] border border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <IoTerminal color="#7248B6" className="mb-4" size="70px" />
                <p className="uppercase font-medium text-center opacity-80">Terminal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
