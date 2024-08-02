import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function ContactPage() {
  return (
    <section className="container mx-auto my-[10vh]">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-20 mx-4 xl:mx-0">
        <div className="opacity-85">
          <div className="mb-6">
            <button className="px-4 py-[6px] uppercase text-sm border border-solid rounded-[80px] backdrop-blur-xl border-[rgba(255,255,255,.1)] bg-[rgba(4,19,14,.5)]">Contact Us</button>
          </div>
          <h4 className={`${righteous.className} text-3xl lg:text-5xl mb-6`}>Let&#39;s Get In Touch!</h4>
          <p className="font-light mb-6">
            If you&#39;re interested in learning more about me, collaborating on a project, or simply curious and want to say hello, please don&#39;t hesitate to send me a message. I enjoy receiving messages from people on the internet!
          </p>
          <div className="border-t border-solid border-[#181818] mb-6" />
          <p className={`${righteous.className} text-lg mb-4`}>Follow Me</p>
          <div className="flex flex-wrap items-center gap-4">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="25" height="25" rx="7.13616" stroke="#14142B" strokeWidth="2" />
              <path d="M19.8968 8.1543V8.1543C16.9993 8.1543 14.6504 10.5032 14.6504 13.4007V25.4407" stroke="#14142B" strokeWidth="2" strokeLinecap="round" />
              <line x1="12.083" y1="14.6914" x2="20.0032" y2="14.6914" stroke="#14142B" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg width="30" height="26" viewBox="0 0 30 26" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.32747 18.7162L5.98371 18.2546L4.76351 17.0432C2.49398 14.7902 1.80935 11.9233 1.97021 9.08832C2.11509 6.53473 2.94701 4.06872 3.86092 2.2682C4.59404 3.40359 5.74989 4.56191 6.89868 5.54515C8.22623 6.68139 9.65495 7.67674 10.669 8.2354L12.1516 9.05212V7.35952C12.1516 6.02306 12.9027 4.56641 14.1977 3.41306C15.4835 2.26791 17.1994 1.52214 18.9347 1.52214C20.1769 1.52214 21.438 1.9361 22.5087 2.48127C23.5886 3.03113 24.3747 3.66262 24.6722 3.98959L24.9071 4.24771L25.2515 4.30365L28.4117 4.81689L26.12 8.79971L25.9887 9.02782L25.9867 9.29099C25.9212 18.0788 20.1872 24.8737 12.6551 24.9983C9.8062 25.0455 7.26621 24.0946 5.24663 22.8164C3.58427 21.7643 2.31626 20.5167 1.54851 19.4907L4.32747 18.7162Z" stroke="#14142B" strokeWidth="2" />
            </svg>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="25" height="25" rx="7.13616" stroke="#14142B" strokeWidth="2" />
              <line x1="8.15723" y1="11.9707" x2="8.15723" y2="19.6031" stroke="#14142B" strokeWidth="2" strokeLinecap="round" />
              <circle cx="8.12006" cy="7.95111" r="1.40717" fill="#14142B" />
              <path d="M19.3868 19.5944V15.1211C19.3868 13.4044 17.9951 12.0127 16.2784 12.0127V12.0127C14.5616 12.0127 13.1699 13.4044 13.1699 15.1211V19.5944" stroke="#14142B" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="#fff" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1C6.37273 1 1 6.37273 1 13C1 15.2211 1.606 17.3004 2.65818 19.0845L1 25L7.14945 23.4765C8.88073 24.4453 10.8749 25 13 25C19.6273 25 25 19.6273 25 13C25 6.37273 19.6273 1 13 1Z" stroke="#14142B" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
              <path d="M15.1745 14.8396C15.4488 14.5797 15.8145 14.4393 16.1916 14.4491C16.5688 14.4589 16.9267 14.6181 17.1872 14.8919L18.4972 16.4316C18.7262 16.7323 18.8271 17.1117 18.7777 17.4869C18.7284 17.862 18.5328 18.2023 18.2339 18.4331L17.2994 19.2346C16.9346 19.5703 16.4675 19.7726 15.9738 19.8085C15.48 19.8444 14.9887 19.7119 14.5794 19.4325C10.8724 17.7136 7.80687 14.148 6.54431 9.98941C6.3332 9.54051 6.27941 9.03324 6.39166 8.54984C6.5039 8.06643 6.77559 7.63522 7.1627 7.3261L8.09908 6.52381C8.37351 6.26445 8.73909 6.12456 9.11598 6.13468C9.49288 6.14481 9.85047 6.30413 10.1107 6.57785L11.4216 8.11762C11.6502 8.41837 11.751 8.79767 11.7018 9.17269C11.6527 9.54771 11.4576 9.88797 11.1592 10.1192L10.5913 10.6066C11.7574 12.3204 13.1046 13.9028 14.6095 15.3263L15.1745 14.8396Z" stroke="#14142B" strokeWidth="2" strokeMiterlimit="10" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="bg-[#171717] rounded-xl px-8 py-8 lg:px-10 lg:py-14">
          <h4 className={`${righteous.className} text-3xl lg:text-5xl mb-7 opacity-85`}>Let&#39;s Talk!</h4>
          <div className="grid grid-rows-1 gap-6">
            <div className="w-full">
              <input className="px-4 py-[6px] lg:px-4 lg:py-2 rounded-lg w-full" type="text" placeholder="Enter your name" />
            </div>
            <div className="w-full">
              <input className="px-4 py-[6px] lg:px-4 lg:py-2 rounded-lg w-full" type="email" placeholder="Enter your email" />
            </div>
            <div className="w-full">
              <textarea className="px-4 py-[6px] lg:px-4 lg:py-2 rounded-lg w-full" rows={8} placeholder="Enter your message"></textarea>
            </div>
            <div className="w-full">
              <button className="px-4 py-[6px] lg:px-4 lg:py-2 bg-white text-black rounded-lg w-full">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function ContactPage() {
//   return (
//     <section className="flex flex-col justify-center items-center sm:h-screen px-4">
//       <h2 className="text-3xl text-center mb-12 sm:text-left sm:text-5xl">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 from-0% via-red-600 via-80% to-red-600/85 to-90%">Let&apos;s Talk</span>
//       </h2>

//       <div className="flex flex-col w-full sm:w-2/4">

//         <div className="flex flex-col mb-4">
//           <label className="mb-2" htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="bg-[#242424] py-2 md:py-3 px-4 text-sm w-full block bg-[#ffffff08] border border-solid border-[rgba(255,255,255,.1)] rounded-lg outline-none text-white"
//             placeholder="Enter your name"
//           />
//         </div>

//         <div className="flex flex-col mb-4">
//           <label className="mb-2" htmlFor="email">Email</label>
//           <input
//             type="email"
//             className="bg-[#242424] py-2 md:py-3 px-4 text-sm w-full block bg-[#ffffff08] border border-solid border-[rgba(255,255,255,.1)] rounded-lg outline-none text-white"
//             placeholder="Enter you email"
//           />
//         </div>

//         <div className="flex flex-col mb-4">
//           <label className="mb-2" htmlFor="message">Message</label>
//           <textarea
//             name=""
//             id=""
//             className="bg-[#242424] py-2 md:py-3 px-4 text-sm w-full block bg-[#ffffff08] border border-solid border-[rgba(255,255,255,.1)] rounded-lg outline-none text-white"
//             placeholder="Enter you message"
//             rows={10}
//           >
//           </textarea>
//         </div>

//         <div className="flex flex-col my-6">
//           <button
//             className="bg-[#242424] py-2 md:py-3 px-4 text-sm w-full block bg-[#ffffff08] border border-solid border-[rgba(255,255,255,.1)] rounded-lg outline-none cursor-pointer transition-all hover:text-indigo-600"
//           >
//             Send Message
//           </button>
//         </div>

//       </div>

//     </section>
//   );
// }
