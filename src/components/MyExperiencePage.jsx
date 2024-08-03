import Image from "next/image";
import { Righteous } from "next/font/google";
import { MdOutlineArrowOutward } from "react-icons/md";
import zinationLogo from "../../public/images/zination.svg";
import eireneLogo from "../../public/images/eirene.svg";
import spontivlyLogo from "../../public/images/spontivly.svg";
import hanabosoLogo from "../../public/images/hanaboso.svg";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function MyExperiencePage() {
  return (
    <section className="container mx-auto my-[10vh]">
      <div className="px-4 xl:px-0">
        <h3 className={`${righteous.className} text-3xl lg:text-5xl lg:text-center mb-12`}>My Experience</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="opacity-85 p-8 rounded-xl bg-[#171717]">
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <Image
                src={zinationLogo}
                alt="zination"
                priority
                className="w-12 object-cover"
              />
              <h6 className="font-medium text-lg">Zination</h6>
              <MdOutlineArrowOutward size="18px" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold">FrontEnd Engineer</h4>
              <p className="font-light text-sm">March 2020 - Dec 2021</p>
            </div>
            <p className="font-light text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
              Assumenda culpa, hic, necessitatibus totam perferendis distinctio labore sequi, vero qui ipsa voluptatum? Voluptatum illo saepe ea
              esse dicta eum eos. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
            </p>
          </div>
          <div className="opacity-85 p-8 rounded-xl bg-[#171717]">
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <Image
                src={eireneLogo}
                alt="zination"
                priority
                className="w-12 object-cover"
              />
              <h6 className="font-medium text-lg">Eirene Cremations</h6>
              <MdOutlineArrowOutward size="18px" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold">FrontEnd Developer</h4>
              <p className="font-light text-sm">Jan 2021 - Feb 2022</p>
            </div>
            <p className="font-light text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
              Assumenda culpa, hic, necessitatibus totam perferendis distinctio labore sequi, vero qui ipsa voluptatum? Voluptatum illo saepe ea
              esse dicta eum eos. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
            </p>
          </div>
          <div className="opacity-85 p-8 rounded-xl bg-[#171717]">
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <Image
                src={spontivlyLogo}
                alt="zination"
                priority
                className="w-12 object-cover"
              />
              <h6 className="font-medium text-lg">Spontivly</h6>
              <MdOutlineArrowOutward size="18px" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold">FrontEnd Developer</h4>
              <p className="font-light text-sm">Feb 2022 - March 2023</p>
            </div>
            <p className="font-light text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
              Assumenda culpa, hic, necessitatibus totam perferendis distinctio labore sequi, vero qui ipsa voluptatum? Voluptatum illo saepe ea
              esse dicta eum eos. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
            </p>
          </div>
          <div className="opacity-85 p-8 rounded-xl bg-[#171717]">
            <div className="flex flex-wrap items-center gap-4 mb-2">
              <Image
                src={hanabosoLogo}
                alt="zination"
                priority
                className="w-12 object-cover"
              />
              <h6 className="font-medium text-lg">Hanaboso</h6>
              <MdOutlineArrowOutward size="18px" />
            </div>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-semibold">FrontEnd Engineer</h4>
              <p className="font-light text-sm">May 2023 - March 2024</p>
            </div>
            <p className="font-light text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
              Assumenda culpa, hic, necessitatibus totam perferendis distinctio labore sequi, vero qui ipsa voluptatum? Voluptatum illo saepe ea
              esse dicta eum eos. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
            </p>
          </div>
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
