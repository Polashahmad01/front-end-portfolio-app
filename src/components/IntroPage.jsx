import Image from "next/image";
// import authorImgSrc from "../../public/images/polash.png";
import realImgSrc from "../../public/images/polash_ahmad.jpg";
import { Righteous } from "next/font/google";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function IntroPage() {
  return (
    <section className="flex justify-center items-center h-screen">

      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="flex-1">
          <div className="block mx-auto object-cover w-64 sm:w-96">
            <Image
              // src={authorImgSrc}
              src={realImgSrc}
              alt="Polash Ahmad"
              priority
              className="rounded-2xl"
            />
          </div>
        </div>

        <div className="flex-1 opacity-85">
          <h1 className={`mb-4 leading-[61px] text-5xl ${righteous.className}`}>
            <span className="">Hi there,</span>
            <br />
            <span className="">I&apos;m Polash Ahmad</span>
          </h1>
          <p className={`mb-4 ${righteous.className}`}>
            Transforming ideas into visually stunning and high-performing web interfaces is my specialty.
            With expertise in front-end development, I create solutions that blend elegance with efficiency.
            Eye for design ensures pixel-perfect accuracy, while my commitment to innovation drives me to explore and implement the latest techniques.
            Let&apos;s collaborate and bring your vision to life with exceptional results!
          </p>
          <div className="flex items-center gap-4 font-medium text-sm text-black opacity-85">
            <button className="px-8 py-3 border border-solid rounded-xl backdrop-blur-xl border-[rgba(255,255,255,.1)] bg-white">Download CV</button>
            <button className="px-8 py-3 border border-solid rounded-xl backdrop-blur-xl border-[rgba(255,255,255,.1)] bg-white">Contact</button>
          </div>
        </div>
      </div>

    </section>
  );
}

// import Image from "next/image";
// import imageSrc from "../../public/images/polash_ahmad.jpg";

// export default function IntroPage() {
//   return (
//     <section className="flex justify-center items-center h-screen px-4">
//       <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
//         <div className="flex-1">
//           <div className="block mx-auto object-cover w-64 sm:w-96">
//             <Image
//               src={imageSrc}
//               alt="Polash Ahmad"
//               priority
//               className="rounded-2xl"
//             />
//           </div>
//         </div>
//         <div className="flex-1">
//           <h1 className="text-3xl text-center mb-4 sm:text-left sm:text-5xl">
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 from-0% via-red-600 via-80% to-red-600/85 to-90%">Hi there,</span>
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 from-0% via-red-600 via-80% to-red-600/85 to-90%">I&apos;m Polash Ahmad</span>
//           </h1>
//           <p className="text-center font-normal text-sm sm:text-base sm:text-left">
//             Transforming ideas into visually stunning and high-performing web interfaces is my specialty.
//             With expertise in front-end development, I create solutions that blend elegance with efficiency.
//             Eye for design ensures pixel-perfect accuracy, while my commitment to innovation drives me to explore and implement the latest techniques.
//             Let&apos;s collaborate and bring your vision to life with exceptional results!
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
