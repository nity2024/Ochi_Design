// // import React from 'react'

// // function cards() {
// //     return (
// //         <div className='w-full h-screen  bg-black flex items-center px-32 gap-5 '>
// //             <div className='cardcontainer h-[50vh] w-1/2'>
// //                 <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
// //                     <img className='32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'/>
// //                     <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2005-2025</button>
// //                 </div>
// //             </div>
// //             <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
// //             <div className='card relative rounded-xl flex items-center justify-center w-1/2 h-full bg-[#0b1413]'>
// //             <img className='32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'/>
// //                     <button className='absolute px-5 py-1 tracking-tighter rounded-full border-2 left-10 bottom-10'>RATING 5.0 ON CLUTCH</button>
// //                </div>
// //             <div className='card relative rounded-xl flex items-center justify-center w-1/2 h-full bg-[#132725]'>    
// //               <img className='h-[10vh] w-[10vh]' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'/>
// //                     <button className='absolute px-5 py-1 tracking-tighter rounded-full border-2 left-10 bottom-10'>BUSINESS BOOTCAMP ALUMNI</button>
// //                </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default cards




// import React from 'react';

// function Cards() {
//   return (
//     <div className='w-full min-h-screen bg-black flex flex-col md:flex-row items-center px-5 sm:px-10 md:px-20 lg:px-32 gap-5 py-10'>
      
//       {/* Left Card */}
//       <div className='cardcontainer h-[40vh] sm:h-[50vh] w-full md:w-1/2'>
//         <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center 
//           transition-transform duration-300 hover:scale-105'>
//           <img className='w-28 sm:w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' alt='logo1' />
//           <button className='absolute px-4 sm:px-5 py-1 text-xs sm:text-sm rounded-full border-2 left-5 sm:left-10 bottom-5 sm:bottom-10'>
//             &copy;2005-2025
//           </button>
//         </div>
//       </div>

//       {/* Right Cards */}
//       <div className='cardcontainer flex flex-col sm:flex-row gap-5 h-[40vh] sm:h-[50vh] w-full md:w-1/2'>
        
//         {/* Top Right Card */}
//         <div className='card relative rounded-xl flex items-center justify-center w-full sm:w-1/2 h-full bg-[#0b1413] 
//           transition-transform duration-300 hover:scale-105'>
//           <img className='w-28 sm:w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' alt='logo2' />
//           <button className='absolute px-4 sm:px-5 py-1 text-[10px] sm:text-xs tracking-tight rounded-full border-2 left-5 sm:left-10 bottom-5 sm:bottom-10'>
//             RATING 5.0 ON CLUTCH
//           </button>
//         </div>

//         {/* Bottom Right Card */}
//         <div className='card relative rounded-xl flex items-center justify-center w-full sm:w-1/2 h-full bg-[#132725] 
//           transition-transform duration-300 hover:scale-105'>
//           <img className='h-12 w-12 sm:h-[10vh] sm:w-[10vh]' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' alt='logo3' />
//           <button className='absolute px-4 sm:px-5 py-1 text-[10px] sm:text-xs tracking-tight rounded-full border-2 left-5 sm:left-10 bottom-5 sm:bottom-10'>
//             BUSINESS BOOTCAMP ALUMNI
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;



import React from 'react';

function Cards() {
  return (
    <div className='w-full min-h-screen bg-black flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-16 lg:px-32 gap-6 py-12'>

      {/* Left Card */}
      <div className='cardcontainer h-[40vh] sm:h-[50vh] w-full md:w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center transition-transform duration-300 hover:scale-105'>
          <img
            className='w-20 sm:w-28 md:w-32 lg:w-36 object-contain'
            src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'
            alt='logo1'
          />
          <button className='absolute text-[10px] sm:text-xs px-3 sm:px-5 py-1 border-2 rounded-full left-5 sm:left-10 bottom-5 sm:bottom-10 text-white'>
            &copy; 2005–2025
          </button>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className='cardcontainer flex flex-col sm:flex-row gap-6 h-[40vh] sm:h-[50vh] w-full md:w-1/2'>

        {/* Top Right Card */}
        <div className='card relative rounded-xl flex items-center justify-center w-full sm:w-1/2 h-full bg-[#0b1413] transition-transform duration-300 hover:scale-105'>
          <img
            className='w-20 sm:w-28 md:w-32 object-contain'
            src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'
            alt='logo2'
          />
          <button className='absolute text-[9px] sm:text-xs px-3 sm:px-5 py-1 border-2 rounded-full left-5 sm:left-10 bottom-5 sm:bottom-10 text-white tracking-tight'>
            RATING 5.0 ON CLUTCH
          </button>
        </div>

        {/* Bottom Right Card */}
        <div className='card relative rounded-xl flex items-center justify-center w-full sm:w-1/2 h-full bg-[#132725] transition-transform duration-300 hover:scale-105'>
          <img
            className='h-10 w-10 sm:h-[10vh] sm:w-[10vh] object-contain'
            src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'
            alt='logo3'
          />
          <button className='absolute text-[9px] sm:text-xs px-3 sm:px-5 py-1 border-2 rounded-full left-5 sm:left-10 bottom-5 sm:bottom-10 text-white tracking-tight'>
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
