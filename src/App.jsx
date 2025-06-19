import React from 'react'
// import Navbar from './components/navbar'
import Landing from './components/Landing'
import Marquee from './components/marquee'
import  About from './components/about'
import Eyes from './components/Eyes'
import Fetured from './components/fetured'
import Cards from './components/cards'
import Footer from'./components/footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {


const locomotiveScroll = new LocomotiveScroll();

    return (
        <div className='w-full min-h-screen text-white bg-zinc-900'>
            {/* // <Navbar /> */}
            <Landing/>
          <Marquee/>
          <About/>
          <Eyes/>
          <Fetured/>
          <Cards/>
          <Footer/>
    



           <div>hello</div>
        </div>
    )
}

export default App



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar';
// import Landing from './components/Landing';
// import Marquee from './components/marquee';
// import About from './components/about';
// import Eyes from './components/Eyes';
// import Fetured from './components/fetured';
// import Cards from './components/cards';
// import Footer from './components/footer';

// function App() {
    
//     return (
//         <Router>
//             <div className='w-full min-h-screen text-white bg-zinc-900'>
//                 <Navbar />
//                 <Routes>
//                     <Route path="/" element={<Landing />} />
//                     <Route path="/marquee" element={<Marquee />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/eyes" element={<Eyes />} />
//                     <Route path="/fetured" element={<Fetured />} />
//                     <Route path="/cards" element={<Cards />} />
//                     <Route path="/footer" element={<Footer />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;
