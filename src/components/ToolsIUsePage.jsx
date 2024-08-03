import { Righteous } from "next/font/google";
import { FaHtml5, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoCss3, IoLogoSass, IoLogoReact, IoTerminal } from "react-icons/io5";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiFirebase, SiRedux } from "react-icons/si";
import { BsStripe } from "react-icons/bs";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function ToolsIUsePage() {
  return (
    <section className="container mx-auto my-[10vh]">
      <div className="px-4 xl:px-0">
        <h3 className={`${righteous.className} text-3xl lg:text-5xl lg:text-center mb-12 opacity-85`}>Tools I Use</h3>
        <div className="grid grid-cols-2 justify-center lg:grid-cols-4 gap-4">

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <FaHtml5 className="mb-4" size="70px" />
            <p className="uppercase font-medium">Html</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <IoLogoCss3 className="mb-4" size="70px" />
            <p className="uppercase font-medium">Css</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <IoLogoSass className="mb-4" size="70px" />
            <p className="uppercase font-medium">Sass</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <RiJavascriptFill className="mb-4" size="70px" />
            <p className="uppercase font-medium">JavaScript</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <IoLogoReact className="mb-4" size="70px" />
            <p className="uppercase font-medium">ReactJS</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <SiRedux className="mb-4" size="70px" />
            <p className="uppercase font-medium">ReduxJS</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <RiNextjsFill className="mb-4" size="70px" />
            <p className="uppercase font-medium">NextJS</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <SiFirebase className="mb-4" size="70px" />
            <p className="uppercase font-medium">FirebaseJS</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <BsStripe className="mb-4" size="70px" />
            <p className="uppercase font-medium">StripeJS</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <FaGitAlt className="mb-4" size="70px" />
            <p className="uppercase font-medium">Git</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <FaGithub className="mb-4" size="70px" />
            <p className="uppercase font-medium">Github</p>
          </div>

          <div className="bg-[#18181A] flex flex-col items-center rounded-md py-12">
            <IoTerminal className="mb-4" size="70px" />
            <p className="uppercase font-medium">Terminal</p>
          </div>

        </div>
      </div>
    </section>
  );
}
