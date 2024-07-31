
export default function ContactPage() {
  return (
    <section className="container mx-auto">
      
      <div>

        <div>
          <div>
            <button>Contact Use</button>
          </div>
          <h4>Let's Get In Touch!</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae id odit praesentium provident in doloribus repellendus iste debitis vel libero.</p>
          <div></div>
          <p>Follow me</p>
          <div>
            <p>facebook</p>
            <p>twitter</p>
            <p>linkedin</p>
            <p>whatsapp</p>
          </div>
        </div>

        <div>
          <h4>Some title here</h4>
          <div>
            <div>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div>
              <textarea name="" id="" placeholder="Enter your message"></textarea>
            </div>
            <button>Send Message</button>
          </div>
        </div>

      </div>

    </section>
  );
}

// export default function ContactPage() {
//   return (
//     <section className="flex flex-col justify-center items-center sm:h-screen px-4">
//       <h2 className="text-3xl text-center mb-12 sm:text-left sm:text-5xl">
//         <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 from-0% via-red-600 via-80% to-red-600/85 to-90%">Let&apos;s Talk</span>
//       </h2>

//       <div className="flex flex-col w-full sm:w-2/4">

//         <div className="flex flex-col mb-4">
//           <label className="mb-2" htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="bg-[#242424] py-2 md:py-3 px-4 text-sm w-full block bg-[#ffffff08] border border-solid border-[rgba(255,255,255,.1)] rounded-lg outline-none text-white"
//             placeholder="Enter your name"
//           />
//         </div>

//         <div className="flex flex-col mb-4">
//           <label className="mb-2" htmlFor="email">Email</label>
//           <input
//             type="email"
//             className="bg-[#242424] py-2 md:py-3 px-4 text-sm w-full block bg-[#ffffff08] border border-solid border-[rgba(255,255,255,.1)] rounded-lg outline-none text-white"
//             placeholder="Enter you email"
//           />
//         </div>

//         <div className="flex flex-col mb-4">
//           <label className="mb-2" htmlFor="message">Message</label>
//           <textarea
//             name=""
//             id=""
//             className="bg-[#242424] py-2 md:py-3 px-4 text-sm w-full block bg-[#ffffff08] border border-solid border-[rgba(255,255,255,.1)] rounded-lg outline-none text-white"
//             placeholder="Enter you message"
//             rows={10}
//           >
//           </textarea>
//         </div>

//         <div className="flex flex-col my-6">
//           <button
//             className="bg-[#242424] py-2 md:py-3 px-4 text-sm w-full block bg-[#ffffff08] border border-solid border-[rgba(255,255,255,.1)] rounded-lg outline-none cursor-pointer transition-all hover:text-indigo-600"
//           >
//             Send Message
//           </button>
//         </div>

//       </div>

//     </section>
//   );
// }
