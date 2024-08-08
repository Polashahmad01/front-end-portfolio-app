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
    <section className="common-container">
      <div className="px-4 xl:px-0">
        <h3 className={`${righteous.className} text-3xl opacity-85 mb-[10vh] text-center lg:text-[56px]`}>My Experience</h3>
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
