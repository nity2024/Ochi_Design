// // import { motion } from 'framer-motion'
// // import React from 'react'


// // function marquee() {

// //   return (
// //     <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]'>
// //       <div className='border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap'>
// //         <motion.div
// //           className='flex  pr-20'
// //           initial={{ x: 0 }}
// //           animate={{ x: "-100%" }} // ✅ scroll halfway through double content
// //           transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
// //         >
// //           <h1 className='text-[17vw] leading-none uppercase font-semibold tracking-tight pr-[3vw]'>
// //             we are ochi
// //           </h1>
// //           <h1 className='text-[17vw] leading-none uppercase font-semibold tracking-tight pr-[3vw]'>
// //             we are ochi
// //           </h1>
// //         </motion.div>
// //       </div>
// //     </div>


    
// //   )
// // }

// // export default marquee
// // // initial={{x: 0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat:Infinity, duration: 5}}



// import { motion } from 'framer-motion';
// import React from 'react';

// function Marquee() {
//   return (
//     <div
//       data-scroll
//       data-scroll-section
//       data-scroll-speed=".1"
//       className='w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]'
//     >
//       <div className='border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap'>
//         <motion.div
//           className='flex pr-20'
//           initial={{ x: 0 }}
//           animate={{ x: "-100%" }}
//           transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
//         >
//           {[...Array(2)].map((_, index) => (
//             <h1
//               key={index}
//               className='text-[17vw] leading-none uppercase font-semibold tracking-tight pr-[3vw] text-white'
//             >
//               we are ochi
//             </h1>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// export default Marquee;



import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className='w-full py-20 bg-[#004D43] rounded-tr-3xl rounded-tl-3xl'
    >
      <div className='border-t-2 border-b-2 border-zinc-300 overflow-hidden whitespace-nowrap'>
        <motion.div
          className='flex pr-20'
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 5 }}
        >
          {[...Array(2)].map((_, index) => (
            <h1
              key={index}
              className='text-[17vw] leading-none uppercase font-bold tracking-tight pr-[3vw] text-white'
            >
              we are ochi
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
