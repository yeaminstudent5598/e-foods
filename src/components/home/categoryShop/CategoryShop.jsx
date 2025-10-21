import React, { useEffect } from 'react';
import { motion, useAnimationControls } from "framer-motion";
import { Link } from 'react-router-dom';

// === ডেটাবেস ১: ডেস্কটপের জন্য (সম্পূর্ণ লিস্ট) ===
const categoriesDesktop = [
  { name: "Nuts & Dates", href: "/category/nuts-dates", imageUrl: "https://efoodis.com/public/uploads/category/1736429753-screenshot_2.webp" },
  { name: "Organic Spices", href: "/category/organic-spices", imageUrl: "https://efoodis.com/public/uploads/category/1736429674-images.webp" },
  { name: "Organic Oil", href: "/category/organic-oil", imageUrl: "https://efoodis.com/public/uploads/category/1736429963-organic.webp" },
  { name: "Rice, Pulse", href: "/category/rice-pulse", imageUrl: "https://efoodis.com/public/uploads/category/1736430207-rice.webp" },
  { name: "Super Foods", href: "/category/super-foods", imageUrl: "https://efoodis.com/public/uploads/category/1736430103-dal.webp" },
  { name: "Sweeteners & Dairy", href: "/category/sweeteners-dairy", imageUrl: "https://efoodis.com/public/uploads/category/1736430546-swee.webp" },
  { name: "Pitha", href: "/category/pitha", imageUrl: "https://efoodis.com/public/uploads/category/1736429456-ghee-concept-shot.webp" }
];

// === ডেটাবেস ২: মোবাইলের জন্য (দুটি ভাগে ভাগ করা) ===
const categoriesMobileRow1 = categoriesDesktop.slice(0, 3); // প্রথম ৩টি
const categoriesMobileRow2 = categoriesDesktop.slice(3); // বাকি ৪টি


// === কম্পোনেন্ট ১: ডেস্কটপ আইটেম (বড়) ===
const DesktopCategoryItem = ({ name, href, imageUrl, ariaHidden = false }) => (
  <Link 
    to={href} 
    className="flex-shrink-0 w-44 md:w-48 text-center group"
    aria-hidden={ariaHidden}
  >
    <div className="w-36 h-36 md:w-40 md:h-40 mx-auto rounded-full border-4 border-green-700 overflow-hidden transition-all duration-300 group-hover:border-green-800 group-hover:shadow-xl group-hover:scale-105">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <h3 className="mt-4 font-semibold text-gray-800 text-lg group-hover:text-green-700">
      {name}
    </h3>
  </Link>
);

// === কম্পোনেন্ট ২: মোবাইল আইটেম (ছোট) ===
const MobileCategoryItem = ({ name, href, imageUrl, ariaHidden = false }) => (
  <Link 
    to={href} 
    className="flex-shrink-0 w-28 text-center group"
    aria-hidden={ariaHidden}
  >
    <div className="w-24 h-24 mx-auto rounded-full border-4 border-green-700 overflow-hidden group-hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" loading="lazy" />
    </div>
    <h3 className="mt-3 font-semibold text-gray-800 text-sm group-hover:text-green-700">
      {name}
    </h3>
  </Link>
);

// === অ্যানিমেশন ভেরিয়েন্ট ===
const marqueeLeftVariants = {
  animate: {
    x: "-50%", 
    transition: { duration: 40, repeat: Infinity, repeatType: "loop", ease: "linear" }
  }
};
const marqueeRightVariants = {
  animate: {
    x: ["-50%", "0%"], 
    transition: { duration: 40, repeat: Infinity, repeatType: "loop", ease: "linear" }
  }
};


