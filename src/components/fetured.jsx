// // import { motion, useAnimate, useAnimation } from 'framer-motion'
// // import React, { useState } from 'react'

// // function Fetured() {
// //     const cards = [useAnimation(), useAnimation()];

// //     const handleHover = (index) => {
// //         cards[index].start({ y: "0" })
// //     }
// //     const handleHoverEnd = (index) => {
// //         cards[index].start({ y: "100%" })
// //     }

// //     return (
// //         <div className='w-full py-10 bg-black'>
// //             <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-20'>
// //                 <h1 className='text-8xl tracking-tight'>Featured projectst</h1>
// //             </div>
// //             <div className='px-20'>
// //                 <div className="card w-full flex gap-20  mt-10">
// //                     <div className='heading absolute bg-red-500'>

// //                     </div>
// //                     <motion.div onHoverStart={() => handleHover(0)}
// //                         onHoverEnd={() => handleHoverEnd(0)}
// //                         className="cardcontainer relative  w-1/2 h-[75vh]">
// //                         <h1 className='  absolute pointer-events-none flex left-full  overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] tracking-tight leading-none text-8xl'>{"Salience Labs".split('').map((item, index) =>
// //                             <motion.span
// //                                 initial={{ y: "100%" }}
// //                                 animate={cards[0]}
// //                                 transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}
// //                             >{item}</motion.span>)}
// //                         </h1>
// //                         <div className='w-full h-full rounded-xl  overflow-hidden'>
// //                             <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png' />
// //                         </div>
// //                     </motion.div>
// //                     <motion.div onHoverStart={() => handleHover(1)}
// //                         onHoverEnd={() => handleHoverEnd(1)}
// //                         className="cardcontainer relative  w-1/2 h-[75vh]">
// //                     <div className='  card w-full h-full rounded-xl overflow-hidden'>
// //                         <h1 className='absolute pointer-events-none  flex right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] tracking-tight leading-none text-8xl'>{"Cardboard Spaceship".split('').map((item, index) =>
// //                             <motion.span
// //                                 initial={{ y: "100%" }}
// //                                 animate={cards[1]}
// //                                 transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .01 }}
// //                             >{item}</motion.span>)}
// //                         </h1>
// //                         <div className='w-full h-full rounded-xl  overflow-hidden'>
// //                             <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png'  />
// //                         </div>
// //                     </div>
// //                     </motion.div>
                    
// //                 </div>
// //             </div>

// //         </div>
// //     )
// // }

// // export default Fetured
// import { motion, useAnimation } from 'framer-motion';
// import React from 'react';

// function Fetured() {
//   const cards = [useAnimation(), useAnimation()];

//   const handleHover = (index) => {
//     cards[index].start({ y: "0%" });
//   };

//   const handleHoverEnd = (index) => {
//     cards[index].start({ y: "100%" });
//   };

//   return (
//     <div className='w-full py-10 bg-black'>
//       {/* Section Heading */}
//       <div className='w-full px-5 sm:px-10 md:px-20 border-b border-zinc-600 pb-10 md:pb-20'>
//         <h1 className='text-4xl sm:text-6xl md:text-8xl text-white font-semibold tracking-tight'>
//           Featured Projects
//         </h1>
//       </div>

//       {/* Cards Container */}
//       <div className='px-5 sm:px-10 md:px-20'>
//         <div className='flex flex-col lg:flex-row gap-10 mt-10'>

//           {/* Card 1 */}
//           <motion.div
//             onHoverStart={() => handleHover(0)}
//             onHoverEnd={() => handleHoverEnd(0)}
//             className='relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh]'
//           >
//             <h1 className='absolute pointer-events-none flex left-full overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] tracking-tight leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl'>
//               {'Salience Labs'.split('').map((item, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ y: '100%' }}
//                   animate={cards[0]}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             <div className='w-full h-full rounded-xl overflow-hidden'>
//               <img
//                 className='w-full h-full object-cover'
//                 src='https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png'
//                 alt='Salience Labs'
//               />
//             </div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             onHoverStart={() => handleHover(1)}
//             onHoverEnd={() => handleHoverEnd(1)}
//             className='relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh]'
//           >
//             <h1 className='absolute pointer-events-none flex right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] tracking-tight leading-none text-4xl sm:text-6xl md:text-7xl lg:text-8xl'>
//               {'Cardboard Spaceship'.split('').map((item, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ y: '100%' }}
//                   animate={cards[1]}
//                   transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
//                 >
//                   {item}
//                 </motion.span>
//               ))}
//             </h1>
//             <div className='w-full h-full rounded-xl overflow-hidden'>
//               <img
//                 className='w-full h-full object-cover'
//                 src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png'
//                 alt='Cardboard Spaceship'
//               />
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Fetured;



import { motion, useAnimation } from 'framer-motion';
import React from 'react';

function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: '0%' });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: '100%' });
  };

  return (
    <div className='w-full py-10 bg-black text-white'>
      {/* Heading */}
      <div className='w-full px-5 sm:px-10 md:px-20 border-b border-zinc-600 pb-10 md:pb-20'>
        <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight'>
          Featured Projects
        </h1>
      </div>

      {/* Cards */}
      <div className='px-5 sm:px-10 md:px-20'>
        <div className='flex flex-col lg:flex-row gap-10 mt-10'>

          {/* Card 1 */}
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className='relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] group'
          >
            <h1 className='absolute pointer-events-none flex left-full overflow-hidden -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
              {'Salience Labs'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <img
                src='https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png'
                alt='Salience Labs'
                className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='absolute bottom-5 left-5'>
              <button className='px-4 py-2 text-sm sm:text-base md:text-lg bg-green-500 rounded-md hover:bg-green-600 transition'>
                View Project
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className='relative w-full lg:w-1/2 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] group'
          >
            <h1 className='absolute pointer-events-none flex right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] tracking-tight leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
              {'Cardboard Spaceship'.split('').map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: '100%' }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <img
                src='https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png'
                alt='Cardboard Spaceship'
                className='w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div className='absolute bottom-5 left-5'>
              <button className='px-4 py-2 text-sm sm:text-base md:text-lg bg-green-500 rounded-md hover:bg-green-600 transition'>
                View Project
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Featured;
