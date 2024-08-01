import Image from "next/image";
import { Righteous } from "next/font/google";
import { GB, CA, US, CZ } from "country-flag-icons/react/3x2";
import { GrFormNextLink } from "react-icons/gr";
import tattooDesignProImgSrc from "../../public/images/tattoo-design-pro.png";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function MyRecentWorkPage() {
  return (
    <section className="container mx-auto">
      <h3 className={`mb-12 leading-[61px] text-5xl text-center ${righteous.className}`}>My Recent Projects</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
          <div className="mb-4">
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
              className="w-full rounded-md"
            />
          </div>
          <div className="bg-[#24272A] rounded-lg p-4">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h6 className="font-bold tracking-widest">TattooDesignPro</h6>
                <GrFormNextLink size="20px" />
              </div>
              <div className="flex gap-2">
                <GB title="United Kingdom" className="w-4" />
                <p className="text-sm opacity-70">Covent Garden, London, United Kingdom</p>
              </div>
            </div>
            <div className="text-xs flex items-center gap-2">
              <p className="opacity-60">Designed by: Polash Ahmad</p>
              <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
              <p className="opacity-60">Developed by: Polash Ahmad</p>
            </div>
          </div>
        </div>

        <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
          <div className="mb-4">
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
              className="w-full rounded-md"
            />
          </div>
          <div className="bg-[#24272A] rounded-lg p-4">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h6 className="font-bold tracking-widest">WordRocket</h6>
                <GrFormNextLink size="20px" />
              </div>
              <div className="flex gap-2">
                <CA title="Canada" className="w-4" />
                <p className="text-sm opacity-70">Spadina Road, Toronto, Canada</p>
              </div>
            </div>
            <div className="text-xs flex items-center gap-2">
              <p className="opacity-60">Designed by: Polash Ahmad</p>
              <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
              <p className="opacity-60">Developed by: Polash Ahmad</p>
            </div>
          </div>
        </div>

        <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
          <div className="mb-4">
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
              className="w-full rounded-md"
            />
          </div>
          <div className="bg-[#24272A] rounded-lg p-4">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h6 className="font-bold tracking-widest">Spontivly</h6>
                <GrFormNextLink size="20px" />
              </div>
              <div className="flex gap-2">
                <US title="United States" className="w-4" />
                <p className="text-sm opacity-70">St Petersburg, Florida, United States</p>
              </div>
            </div>
            <div className="text-xs flex items-center gap-2">
              <p className="opacity-60">Designed by: Polash Ahmad</p>
              <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
              <p className="opacity-60">Developed by: Polash Ahmad</p>
            </div>
          </div>
        </div>

        <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
          <div className="mb-4">
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
              className="w-full rounded-md"
            />
          </div>
          <div className="bg-[#24272A] rounded-lg p-4">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h6 className="font-bold tracking-widest">Eirene Cremations</h6>
                <GrFormNextLink size="20px" />
              </div>
              <div className="flex gap-2">
                <CA title="Canada" className="w-4" />
                <p className="text-sm opacity-70">Regina, Saskatchewan, Canada</p>
              </div>
            </div>
            <div className="text-xs flex items-center gap-2">
              <p className="opacity-60">Designed by: Polash Ahmad</p>
              <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
              <p className="opacity-60">Developed by: Polash Ahmad</p>
            </div>
          </div>
        </div>

        <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
          <div className="mb-4">
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
              className="w-full rounded-md"
            />
          </div>
          <div className="bg-[#24272A] rounded-lg p-4">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h6 className="font-bold tracking-widest">Zasilkovna</h6>
                <GrFormNextLink size="20px" />
              </div>
              <div className="flex gap-2">
                <CZ title="Czech Republic" className="w-4" />
                <p className="text-sm opacity-70">Českomoravská 2408, 190 00 Praha 9, Czechia</p>
              </div>
            </div>
            <div className="text-xs flex items-center gap-2">
              <p className="opacity-60">Designed by: Polash Ahmad</p>
              <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
              <p className="opacity-60">Developed by: Polash Ahmad</p>
            </div>
          </div>
        </div>

        <div className="bg-[#191B1F] p-4 rounded-lg inline-block opacity-85">
          <div className="mb-4">
            <Image
              src={tattooDesignProImgSrc}
              alt="Tattoo Design Pro"
              className="w-full rounded-md"
            />
          </div>
          <div className="bg-[#24272A] rounded-lg p-4">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h6 className="font-bold tracking-widest">Rhonda.ai</h6>
                <GrFormNextLink size="20px" />
              </div>
              <div className="flex gap-2">
                <CA title="Canada" className="w-4" />
                <p className="text-sm opacity-70">Ottawa, Ontario, Canada</p>
              </div>
            </div>
            <div className="text-xs flex items-center gap-2">
              <p className="opacity-60">Designed by: Polash Ahmad</p>
              <div className="h-[5px] w-[5px] bg-white rounded-full opacity-70" />
              <p className="opacity-60">Developed by: Polash Ahmad</p>
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
