import { Righteous } from "next/font/google";
import { US } from "country-flag-icons/react/3x2";
import { GrFormNextLink } from "react-icons/gr";
import Image from "next/image";
import tattooDesignProImgSrc from "../../public/images/tattoo-design-pro.png";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function MyRecentWorkPage() {
  return (
    <section className="container mx-auto">
      <h3 className={`mb-4 leading-[61px] text-5xl ${righteous.className}`}>My Recent Projects</h3>

      <div>

        <div>
          <div>
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
            />
          </div>
          <div>
            <div>
              <div>
                <h6>TattooDesignPro</h6>
                <GrFormNextLink />
              </div>
              <div>
                <US title="United States" />
                <p>Florida - United States</p>
              </div>
            </div>
            <div>
              <p>Designed by: Polash</p>
              <div></div>
              <p>Developed by: Polash</p>
            </div>
          </div>
        </div>
        
        <div>
          <div>
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
            />
          </div>
          <div>
            <div>
              <div>
                <h6>TattooDesignPro</h6>
                <GrFormNextLink />
              </div>
              <div>
                <US title="United States" />
                <p>Florida - United States</p>
              </div>
            </div>
            <div>
              <p>Designed by: Polash</p>
              <div></div>
              <p>Developed by: Polash</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
            />
          </div>
          <div>
            <div>
              <div>
                <h6>TattooDesignPro</h6>
                <GrFormNextLink />
              </div>
              <div>
                <US title="United States" />
                <p>Florida - United States</p>
              </div>
            </div>
            <div>
              <p>Designed by: Polash</p>
              <div></div>
              <p>Developed by: Polash</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
            />
          </div>
          <div>
            <div>
              <div>
                <h6>TattooDesignPro</h6>
                <GrFormNextLink />
              </div>
              <div>
                <US title="United States" />
                <p>Florida - United States</p>
              </div>
            </div>
            <div>
              <p>Designed by: Polash</p>
              <div></div>
              <p>Developed by: Polash</p>
            </div>
          </div>
        </div>

        <div>
          <div>
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
            />
          </div>
          <div>
            <div>
              <div>
                <h6>TattooDesignPro</h6>
                <GrFormNextLink />
              </div>
              <div>
                <US title="United States" />
                <p>Florida - United States</p>
              </div>
            </div>
            <div>
              <p>Designed by: Polash</p>
              <div></div>
              <p>Developed by: Polash</p>
            </div>
          </div>
        </div>
        
        <div>
          <div>
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
            />
          </div>
          <div>
            <div>
              <div>
                <h6>TattooDesignPro</h6>
                <GrFormNextLink />
              </div>
              <div>
                <US title="United States" />
                <p>Florida - United States</p>
              </div>
            </div>
            <div>
              <p>Designed by: Polash</p>
              <div></div>
              <p>Developed by: Polash</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// import Image from "next/image";
// import tattooDesignProImgSrc from "../../public/images/tattoo-design-pro.png";

// export default function MyRecentWorkPage() {
//   return (
//     <section className="flex flex-col justify-center items-center sm:h-screen px-4">
//       <h2 className="text-3xl text-center mb-12 sm:text-left sm:text-5xl">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 from-0% via-red-600 via-80% to-red-600/85 to-90%">My Recent Works</span>
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

//         <div className="project-work text-center">
//           <div className="rounded-bl-3xl rounded-tr-3xl">
//             <Image
//               className="rounded-bl-3xl rounded-tr-3xl"
//               src={tattooDesignProImgSrc}
//               alt="Tattoo Design Pro"
//             />
//           </div>
//           <div className="project-overlay">
//             <div className="project-content">
//               <h3 className="project-title">TattooDesignPro</h3>
//               <ul>
//                 <li>
//                   <a target="_blank" href="#">
//                     visit
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="project-work text-center">
//           <div className="rounded-bl-3xl rounded-tr-3xl">
//             <Image
//               className="rounded-bl-3xl rounded-tr-3xl"
//               src={tattooDesignProImgSrc}
//               alt="Tattoo Design Pro"
//             />
//           </div>
//           <div className="project-overlay">
//             <div className="project-content">
//               <h3 className="project-title">TattooDesignPro</h3>
//               <ul>
//                 <li>
//                   <a target="_blank" href="#">
//                     visit
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="project-work text-center">
//           <div className="rounded-bl-3xl rounded-tr-3xl">
//             <Image
//               className="rounded-bl-3xl rounded-tr-3xl"
//               src={tattooDesignProImgSrc}
//               alt="Tattoo Design Pro"
//             />
//           </div>
//           <div className="project-overlay">
//             <div className="project-content">
//               <h3 className="project-title">TattooDesignPro</h3>
//               <ul>
//                 <li>
//                   <a target="_blank" href="#">
//                     visit
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="project-work text-center">
//           <div className="rounded-bl-3xl rounded-tr-3xl">
//             <Image
//               className="rounded-bl-3xl rounded-tr-3xl"
//               src={tattooDesignProImgSrc}
//               alt="Tattoo Design Pro"
//             />
//           </div>
//           <div className="project-overlay">
//             <div className="project-content">
//               <h3 className="project-title">TattooDesignPro</h3>
//               <ul>
//                 <li>
//                   <a target="_blank" href="#">
//                     visit
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="project-work text-center">
//           <div className="rounded-bl-3xl rounded-tr-3xl">
//             <Image
//               className="rounded-bl-3xl rounded-tr-3xl"
//               src={tattooDesignProImgSrc}
//               alt="Tattoo Design Pro"
//             />
//           </div>
//           <div className="project-overlay">
//             <div className="project-content">
//               <h3 className="project-title">TattooDesignPro</h3>
//               <ul>
//                 <li>
//                   <a target="_blank" href="#">
//                     visit
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="project-work text-center">
//           <div className="rounded-bl-3xl rounded-tr-3xl">
//             <Image
//               className="rounded-bl-3xl rounded-tr-3xl"
//               src={tattooDesignProImgSrc}
//               alt="Tattoo Design Pro"
//             />
//           </div>
//           <div className="project-overlay">
//             <div className="project-content">
//               <h3 className="project-title">TattooDesignPro</h3>
//               <ul>
//                 <li>
//                   <a target="_blank" href="#">
//                     visit
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// }
