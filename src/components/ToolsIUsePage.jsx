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
