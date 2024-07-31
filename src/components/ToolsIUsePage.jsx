import { Righteous } from "next/font/google";
import { FaHtml5, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoCss3, IoLogoSass, IoLogoReact, IoTerminal } from "react-icons/io5";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiFirebase, SiRedux } from "react-icons/si";
import { BsStripe } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { VscVscode } from "react-icons/vsc";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function ToolsIUsePage() {
  return (
    <section className="container mx-auto h-[70vh]">
      <h3 className={`mb-4 leading-[61px] text-5xl ${righteous.className}`}>Tools I Use</h3>

      <div>

        <div>
          <FaHtml5 />
          <p>Html</p>
        </div>

        <div>
          <IoLogoCss3 />
          <p>Css</p>
        </div>

        <div>
          <IoLogoSass />
          <p>Sass</p>
        </div>

        <div>
          <RiJavascriptFill />
          <p>JavaScript</p>
        </div>

        <div>
          <IoLogoReact />
          <p>ReactJS</p>
        </div>

        <div>
          <RiNextjsFill />
          <p>NextJS</p>
        </div>

        <div>
          <SiFirebase />
          <p>FirebaseJS</p>
        </div>

        <div>
          <SiRedux />
          <p>ReduxJS</p>
        </div>

        <div>
          <BsStripe />
          <p>StripeJS</p>
        </div>

        <div>
          <FaGitAlt />
          <p>Git</p>
        </div>

        <div>
          <FaGithub />
          <p>Github</p>
        </div>

        <div>
          <IoTerminal />
          <p>Terminal</p>
        </div>

        <div>
          <MdDevices />
          <p>Dev Tools</p>
        </div>

        <div>
          <VscVscode />
          <p>VS Code</p>
        </div>

      </div>
    </section>
  );
}

// export default function ToolIUsePage() {
//   return (
//     <section className="flex flex-col justify-center items-center h-screen px-4">
//       <h2 className="text-3xl text-center mb-12 sm:text-left sm:text-5xl">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 from-0% via-red-600 via-80% to-red-600/85 to-90%">Tools I Use</span>
//       </h2>

//       <div className="flex flex-wrap justify-center gap-8 w-full">
//         <div className="w-full sm:w-3/12 bg-[#ffffff08] backdrop-blur-md border border-solid border-[rgba(255,255,255,.1)] p-6 rounded-br-3xl rounded-tl-3xl">
//           <div className="mb-4">
//             <h4 className="text-xl sm:text-2xl">Language</h4>
//           </div>
//           <div>
//             <ul>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Html5</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Css3</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Sass</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">JavaScript</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">TypeScript</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="w-full sm:w-3/12 bg-[#ffffff08] backdrop-blur-md border border-solid border-[rgba(255,255,255,.1)] p-6 rounded-br-3xl rounded-tl-3xl">
//           <div className="mb-4">
//             <h4 className="text-xl sm:text-2xl">Technology</h4>
//           </div>
//           <div>
//             <ul>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">React Js</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Next Js</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Firebase Js</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Redux Js</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Stripe Js</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="w-full sm:w-3/12 bg-[#ffffff08] backdrop-blur-md border border-solid border-[rgba(255,255,255,.1)] p-6 rounded-br-3xl rounded-tl-3xl">
//           <div className="mb-4">
//             <h4 className="text-xl sm:text-2xl">Tools</h4>
//           </div>
//           <div>
//             <ul>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Git</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Github</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Terminal</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Dev Tools</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">VS Code</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
