// // import React from 'react'

// // function about() {
// //   return (
// //     <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
// //       <h1 className='text-6xl font-light text-2vw leading-[4vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need
// //         to raise funds, sell product, explain complex  ideas, and hire great
// //         peo­ple.</h1>
// //       <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-10 border-[#96a360]'>
// //         <div className='w-1/2'>
// //           <h1 className='text-6xl'>Our approach</h1>
// //           <button className='flex gap-10 items-center px-7 py-4 bg-zinc-900 mt-10 rounded-full text-white uppercase'>read more
// //             <div className='w-2 h-2 bg-zinc-100 rounded-full  '>
// //             </div>
// //           </button>

// //         </div>
// //         <div className="w-1/2  rounded-3xl overflow-hidden">
// //           <img
// //             src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
// //             alt="Profile"
// //             className="w-full h-full object-cover"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default about


// import React from 'react';

// function About() {
//   return (
//     <div className='w-full px-5 py-10 sm:px-10 md:p-16 lg:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
//       <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light leading-snug tracking-tight'>
//         Ochi is a strategic presentation agency for forward-thinking businesses that need
//         to raise funds, sell product, explain complex ideas, and hire great people.
//       </h1>

//       <div className='w-full flex flex-col md:flex-row gap-5 border-t-[1px] pt-10 mt-10 border-[#96a360]'>
//         {/* Text Block */}
//         <div className='w-full md:w-1/2'>
//           <h1 className='text-3xl sm:text-4xl lg:text-6xl'>Our approach</h1>
//           <button className='flex gap-3 sm:gap-5 items-center px-5 sm:px-7 py-3 sm:py-4 bg-zinc-900 mt-6 sm:mt-10 rounded-full text-white uppercase text-sm sm:text-base'>
//             Read more
//             <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
//           </button>
//         </div>

//         {/* Image Block */}
//         <div className='w-full md:w-1/2 rounded-3xl overflow-hidden'>
//           <img
//             src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
//             alt="Profile"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;






import React from 'react';

function About() {
  return (
    <div className='w-full px-4 py-10 sm:px-6 md:px-10 lg:px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      
      {/* Description */}
      <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light leading-relaxed md:leading-snug tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need
        to raise funds, sell product, explain complex ideas, and hire great people.
      </h1>

      {/* Bottom Section */}
      <div className='w-full flex flex-col md:flex-row gap-6 md:gap-10 border-t-[1px] pt-10 mt-10 border-[#96a360]'>
        
        {/* Text + Button */}
        <div className='w-full md:w-1/2'>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-semibold'>Our approach</h1>
          
          <button className='flex items-center gap-3 sm:gap-5 mt-6 sm:mt-8 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-zinc-900 text-white text-xs sm:text-sm md:text-base rounded-full uppercase transition-all hover:bg-zinc-800'>
            Read more
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
          </button>
        </div>

        {/* Image Block */}
        <div className='w-full md:w-1/2 rounded-2xl overflow-hidden'>
          <img
            src='https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg'
            alt='Profile'
            className='w-full h-full object-cover object-center'
          />
        </div>
      </div>
    </div>
  );
}

export default About;

