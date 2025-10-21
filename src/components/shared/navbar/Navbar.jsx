import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Phone, Search, Truck, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { Separator } from '@/components/ui/separator'; // === Separator ইম্পোর্ট করা হয়েছে ===

// === পেজ লিঙ্ক (মোবাইল মেনুর জন্য) ===
const pageLinks = [
  { name: 'Home', href: '/' },
  { name: 'All Products', href: '/products' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

// === ক্যাটাগরি লিঙ্ক (আগের মতো) ===
const navLinks = [
  { name: 'Pitha', href: '#' }, // TODO: ক্যাটাগরি পেজের লিঙ্ক দিন, যেমন: /category/pitha
  { name: 'Achar', href: '#' },
  { name: 'Nuts & Dates', href: '#' },
  { name: 'Organic Spices', href: '#' },
  { name: 'Organic Oil', href: '#' },
  { name: 'Rice, Pulse', href: '#' },
  { name: 'Super Foods', href: '#' },
  { name: 'Sweeteners & Dairy', href: '#' },
];

// === অ্যানিমেশন ভেরিয়েন্ট (অপরিবর্তিত) ===
const iconHoverEffect = { scale: 1.15, transition: { type: "spring", stiffness: 300 } };
const navLinkHoverEffect = { y: -3, transition: { type: "spring", stiffness: 300 } };
const mobileMenuVariant = {
  hidden: { opacity: 0, y: -20, transition: { duration: 0.3, ease: "easeOut" } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeIn" } }
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header 
      className="w-full shadow-sm sticky top-0 z-50 bg-white"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* ===== Top Bar (অপরিবর্তিত) ===== */}
      <div className="bg-green-700 text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+8801716342167</span>
          </div>
          <div className="hidden md:block flex-grow overflow-hidden mx-8">
            <Marquee pauseOnHover={true} speed={40} gradient={false}>
              <span className="mx-12">গ্রামীণ ঐতিহ্যের খাঁটি স্বাদে স্বাগতম! 🍲 পিঠা, আচার ও অর্গানিক পণ্যে চলছে বিশেষ ছাড়! 🚚</span>
              <span className="mx-12">বিশ্বস্ততার সাথে সারা বাংলাদেশে হোম ডেলিভারী। 🌿</span>
              <span className="mx-12">গ্রামীণ ঐতিহ্যের খাঁটি স্বাদে স্বাগতম! 🍲 পিঠা, আচার ও অর্গানিক পণ্যে চলছে বিশেষ ছাড়! 🚚</span>
              <span className="mx-12">বিশ্বস্ততার সাথে সারা বাংলাদেশে হোম ডেলিভারী। 🌿</span>
            </Marquee>
          </div>
        </div>
      </div>

      {/* ===== Main Header (অপরিবর্তিত) ===== */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4 gap-4">
          <Link to="/" className="flex-shrink-0">
            <motion.img 
              src="https://www.shutterstock.com/image-vector/letter-e-logo-symbol-template-260nw-1521105263.jpg" 
              alt="e-foods" 
              className="h-12 md:h-14" 
              whileHover={{ scale: 1.05 }}
            />
          </Link>
          <div className="flex-grow max-w-lg hidden md:flex">
            <Input
              type="search"
              placeholder="Search Product..."
              className="rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-green-700"
            />
            <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white rounded-l-none">
              <Search size={20} />
            </Button>
          </div>
          <div className="hidden md:flex items-center gap-4 md:gap-6">
            <Link to="/dashboard/orders">
              <motion.div className="flex items-center gap-2 text-sm hover:text-green-600 transition-colors cursor-pointer" whileHover={iconHoverEffect}>
                <Truck size={20} />
                <span className="hidden lg:block">Track Order</span>
              </motion.div>
            </Link>
            <Link to="/login">
              <motion.div className="flex items-center gap-2 text-sm hover:text-green-600 transition-colors cursor-pointer" whileHover={iconHoverEffect}>
                <User size={20} />
                <span className="hidden lg:block">Login / Sign Up</span>
              </motion.div>
            </Link>
            <Link to="/cart">
              <motion.div className="relative hover:text-green-600 transition-colors cursor-pointer" whileHover={iconHoverEffect}>
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">0</span>
              </motion.div>
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-2">
             <Link to="/cart" className="relative hover:text-green-600 transition-colors">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-3 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">0</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 rounded-md text-gray-700 hover:bg-gray-100">
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ===== Navigation Links (Desktop) - এখানে ক্যাটাগরিগুলো ফেরত আনা হয়েছে ===== */}
      <nav className="bg-green-800 text-white py-3 hidden md:flex">
        <div className="container mx-auto flex justify-center items-center px-4">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:gap-x-8">
            
            {/* === 'All Products' লিঙ্কটি এখানে যোগ করা হয়েছে === */}
            <motion.li whileHover={navLinkHoverEffect}>
              <Link to="/products" className="font-medium hover:text-yellow-300 transition-colors text-sm md:text-base">
                All Products
              </Link>
            </motion.li>

            {/* === আপনার ক্যাটাগরি লিঙ্কগুলো === */}
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                whileHover={navLinkHoverEffect}
              >
                <Link 
                  to={link.href} 
                  className="font-medium hover:text-yellow-300 transition-colors text-sm md:text-base"
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
      
      {/* ===== মোবাইল মেনু ড্রপডাউন (আপডেট করা হয়েছে) ===== */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute w-full bg-white shadow-lg z-40 p-4 border-t max-h-[calc(100vh-100px)] overflow-y-auto" // উচ্চতা ও স্ক্রল যোগ করা হয়েছে
            variants={mobileMenuVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {/* মোবাইল সার্চ বার */}
            <div className="flex w-full mb-4">
              <Input
                type="search"
                placeholder="Search Product..."
                className="rounded-r-none focus-visible:ring-offset-0 focus-visible:ring-green-700"
              />
              <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white rounded-l-none">
                <Search size={20} />
              </Button>
            </div>
            
            {/* === মোবাইল পেজ লিঙ্ক === */}
            <nav className="mb-4">
              <ul className="flex flex-col gap-2">
                {pageLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="block p-3 rounded-md font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Separator className="my-4" />

            {/* === মোবাইল ক্যাটাগরি লিঙ্ক === */}
            <h3 className="font-semibold text-gray-800 mb-2 px-3">Shop by Category</h3>
            <nav className="mb-4">
               <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="block p-3 rounded-md font-medium text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            <Separator className="my-4" />

            {/* === মোবাইল টপ আইকন লিঙ্ক === */}
            <div className="flex flex-col gap-3">
              <Link to="/dashboard/orders" className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                <Truck size={20} />
                <span>Track Order</span>
              </Link>
              <Link to="/login" className="flex items-center gap-2 p-2 rounded-md text-gray-700 hover:bg-gray-100" onClick={() => setIsMobileMenuOpen(false)}>
                <User size={20} />
                <span>Login / Sign Up</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.header>
  );
};

export default Navbar;