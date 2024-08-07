import Image from "next/image";
import realImgSrc from "../../public/images/polash_ahmad.jpg";
import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function IntroPage() {
  return (
    <section className="container mx-auto pt-[4vh]">
      <div className="mx-4 xl:mx-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 pt-[10vh] lg:py-[20vh]">
          <div>
            <div className="block mx-auto object-cover w-64 sm:w-96">
              <Image
                src={realImgSrc}
                alt="Polash Ahmad"
                priority
                className="rounded-2xl"
              />
            </div>
          </div>
          <div className="opacity-85">
            <h1 className={`mb-4 lg:leading-[61px] text-3xl text-center lg:text-left lg:text-5xl ${righteous.className}`}>
              Hi there,
              <br />
              I&apos;m <span className="text-[#20bf55]">Polash Ahmad</span>
            </h1>
            <p className="text-center lg:text-left mb-8">
              Transforming ideas into visually stunning and high-performing web interfaces is my specialty.
              With expertise in front-end development, I create solutions that blend elegance with efficiency.
              Eye for design ensures pixel-perfect accuracy, while my commitment to innovation drives me to explore and implement the latest techniques.
              Let&apos;s collaborate and bring your vision to life with exceptional results!
            </p>
            <div className="text-[13px] flex items-center justify-center lg:justify-start gap-4">
              <button className="bg-[#171717] px-6 py-[14px] uppercase rounded-tr-xl rounded-bl-xl border border-solid border-[rgba(255,255,255,.1)] transition-all hover:border-[#20bf55] hover:rounded-xl hover:text-[#20bf55]">Download</button>
              <button className="bg-[#171717] px-6 py-[14px] uppercase rounded-tr-xl rounded-bl-xl border border-solid border-[rgba(255,255,255,.1)] transition-all hover:border-[#20bf55] hover:rounded-xl hover:text-[#20bf55]">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
