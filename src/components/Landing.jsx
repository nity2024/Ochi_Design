// // import { motion } from 'framer-motion';
// // import React from 'react'
// // import { FaArrowUpLong } from "react-icons/fa6";

// // function Landing() {
    
// //     return (
// //         <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
// //             <div className='textstructure mt-52 px-20'>
// //                 {["we create", "Eye Opening", "presentations"].map((item, index) => {
// //                     return <div className='masker '>
// //                         <div className='flex items-center '>
// //                             {index === 1 && (
// //                                 <motion.div
// //                                  initial={{width:0}}
// //                                  animate={{width:"9vw"}}
// //                                  transition={{ease: [0.76, 0, 0.24, 1],duration:1}}
// //                                  className='mr-[0.25vw] w-[9vw] h-[4.5vw] rounded-md relative -bottom-[0.3vw] overflow-hidden '>
// //                                       <img
// //         src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' 
// //         alt='decorative'
// //         className='w-full h-full object-cover'
// //       />
// //                                  </motion.div>)}
// //                             <h1 className='uppercase text-[6.5vw] tracking-tighter leading-[6vw] font-bold '>{item}</h1>
// //                         </div></div>
// //                 })}
// //             </div>
// //             <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
// //                 {["For public and private companies", "for the first pitch to IPO"].map((item, index) => (
// //                     <p className='text-md font-light tracking-tight leading-none'>{item}</p>
// //                 ))}
// //                 <div className='start flex items-center gap-5'>
// //                     <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md uppercase'>start the project</div>
// //                     <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
// //                         <span className='rotate-[45deg]'><FaArrowUpLong /></span>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>



// //     )
// // }

// // export default Landing





// import { motion } from 'framer-motion';
// import React from 'react';
// import { FaArrowUpLong } from 'react-icons/fa6';

// function Landing() {
//     return (
//         <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1 text-white'>
//             {/* Text Section */}
//             <div className='textstructure mt-40 md:mt-52 px-5 md:px-20'>
//                 {["we create", "Eye Opening", "presentations"].map((item, index) => (
//                     <div className='masker overflow-hidden' key={index}>
//                         <div className='flex items-center'>
//                             {index === 1 && (
//                                 <motion.div
//                                     initial={{ width: 0 }}
//                                     animate={{ width: "9vw" }}
//                                     transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
//                                     className='mr-2 md:mr-[0.25vw] w-[9vw] h-[5vw] rounded-md relative -bottom-[0.3vw] overflow-hidden'
//                                 >
//                                     <img
//                                         src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
//                                         alt='decorative'
//                                         loading='lazy'
//                                         className='w-full h-full object-cover'
//                                     />
//                                 </motion.div>
//                             )}
//                             <h1 className='uppercase text-[10vw] md:text-[6.5vw] tracking-tighter leading-[9vw] md:leading-[6vw] font-bold'>
//                                 {item}
//                             </h1>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* Bottom Border Info */}
//             <div className='border-t-[1px] border-zinc-800 mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 py-5 px-5 md:px-20'>
//                 <div className='space-y-1 md:space-y-0 md:flex md:gap-10'>
//                     {[
//                         "For public and private companies",
//                         "For the first pitch to IPO"
//                     ].map((item, index) => (
//                         <p className='text-sm md:text-md font-light tracking-tight leading-none' key={index}>{item}</p>
//                     ))}
//                 </div>

//                 {/* Start Project Button */}
//                 <div className='start flex items-center gap-5'>
//                     <button className='px-4 py-2 border-[2px] border-zinc-500 rounded-full font-light text-sm md:text-md uppercase hover:bg-zinc-800 transition-all'>
//                         Start the project
//                     </button>
//                     <div className='w-10 h-10 flex items-center justify-center border border-zinc-400 rounded-full'>
//                         <span className='rotate-[45deg]'><FaArrowUpLong /></span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Landing;





import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from 'react-icons/fa6';

function Landing() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className='w-full h-screen bg-zinc-900 pt-1 text-white'
    >
      {/* Text Structure */}
      <div className='textstructure mt-36 md:mt-52 px-6 md:px-20'>
        {["we create", "Eye Opening", "presentations"].map((item, index) => (
          <div className='masker overflow-hidden' key={index}>
            <div className='flex items-center'>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 1,
                  }}
                  className='mr-2 md:mr-[0.25vw] w-[9vw] h-[5vw] rounded-md relative -bottom-[0.3vw] overflow-hidden'
                >
                  <img
                    src='https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D'
                    alt='decorative'
                    loading='lazy'
                    className='w-full h-full object-cover'
                  />
                </motion.div>
              )}
              <h1 className='uppercase text-[10vw] md:text-[6.5vw] tracking-tighter leading-[9vw] md:leading-[6vw] font-bold'>
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className='border-t border-zinc-800 mt-14 md:mt-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 py-6 px-6 md:px-20'>
        {/* Info Texts */}
        <div className='space-y-2 md:space-y-0 md:flex md:gap-10'>
          {[
            "For public and private companies",
            "For the first pitch to IPO",
          ].map((item, index) => (
            <p
              key={index}
              className='text-sm md:text-md font-light tracking-tight leading-none'
            >
              {item}
            </p>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className='start flex items-center gap-4 md:gap-5'>
          <button className='px-4 py-2 border-2 border-zinc-500 rounded-full font-light text-sm md:text-md uppercase hover:bg-zinc-800 transition-all'>
            Start the project
          </button>
          <div className='w-10 h-10 flex items-center justify-center border border-zinc-400 rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
