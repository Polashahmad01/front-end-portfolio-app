import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function WhatIDoPage() {
  return (
    <section className="container mx-auto h-[70vh]">
      <p>What I Do</p>
      <h2 className={`mb-4 leading-[61px] text-5xl ${righteous.className}`}>Skills</h2>

      <div className="grid grid-cols-3 gap-8 mb-4">

        <div className="px-10 py-12 border border-solid rounded-xl backdrop-blur-xl border-[rgba(255,255,255,.1)]">
          <div>
            <div></div>
            <div>01</div>
          </div>
          <h3 className={`${righteous.className}`}>
            <span>UI/UX</span>
            <br />
            <span>Design</span>
          </h3>
          <div className="text-sm">
            <p>
              Bring your vision to life with a stunning, responsive website. We prioritize accessibility and optimize performance for a seamless experience. Together, we'll create engaging interactions that keep your audience coming back.
            </p>
            <p>
              Let’s build a digital presence they'll love!
            </p>
          </div>
        </div>

        <div className="px-10 py-12 border border-solid rounded-xl backdrop-blur-xl border-[rgba(255,255,255,.1)]">
          <div>
            <div></div>
            <div>02</div>
          </div>
          <h3 className={`${righteous.className}`}>
            <span>Technical</span>
            <br />
            <span>Proficiency</span>
          </h3>
          <div className="text-sm">
            <p>
              Leverage modern JavaScript skills to create dynamic web applications that engage users. Focus on polished designs with CSS and preprocessors, using version control for smooth collaboration. Build tools and API integration streamline workflows and enhance functionality.
            </p>
            <p>
              Together, let's develop efficient web solutions that elevate your online presence!
            </p>
          </div>
        </div>

        <div className="px-10 py-12 border border-solid rounded-xl backdrop-blur-xl border-[rgba(255,255,255,.1)]">
          <div>
            <div></div>
            <div>03</div>
          </div>
          <h3 className={`${righteous.className}`}>
            <span>Effective</span>
            <br />
            <span>Communication</span>
          </h3>
          <div className="text-sm">
            <p>
              Foster effective communication to enhance team collaboration and improve workflows. Use agile practices to adapt quickly and deliver results efficiently. Conduct thorough code reviews to ensure high-quality standards. Prioritize clear documentation for better understanding and maintenance.
            </p>
            <p>
              Let’s encourage cross-functional collaboration for successful project outcomes!
            </p>
          </div>
        </div>
      </div>

      <div>
        <button className="text-sm p-4 border border-solid rounded-[80px] backdrop-blur-xl border-[rgba(255,255,255,.1)] bg-[rgba(4,19,14,.5)]">
          Let's chat on Whatsapp
        </button>
      </div>

    </section>
  );
}

// export default function WhatIDoPage() {
//   return (
//     <section className="flex flex-col justify-center items-center h-screen px-4">
//       <h2 className="text-3xl text-center mb-12 sm:text-left sm:text-5xl">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 from-0% via-red-600 via-80% to-red-600/85 to-90%">What I Do</span>
//       </h2>

//       <div className="flex flex-wrap justify-center gap-8 w-full">
//         <div className="w-full sm:w-3/12 bg-[#ffffff08] backdrop-blur-md border border-solid border-[rgba(255,255,255,.1)] p-6 rounded-bl-3xl rounded-tr-3xl">
//           <div className="mb-4">
//             <h4 className="text-xl sm:text-2xl">UI/UX</h4>
//           </div>
//           <div>
//             <ul>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Design Implementation</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Responsive Design</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Accessibility</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Performance Optimization</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Feedback and Interaction</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="w-full sm:w-3/12 bg-[#ffffff08] backdrop-blur-md border border-solid border-[rgba(255,255,255,.1)] p-6 rounded-bl-3xl rounded-tr-3xl">
//           <div className="mb-4">
//             <h4 className="text-xl sm:text-2xl">Technical</h4>
//           </div>
//           <div>
//             <ul>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Proficient in Modern JavaScript</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">CSS and Preprocessors</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Version Control</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Build Tools and Task Runners</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">API Integration</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="w-full sm:w-3/12 bg-[#ffffff08] backdrop-blur-md border border-solid border-[rgba(255,255,255,.1)] p-6 rounded-bl-3xl rounded-tr-3xl">
//           <div className="mb-4">
//             <h4 className="text-xl sm:text-2xl">Collaboration</h4>
//           </div>
//           <div>
//             <ul>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Effective Communication</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Agile Practices</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Code Reviews</span>
//               </li>
//               <li className="flex items-center gap-2 mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Documentation</span>
//               </li>
//               <li className="flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
//                   <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
//                 </svg>
//                 <span className="text-sm">Cross-Functional Collaboration</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
