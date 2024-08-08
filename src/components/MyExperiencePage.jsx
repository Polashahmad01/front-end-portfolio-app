import Image from "next/image";
import Link from "next/link";
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
      <div className="px-4 xl:px-0 mb-[10vh]">
        <h3 className={`${righteous.className} text-3xl opacity-85 mb-[10vh] text-center lg:text-[56px]`}>My Experience</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="border p-12 border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex items-center mb-4 gap-4">
              <Link href="https://eirenecremations.com" target="_blank">
                <Image
                  src={eireneLogo}
                  alt="eirene cremations logo"
                  priority
                  className="w-10"
                />
              </Link>
              <Link href="https://eirenecremations.com" target="_blank" className="text-lg font-bold tracking-wide opacity-90 transition-all hover:opacity-70">Eirene Cremations</Link>
              <Link href="https://eirenecremations.com" target="_blank" className="transition-all opacity-90 hover:opacity-70">
                <MdOutlineArrowOutward size="18px" />
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="leading-tight mb-4 text-2xl font-medium opacity-90">FrontEnd Engineer</h4>
              <p className="text-xs opacity-70">March 2020 - Dec 2021</p>
            </div>
            <p className="leading-normal text-[#96a7a1]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
              Assumenda culpa, hic, necessitatibus totam perferendis distinctio labore sequi, vero qui ipsa voluptatum
            </p>
          </div>

          <div className="border p-12 border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex items-center mb-4 gap-4">
              <Link href="https://www.spontivly.com" target="_blank">
                <Image
                  src={spontivlyLogo}
                  alt="spontivly logo"
                  priority
                  className="w-10"
                />
              </Link>
              <Link href="https://www.spontivly.com" target="_blank" className="text-lg font-bold tracking-wide opacity-90 transition-all hover:opacity-70">Spontivly</Link>
              <Link href="https://www.spontivly.com" target="_blank" className="transition-all opacity-90 hover:opacity-70">
                <MdOutlineArrowOutward size="18px" />
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="leading-tight mb-4 text-2xl font-medium opacity-90">FrontEnd Developer</h4>
              <p className="text-xs opacity-70">March 2020 - Dec 2021</p>
            </div>
            <p className="leading-normal text-[#96a7a1]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
              Assumenda culpa, hic, necessitatibus totam perferendis distinctio labore sequi, vero qui ipsa voluptatum
            </p>
          </div>

          <div className="border p-12 border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex items-center mb-4 gap-4">
              <Link href="https://hanaboso.com" target="_blank">
                <Image
                  src={hanabosoLogo}
                  alt="hanaboso logo"
                  priority
                  className="w-10"
                />
              </Link>
              <Link href="https://hanaboso.com" target="_blank" className="text-lg font-bold tracking-wide opacity-90 transition-all hover:opacity-70">Hanaboso</Link>
              <Link href="https://hanaboso.com" target="_blank" className="transition-all opacity-90 hover:opacity-70">
                <MdOutlineArrowOutward size="18px" />
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="leading-tight mb-4 text-2xl font-medium opacity-90">FrontEnd Engineer</h4>
              <p className="text-xs opacity-70">March 2020 - Dec 2021</p>
            </div>
            <p className="leading-normal text-[#96a7a1]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
              Assumenda culpa, hic, necessitatibus totam perferendis distinctio labore sequi, vero qui ipsa voluptatum
            </p>
          </div>

          <div className="border p-12 border-solid border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] rounded-2xl backdrop-blur shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
            <div className="flex items-center mb-4 gap-4">
              <Link href="https://about.zination.com" target="_blank">
                <Image
                  src={zinationLogo}
                  alt="zination"
                  priority
                  className="w-12"
                />
              </Link>
              <Link href="https://about.zination.com" target="_blank" className="text-lg font-bold tracking-wide opacity-90 transition-all hover:opacity-70">Zination</Link>
              <Link href="https://about.zination.com" target="_blank" className="transition-all opacity-90 hover:opacity-70">
                <MdOutlineArrowOutward size="18px" />
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <h4 className="leading-tight mb-4 text-2xl font-medium opacity-90">FrontEnd Developer</h4>
              <p className="text-xs opacity-70">March 2020 - Dec 2021</p>
            </div>
            <p className="leading-normal text-[#96a7a1]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non eius iure nostrum nobis sunt voluptates excepturi deserunt possimus.
              Assumenda culpa, hic, necessitatibus totam perferendis distinctio labore sequi, vero qui ipsa voluptatum
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
