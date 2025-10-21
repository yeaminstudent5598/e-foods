// src/components/shared/footer/Footer.jsx

import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'; // === a ট্যাগের বদলে Link ইম্পোর্ট করুন ===
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube, 
  Send 
} from 'lucide-react';

// ক্যাটাগরি লিঙ্ক
const categories = [
  { name: 'Pitha', href: '#' }, // TODO: ক্যাটাগরি লিঙ্ক দিন
  { name: 'Achar', href: '#' },
  { name: 'Nuts & Dates', href: '#' },
  { name: 'Organic Spices', href: '#' },
  { name: 'Organic Oil', href: '#' },
  { name: 'Rice, Pulse', href: '#' },
];

// === আপনার দেওয়া Quick Links, রাউটারের সাথে লিঙ্ক করা ===
const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'All Products', href: '/products' },
  { name: 'Track Order', href: '/dashboard/orders' }, // Track Order ড্যাশবোর্ডে লিঙ্ক করা হলো
  { name: 'Contact Us', href: '/contact' },
  { name: 'FAQ', href: '/faq' }, // FAQ লিঙ্ক যোগ করা হলো
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* কলাম ১: About e-foods */}
          <div className="space-y-4">
            <Link to="/"> {/* === a ট্যাগকে Link দিয়ে পরিবর্তন === */}
              <img 
                src="/path-to-your-logo/efoodis-logo-white.png" // একটি সাদা/লাইট লোগো ব্যবহার করুন
                alt="e-foods" 
                className="h-14 mb-4" 
              />
            </Link>
            <p className="text-sm leading-relaxed">
              গ্রামীণ ঐতিহ্যে e-foods অনলাইন শপে আপনাকে স্বাগতম। বিশ্বস্ততার সাথে সারা বাংলাদেশে খাঁটি ও অর্গানিক পণ্যের হোম ডেলিভারী দিয়ে থাকি।
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-sm">হাউস #১২৩, রোড #৪, ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-sm hover:text-white transition-colors">
                  <a href="tel:+8801716342167">+8801716342167</a> {/* ফোন নম্বর ঠিক করে দিয়েছি */}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-400 flex-shrink-0" />
                <span className="text-sm hover:text-white transition-colors">
                  <a href="mailto:support@efoodis.com">support@efoodis.com</a> {/* ইমেইল ঠিক করে দিয়েছি */}
                </span>
              </div>
            </div>
          </div>

          {/* কলাম ২: Quick Links */}
          <div className="md:pl-8">
            <h3 className="text-xl font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {/* === a ট্যাগকে Link দিয়ে পরিবর্তন === */}
                  <Link 
                    to={link.href} 
                    className="hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    › {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* কলাম ৩: Top Categories */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Top Categories</h3>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.name}>
                  {/* === a ট্যাগকে Link দিয়ে পরিবর্তন === */}
                  <Link 
                    to={link.href} 
                    className="hover:text-white hover:pl-2 transition-all duration-300"
                  >
                    › {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* কলাম ৪: Newsletter & Social (অপরিবর্তিত) */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Newsletter</h3>
            <p className="text-sm mb-4">
              অফার এবং নতুন পণ্যের আপডেট পেতে সাবস্ক্রাইব করুন।
            </p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-700 border-gray-600 text-white rounded-r-none focus-visible:ring-green-500 focus-visible:ring-offset-0"
              />
              <Button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white rounded-l-none"
                aria-label="Subscribe"
              >
                <Send size={18} />
              </Button>
            </form>
            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="p-2 bg-gray-700 rounded-full hover:bg-green-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="p-2 bg-gray-700 rounded-full hover:bg-green-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 bg-gray-700 rounded-full hover:bg-green-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} e-foodis. All Rights Reserved. 
            Developed by <a href="https://pixelandcodeweb.vercel.app/" className="font-medium text-green-400 hover:text-white" target="_blank" rel="noopener noreferrer">Pixel & Code</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;