import { Righteous } from "next/font/google";
import { MdOutlineArrowOutward } from "react-icons/md";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function MyExperiencePage() {
  return (
    <section className="container mx-auto">
      <h3 className={`mb-4 leading-[61px] text-5xl ${righteous.className}`}>My Experiences</h3>

      <div>

        <div>
          <div>
            <h6>Zination</h6>
            <MdOutlineArrowOutward />
          </div>
          <div>
            <h4>Front End Engineer</h4>
            <p>March 2020 - Dec 2021</p>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae! Ut nostrum consequatur iure ad! Amet quis est sit fugiat.</p>
        </div>

        <div>
          <div>
            <h6>Zination</h6>
            <MdOutlineArrowOutward />
          </div>
          <div>
            <h4>Front End Engineer</h4>
            <p>March 2020 - Dec 2021</p>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae! Ut nostrum consequatur iure ad! Amet quis est sit fugiat.</p>
        </div>

        <div>
          <div>
            <h6>Zination</h6>
            <MdOutlineArrowOutward />
          </div>
          <div>
            <h4>Front End Engineer</h4>
            <p>March 2020 - Dec 2021</p>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae! Ut nostrum consequatur iure ad! Amet quis est sit fugiat.</p>
        </div>
        
        <div>
          <div>
            <h6>Zination</h6>
            <MdOutlineArrowOutward />
          </div>
          <div>
            <h4>Front End Engineer</h4>
            <p>March 2020 - Dec 2021</p>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, beatae! Ut nostrum consequatur iure ad! Amet quis est sit fugiat.</p>
        </div>

      </div>
    </section>
  );
}

// export default function MyExperiencePage() {
//   return (
//     <section className="flex flex-col justify-center items-center sm:h-screen px-4">
//       <h2 className="text-3xl text-center mb-12 sm:text-left sm:text-5xl">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 from-0% via-red-600 via-80% to-red-600/85 to-90%">My Experiences</span>
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//         <div className="relative p-16 bg-[#ffffff08] backdrop-blur-md border border-solid border-[rgba(255,255,255,.1)] rounded-br-3xl rounded-tl-3xl">
//           <h2 className="text-2xl mb-2">Zination</h2>
//           <p className="opacity-70 mb-2">Front End Engineer</p>
//           <h3 className="text-sm pb-16">2021 - 2022</h3>
//           <div className="absolute border border-solid border-[rgba(255,255,255,.1)] bottom-2 right-2 p-2 bg-[#000] h-12 w-12 flex justify-center items-center rounded-full">1</div>
//         </div>

//         <div className="relative p-16 bg-[#ffffff08] backdrop-blur-md border border-solid border-[rgba(255,255,255,.1)] rounded-br-3xl rounded-tl-3xl">
//           <h2 className="text-2xl mb-2">Hanaboso</h2>
//           <p className="opacity-70 mb-2">Front End Developer</p>
//           <h3 className="text-sm pb-16">2022 - 2023</h3>
//           <div className="absolute border border-solid border-[rgba(255,255,255,.1)] bottom-2 right-2 p-2 bg-[#000] h-12 w-12 flex justify-center items-center rounded-full">2</div>
//         </div>

//         <div className="relative p-16 bg-[#ffffff08] backdrop-blur-md border border-solid border-[rgba(255,255,255,.1)] rounded-br-3xl rounded-tl-3xl">
//           <h2 className="text-2xl mb-2">Spontivly</h2>
//           <p className="opacity-70 mb-2">Front End Engineer</p>
//           <h3 className="text-sm pb-16">2023 - 2024</h3>
//           <div className="absolute border border-solid border-[rgba(255,255,255,.1)] bottom-2 right-2 p-2 bg-[#000] h-12 w-12 flex justify-center items-center rounded-full">3</div>
//         </div>

//         <div className="relative p-16 bg-[#ffffff08] backdrop-blur-md border border-solid border-[rgba(255,255,255,.1)] rounded-br-3xl rounded-tl-3xl">
//           <h2 className="text-2xl mb-2">Eirene Cremations</h2>
//           <p className="opacity-70 mb-2">Front End Developer</p>
//           <h3 className="text-sm pb-16">2024 - 01/06/24</h3>
//           <div className="absolute border border-solid border-[rgba(255,255,255,.1)] bottom-2 right-2 p-2 bg-[#000] h-12 w-12 flex justify-center items-center rounded-full">4</div>
//         </div>

//       </div>
//     </section>
//   )
// }