const CategoryShop = () => {
  // === ৩টি আলাদা কন্ট্রোল (ডেস্কটপ, মোবাইল সারি ১, মোবাইল সারি ২) ===
  const controlsDesktop = useAnimationControls();
  const controlsMobile1 = useAnimationControls();
  const controlsMobile2 = useAnimationControls();

  // === ৩টি আলাদা useEffect ===
  useEffect(() => { controlsDesktop.start("animate"); }, [controlsDesktop]);
  useEffect(() => { controlsMobile1.start("animate"); }, [controlsMobile1]);
  useEffect(() => { controlsMobile2.start("animate"); }, [controlsMobile2]);

  // === ৩টি আলাদা হোভার ফাংশন ===
  const handleMouseEnterDesktop = () => controlsDesktop.stop();
  const handleMouseLeaveDesktop = () => controlsDesktop.start("animate");
  
  const handleMouseEnterMobile1 = () => controlsMobile1.stop();
  const handleMouseLeaveMobile1 = () => controlsMobile1.start("animate");
  
  const handleMouseEnterMobile2 = () => controlsMobile2.stop();
  const handleMouseLeaveMobile2 = () => controlsMobile2.start("animate"); // নামটি এখানে ঠিক করা আছে

  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Top Categories
        </h2>
        
        {/* =========================================== */}
        {/* ===== ১. ডেস্কটপ ভিউ (md এবং বড় স্ক্রিন) ===== */}
        {/* =========================================== */}
        <div 
          className="w-full overflow-hidden hidden md:block" // <-- শুধু ডেসকটপে দেখা যাবে
          style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
          onMouseEnter={handleMouseEnterDesktop}
          onMouseLeave={handleMouseLeaveDesktop}
        >
          <motion.div 
            className="flex flex-nowrap w-max"
            variants={marqueeLeftVariants}
            animate={controlsDesktop}
          >
            {/* সম্পূর্ণ লিস্ট (প্রথমবার) */}
            {categoriesDesktop.map((category, index) => (
              <div key={index} className="px-4">
                <DesktopCategoryItem {...category} />
              </div>
            ))}
            {/* সম্পূর্ণ লিস্ট (দ্বিতীয়বার) */}
            {categoriesDesktop.map((category, index) => (
              <div key={`dup-desk-${index}`} className="px-4">
                <DesktopCategoryItem {...category} ariaHidden={true} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* ======================================= */}
        {/* ===== ২. মোবাইল ভিউ (md এর নিচে) ===== */}
        {/* ======================================= */}
        <div className="w-full block md:hidden space-y-4"> {/* <-- শুধু মোবাইলে দেখা যাবে */}
          
          {/* ----- মোবাইল সারি ১ (বাম দিকে) ----- */}
          <div 
            className="w-full overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
            onMouseEnter={handleMouseEnterMobile1}
            onMouseLeave={handleMouseLeaveMobile1}
          >
            <motion.div 
              className="flex flex-nowrap w-max"
              variants={marqueeLeftVariants} // বামে যাবে
              animate={controlsMobile1}
            >
              {categoriesMobileRow1.map((category, index) => (
                <div key={`mob1-${index}`} className="px-2">
                  <MobileCategoryItem {...category} />
                </div>
              ))}
              {categoriesMobileRow1.map((category, index) => (
                <div key={`dup-mob1-${index}`} className="px-2">
                  <MobileCategoryItem {...category} ariaHidden={true} />
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* ----- মোবাইল সারি ২ (ডান দিকে) ----- */}
          <div 
            className="w-full overflow-hidden"
            style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}
            onMouseEnter={handleMouseEnterMobile2}
            
            // ===================================
            // !!! এই লাইনেই ভুলটি ছিল !!!
            // ===================================
            onMouseLeave={handleMouseLeaveMobile2} // <-- এখানে 'Mobile' শব্দটি যোগ করা হয়েছে
            // ===================================

          >
            <motion.div 
              className="flex flex-nowrap w-max"
              variants={marqueeRightVariants} // ডানে যাবে
              animate={controlsMobile2}
            >
              {categoriesMobileRow2.map((category, index) => (
                <div key={`mob2-${index}`} className="px-2">
                  <MobileCategoryItem {...category} />
                </div>
              ))}
              {categoriesMobileRow2.map((category, index) => (
                <div key={`dup-mob2-${index}`} className="px-2">
                  <MobileCategoryItem {...category} ariaHidden={true} />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CategoryShop;