// import React from 'react';

// function Footer() {
//   return (
//     <div className='w-full bg-zinc-900 text-white p-6 md:p-20 flex flex-col md:flex-row gap-10 md:gap-0 h-auto md:h-screen'>
      
//       {/* Left Section */}
//       <div className='md:w-1/2 flex flex-col justify-between'>
//         <div className='heading'>
//           <h1 className='text-[14vw] md:text-[7vw] font-semibold uppercase leading-[16vw] md:leading-[9vw] tracking-tighter -mb-4'>
//             Eye-
//           </h1>
//           <h1 className='text-[14vw] md:text-[7vw] font-semibold uppercase leading-[16vw] md:leading-[9vw] tracking-tighter'>
//             Opening
//           </h1>
//         </div>

//         <div className='mt-8 md:mt-0'>
//           <svg
//             width="72"
//             height="30"
//             viewBox="0 0 72 30"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className='text-white'
//           >
//             {/* (SVG path same as your original, not repeated for brevity) */}
//             <path d="..." fill="currentColor"></path>
//           </svg>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className='md:w-1/2'>
//         <h1 className='text-[10vw] md:text-[5vw] font-semibold uppercase leading-[12vw] md:leading-[9vw] tracking-tighter'>
//           Presentations
//         </h1>

//         <div className='dets mt-6 flex flex-col gap-2'>
//           <a className='text-lg md:text-xl font-light hover:text-[#CDEA68] transition' href="#">Instagram</a>
//           <a className='text-lg md:text-xl font-light hover:text-[#CDEA68] transition' href="#">Facebook</a>
//           <a className='text-lg md:text-xl font-light hover:text-[#CDEA68] transition' href="#">Twitter</a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;



import React from 'react';

function Footer() {
  return (
    <div className='w-full bg-zinc-900 text-white px-5 py-10 sm:px-10 md:px-20 md:py-20 flex flex-col md:flex-row gap-12 md:gap-0 h-auto md:h-screen'>

      {/* Left Section */}
      <div className='md:w-1/2 flex flex-col justify-between'>
        {/* Heading */}
        <div className='heading'>
          <h1 className='text-[14vw] md:text-[7vw] font-bold uppercase leading-[14vw] md:leading-[8vw] tracking-tight -mb-4'>
            Eye-
          </h1>
          <h1 className='text-[14vw] md:text-[7vw] font-bold uppercase leading-[14vw] md:leading-[8vw] tracking-tight'>
            Opening
          </h1>
        </div>

        {/* Logo / Icon */}
        <div className='mt-10 md:mt-0'>
          <svg
            width="72"
            height="30"
            viewBox="0 0 72 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className='text-white'
          >
            <path d="M4.875 0L0 5.625L11.25 17.25L0 28.875L4.875 34.5L21.75 17.25L4.875 0ZM50.625 0L45.75 5.625L57 17.25L45.75 28.875L50.625 34.5L67.5 17.25L50.625 0Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className='md:w-1/2 flex flex-col justify-between'>
        {/* Subheading */}
        <h1 className='text-[10vw] md:text-[5vw] font-semibold uppercase leading-[12vw] md:leading-[6vw] tracking-tight'>
          Presentations
        </h1>

        {/* Social Links */}
        <div className='mt-6 flex flex-col gap-3'>
          <a
            href="#"
            className='text-lg md:text-xl font-light hover:text-[#CDEA68] transition duration-300'
          >
            Instagram
          </a>
          <a
            href="#"
            className='text-lg md:text-xl font-light hover:text-[#CDEA68] transition duration-300'
          >
            Facebook
          </a>
          <a
            href="#"
            className='text-lg md:text-xl font-light hover:text-[#CDEA68] transition duration-300'
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
