// // import React, {useEffect,useRef,useState } from 'react'

// // function Eyes() {
// //   const[rotate,setRotate]= useState(0);

// //   useEffect(()=>{
// //     window.addEventListener("mousemove", (e) => {

// //       let mouseX=e.clientX
// //       let mouseY=e.clientY

// //       let deltaX = mouseX - window.innerWidth/2;
// //       let deltaY = mouseY - window.innerHeight/2;

// //       var angle = Math.atan2(deltaY, deltaX)*(180/Math.PI);
// //       setRotate(angle - 180);
// //     })
// //   },[] )
// //   return (
// //     <div className='eyes w-full h-screen bg-zinc-100 overflow-hidden'>
// //       <div data-scroll data-scroll-section data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] ">
// //         <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   '>
// //           <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full '>
// //             <div className='relative w-2/3 h-2/3 bg-black rounded-full '>
// //               <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">

// //                 <div className=' w-5 h-5 bg-zinc-100 rounded-full'></div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className='flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full '>
// //             <div className='relative w-2/3 h-2/3 bg-black rounded-full '>
// //               <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
// //                 <div className=' w-5 h-5 bg-zinc-100 rounded-full'></div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Eyes



// import React, { useEffect, useState } from 'react';

// function Eyes() {
//   const [rotate, setRotate] = useState(0);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const mouseX = e.clientX;
//       const mouseY = e.clientY;
//       const deltaX = mouseX - window.innerWidth / 2;
//       const deltaY = mouseY - window.innerHeight / 2;
//       const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
//       setRotate(angle - 180);
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   return (
//     <div className='w-full h-screen bg-zinc-100 overflow-hidden'>
//       <div
//         data-scroll
//         data-scroll-section
//         data-scroll-speed='-.7'
//         className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
//       >
//         {/* Eyes Container */}
//         <div className='absolute flex gap-5 sm:gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          
//           {/* Eye 1 */}
//           <div className='flex items-center justify-center w-[24vw] h-[24vw] sm:w-[18vw] sm:h-[18vw] md:w-[15vw] md:h-[15vw] bg-zinc-100 rounded-full'>
//             <div className='relative w-2/3 h-2/3 bg-black rounded-full'>
//               <div
//                 style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
//                 className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'
//               >
//                 <div className='w-4 h-4 sm:w-5 sm:h-5 bg-zinc-100 rounded-full'></div>
//               </div>
//             </div>
//           </div>

//           {/* Eye 2 */}
//           <div className='flex items-center justify-center w-[24vw] h-[24vw] sm:w-[18vw] sm:h-[18vw] md:w-[15vw] md:h-[15vw] bg-zinc-100 rounded-full'>
//             <div className='relative w-2/3 h-2/3 bg-black rounded-full'>
//               <div
//                 style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
//                 className='line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-10'
//               >
//                 <div className='w-4 h-4 sm:w-5 sm:h-5 bg-zinc-100 rounded-full'></div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Eyes;




import React, { useEffect, useState } from 'react';

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='w-full h-screen bg-zinc-100 overflow-hidden'>
      <div
        className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        {/* Eyes container */}
        <div className='absolute flex flex-row gap-4 sm:gap-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          
          {/* Left Eye */}
          <div className='flex items-center justify-center w-[22vw] h-[22vw] sm:w-[18vw] sm:h-[18vw] md:w-[14vw] md:h-[14vw] bg-zinc-100 rounded-full shadow-md'>
            <div className='relative w-2/3 h-2/3 bg-black rounded-full'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2.5rem]'
              >
                <div className='w-4 h-4 sm:w-5 sm:h-5 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className='flex items-center justify-center w-[22vw] h-[22vw] sm:w-[18vw] sm:h-[18vw] md:w-[14vw] md:h-[14vw] bg-zinc-100 rounded-full shadow-md'>
            <div className='relative w-2/3 h-2/3 bg-black rounded-full'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2.5rem]'
              >
                <div className='w-4 h-4 sm:w-5 sm:h-5 bg-zinc-100 rounded-full'></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Eyes;
