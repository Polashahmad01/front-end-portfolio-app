import { Righteous } from "next/font/google";
import { FaWhatsapp } from "react-icons/fa6";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function WhatIDoPage() {
  return (
    <section className="container mx-auto my-[10vh]">
      <div className="px-4 xl:px-0">
        <h3 className={`${righteous.className} text-3xl lg:text-5xl lg:text-center mb-12 opacity-85`}>Skills</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-10">
          <div className="opacity-85 p-8 rounded-xl bg-[#171717]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-6 bg-white opacity-85" />
              <div>01</div>
            </div>
            <h4 className="mb-4 text-lg font-medium uppercase">
              <span>UI/UX</span>
              <br />
              <span>Design</span>
            </h4>
            <div className="opacity-85">
              <p className="text-sm">
                Bring your vision to life with a stunning, responsive website. We prioritize accessibility and optimize performance for a seamless experience. Together, we&#39;ll create engaging interactions that keep your audience coming back.
              </p>
            </div>
          </div>
          <div className="opacity-85 p-8 rounded-xl bg-[#171717]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-6 bg-white opacity-85" />
              <div>02</div>
            </div>
            <h4 className="mb-4 text-lg font-medium uppercase">
              <span>Technical</span>
              <br />
              <span>Proficiency</span>
            </h4>
            <div className="opacity-85">
              <p className="text-sm">
                Leverage modern JavaScript skills to create dynamic web applications that engage users. Focus on polished designs with CSS and preprocessors, using version control for smooth collaboration. Build tools and API integration streamline workflows and enhance functionality.
              </p>
            </div>
          </div>
          <div className="opacity-85 p-8 rounded-xl bg-[#171717]">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[2px] w-6 bg-white opacity-85" />
              <div>03</div>
            </div>
            <h4 className="mb-4 text-lg font-medium uppercase">
              <span>Effective</span>
              <br />
              <span>Communication</span>
            </h4>
            <div className="opacity-85">
              <p className="text-sm">
                Foster effective communication to enhance team collaboration and improve workflows. Use agile practices to adapt quickly and deliver results efficiently. Conduct thorough code reviews to ensure high-quality standards. Prioritize clear documentation for better understanding and maintenance.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="flex items-center gap-4 py-3 px-4 text-sm border border-solid rounded-[80px] backdrop-blur-xl border-[rgba(255,255,255,.1)] bg-[rgba(4,19,14,.5)]">
            <button className="pl-4">
              Let&#39;s chat on Whatsapp
            </button>
            <FaWhatsapp size="25px" />
          </div>
        </div>
      </div>
    </section>
  );
}
