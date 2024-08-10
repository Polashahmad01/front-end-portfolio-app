import Link from "next/link";
import { Righteous } from "next/font/google";
import { FaTwitterSquare, FaTelegramPlane } from "react-icons/fa";
import { FaSquareFacebook, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function ContactPage() {
  return (
    <section className="common-container" id="contact-me">
      <div className="px-4 xl:px-0 mb-[10vh]">
        <h3 className={`${righteous.className} text-3xl opacity-85 mb-[10vh] text-center lg:text-[56px]`}>Contact Me</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-20 mx-4 xl:mx-0">
          <div className="opacity-85">
            <div className="mb-6">
              <Link href="mailto:dev.polashahmad@gmail.com" className={`px-4 py-[6px] uppercase text-sm border border-solid rounded-[80px] backdrop-blur-xl border-[rgba(255,255,255,.4)] bg-[rgba(4,19,14,.5)] transition-all hover:border-[#20bf55] hover:rounded-[80px] hover:text-[#20bf55]`}>Contact Me</Link>
            </div>
            <h4 className={`${righteous.className} text-3xl lg:text-5xl mb-6`}>Let&#39;s Get In Touch!</h4>
            <p className="font-light opacity-70 mb-6">
              If you&#39;re interested in learning more about me, collaborating on a project, or simply curious and want to say hello, please don&#39;t hesitate to send me a message. I enjoy receiving messages from people on the internet!
            </p>
            <div className="border-t-0 border-b-[1px] border-solid border-[#454547] mb-6" />
            <p className={`${righteous.className} text-lg mb-4`}>Follow Me</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="https://www.facebook.com/polashahmad01" target="_blank" className="transition-all hover:opacity-80">
                <FaSquareFacebook size="25px" />
              </Link>
              <Link href="https://twitter.com/polashahmad01" target="_blank" className="transition-all hover:opacity-80">
                <FaTwitterSquare size="25px" />
              </Link>
              <Link href="https://www.linkedin.com/in/polashahmad01" target="_blank" className="transition-all hover:opacity-80">
                <FaLinkedin size="25px" />
              </Link>
              <Link href="https://wa.me/+8801795186140" target="_blank" className="transition-all hover:opacity-80">
                <FaSquareWhatsapp size="25px" />
              </Link>
            </div>
          </div>
          <div className="bg-[#171717] rounded-2xl backdrop-blur px-8 py-8 lg:px-10 lg:py-14">
            <h4 className={`${righteous.className} text-3xl lg:text-5xl mb-10 opacity-85`}>Let&#39;s Talk!</h4>
            <div className="grid grid-rows-1 gap-10">
              <div className="w-full">
                <input className="py-[12px] bg-transparent border-y-0 border-t-0 border-b-[1px] border-solid border-[#454547] w-full opacity-50 transition-all outline-none focus:border-[#20bf55] focus:opacity-80" type="text" placeholder="Enter your name" />
              </div>
              <div className="w-full">
                <input className="py-[12px] bg-transparent border-y-0 border-t-0 border-b-[1px] border-solid border-[#454547] w-full opacity-50 transition-all outline-none focus:border-[#20bf55] focus:opacity-80" type="email" placeholder="Enter your email" />
              </div>
              <div className="w-full">
                <textarea className="py-[12px] bg-transparent border-y-0 border-t-0 border-b-[1px] border-solid border-[#454547] w-full opacity-50 resize-none transition-all outline-none focus:border-[#20bf55] focus:opacity-80" rows={1} placeholder="Enter your message"></textarea>
              </div>
              <button className="px-4 py-[14px] w-full flex items-center justify-center gap-2 bg-[#171717] rounded-xl border border-solid border-[rgba(255,255,255,.1)] font-semibold transition-all hover:border-[#20bf55] hover:rounded-xl hover:text-[#20bf55]">
                <FaTelegramPlane size="20px" className="" />
                <span>Send Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
