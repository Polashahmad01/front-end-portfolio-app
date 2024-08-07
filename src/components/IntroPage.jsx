import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { IoArrowForwardOutline } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare, FaCloudDownloadAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import realImgSrc from "../../public/images/polash_ahmad.jpg";
import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function IntroPage() {
  return (
    <section style={{ maxWidth: "1300px", margin: "auto" }} className="mx-auto py-[20vh]">
      <div className="mx-4 xl:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div className="flex items-center">
            <div className="relative">
              <div className="block mx-auto object-cover w-64 lg:w-[500px]">
                <Image
                  src={realImgSrc}
                  alt="Polash Ahmad"
                  priority
                  className="rounded-[30px]"
                />
              </div>
              <div className="hidden absolute -right-7 -bottom-7 bg-[#20bf55] rounded-full w-40 h-40 lg:flex justify-center items-center border-[30px] border-solid border-black -rotate-45">
                <IoArrowForwardOutline size="80px" className="text-black" />
              </div>
            </div>
            <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-8 lg:opacity-80">
              <p className="rotate-90 mb-12 font-extralight">Follow me on:</p>
              <div className="w-[0.5px] h-20 bg-white" />
              <div className="flex flex-col gap-4">
                <FaLinkedin className="h-6 w-6" />
                <FaTwitterSquare className="h-6 w-6" />
                <FaSquareFacebook className="h-6 w-6" />
                <FaSquareWhatsapp className="h-6 w-6" />
              </div>
            </div>
          </div>

          <div className="">
            <h1 className={`mb-6 lg:leading-[61px] text-3xl text-center lg:text-left lg:text-[56px] ${righteous.className}`}>
              Hi there,
              <br />
              I&apos;m <span className="text-[#20bf55]">Polash Ahmad</span>
            </h1>
            <p className="text-center leading-6 lg:text-left mb-8 opacity-75">
              Transforming ideas into visually stunning and high-performing web interfaces is my specialty.
              With expertise in front-end development, I create solutions that blend elegance with efficiency.
              Eye for design ensures pixel-perfect accuracy, while my commitment to innovation drives me to explore and implement the latest techniques.
              Let&apos;s collaborate and bring your vision to life with exceptional results!
            </p>
            <div className="text-lg font-semibold flex items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center justify-center gap-2 bg-[#20bf55] w-52 text-black py-[11px] rounded-xl border border-solid border-[rgba(255,255,255,.1)] transition-all hover:border-[#20bf55] hover:rounded-xl">
                <FaCloudDownloadAlt size="20px" className="text-black" />
                <button className="">Download</button>
              </div>
              <div className="flex items-center justify-center gap-2 bg-[#171717] py-[11px] w-52 rounded-xl border border-solid border-[rgba(255,255,255,.1)] transition-all hover:border-[#20bf55] hover:rounded-xl hover:text-[#20bf55]">
                <MdEmail size="18px" className="" />
                <button className="">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
