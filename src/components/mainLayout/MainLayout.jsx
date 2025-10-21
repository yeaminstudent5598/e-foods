import React from 'react';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
import { Outlet, Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion'; // motion import exists

// === Hover Animation Variant ===
const buttonVariants = {
  rest: { // Normal state
    width: 56, // Size for just the icon (p-4 = 16px padding, size-24 icon = 24px -> 16+24+16=56)
    transition: { duration: 0.3 }
  },
  hover: { // Hover state
    width: 120, // Increased width to fit "Admin" text
    transition: { duration: 0.3 }
  }
};

const textVariants = {
  rest: { // Normal state
    opacity: 0,
    x: -10, // Start slightly to the left
    display: 'none', // Hide completely when not hovered
    transition: { duration: 0.2, delay: 0 }
  },
  hover: { // Hover state
    opacity: 1,
    x: 0, // Move to original position
    display: 'inline', // Make it visible
    transition: { duration: 0.2, delay: 0.1 } // Appear slightly after button expands
  }
};
// =============================

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen relative">
            <div><Navbar/></div>
            
            <div className='flex-grow'>
                <Outlet/>
            </div>
           
           <div> <Footer/></div>

           {/* ===== Animated Hover Admin Button ===== */}
           <motion.div
             className="fixed bottom-6 right-6 z-50 overflow-hidden" // Added overflow-hidden
             variants={buttonVariants}
             initial="rest"
             whileHover="hover" // Trigger animation on hover
           >
             <Link 
               to="/admin" 
               // Adjusted classes: flex, items-center, padding, removed width
               className="flex items-center h-14 p-4 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-800 transition-colors duration-300 whitespace-nowrap" // Added whitespace-nowrap
               title="Admin Dashboard" 
             >
               <Shield size={24} className="flex-shrink-0" /> {/* Added flex-shrink-0 */}
               {/* Animated Text */}
               <motion.span 
                 className="ml-2 font-medium" // Added margin-left
                 variants={textVariants}
               >
                 Admin
               </motion.span>
             </Link>
           </motion.div>
           {/* ======================================= */}
           
        </div>
    );
};

export default MainLayout;