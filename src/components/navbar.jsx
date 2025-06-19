// // import React from 'react';

// // function Navbar() {
// //     return (
// //         <div className='fixed z-[999] w-full px-10 py-8 flex justify-between items-center'>
// //             <div className='logo font-bold text-xl'>Ochi</div>
// //             <div className='Links flex gap-10'>
// //                 {["Service", "Our work", "About Us", "Insights", "Contact"].map((item, index) => (
// //                     <a
// //                         href="#"
// //                         key={index}
// //                         className={`text-lg capitalize font-semibold ${index === 4 ? "ml-32" : ""}`}
// //                     >
// //                         {item}
// //                     </a>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // }

// // export default Navbar;


// import React from 'react';
// import { FiMenu } from "react-icons/fi";

// function Navbar() {
//     return (
//         <div className='fixed z-[999] w-full px-6 md:px-10 py-6 flex justify-between items-center bg-zinc-900 text-white'>
//             {/* Logo */}
//             <div className='logo font-bold text-xl'>Ochi</div>

//             {/* Desktop Links */}
//             <div className='Links hidden md:flex gap-6 lg:gap-10'>
//                 {["Service", "Our work", "About Us", "Insights", "Contact"].map((item, index) => (
//                     <a
//                         href="#"
//                         key={index}
//                         className={`text-base lg:text-lg capitalize font-semibold transition-all duration-300 hover:text-[#CDEA68] ${
//                             index === 4 ? "ml-10 lg:ml-32" : ""
//                         }`}
//                     >
//                         {item}
//                     </a>
//                 ))}
//             </div>

//             {/* Mobile menu icon */}
//             <div className='md:hidden text-2xl cursor-pointer'>
//                 <FiMenu />
//             </div>
//         </div>
//     );
// }

// export default Navbar;





import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = ["Service", "Our work", "About Us", "Insights", "Contact"];

  return (
    <nav className='fixed top-0 left-0 w-full z-[999] bg-zinc-900 text-white px-6 md:px-10 py-6 flex justify-between items-center shadow-md'>
      {/* Logo */}
      <div className='logo font-bold text-xl tracking-wide'>Ochi</div>

      {/* Desktop Links */}
      <div className='hidden md:flex gap-6 lg:gap-10'>
        {links.map((item, index) => (
          <a
            href="#"
            key={index}
            className={`text-base lg:text-lg capitalize font-semibold transition-all duration-300 hover:text-[#CDEA68] ${
              index === 4 ? "ml-10 lg:ml-32" : ""
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className='md:hidden text-2xl cursor-pointer' onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className='absolute top-[100%] left-0 w-full bg-zinc-800 text-white flex flex-col items-center py-6 gap-6 transition-all duration-300 md:hidden'>
          {links.map((item, index) => (
            <a
              href="#"
              key={index}
              onClick={() => setMobileOpen(false)} // close on click
              className='text-lg capitalize font-semibold hover:text-[#CDEA68] transition-all duration-200'
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
