// src/components/shared/ProductCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // <-- Link ইম্পোর্ট করা হয়েছে
import { Button } from '@/components/ui/button'; // <-- Button ইম্পোর্ট করা হয়েছে

// Card item animation variant (exported)
export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
};

// ProductCard component (exported)
export const ProductCard = ({ product }) => {
  const { id, name, imageUrl, oldPrice, newPrice, discount } = product;

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col transition-all duration-300 hover:shadow-xl group" 
      variants={itemVariants}
      layout // Ensures smooth layout changes if items are filtered
    >
      {/* ইমেজ ও ব্যাজ কন্টেইনার */}
      <div className="relative">
        {/* === Link ব্যবহার করা হয়েছে === */}
        <Link to={`/product/${id}`} className="block overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-48 md:h-52 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
            loading="lazy"
          />
        </Link>
        {/* ডিসকাউন্ট ব্যাজ */}
        <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold rounded-full h-12 w-12 flex items-center justify-center text-center leading-tight shadow-lg">
          {discount} <br/> ছাড়
        </span>
      </div>

      {/* কার্ডের কন্টেন্ট */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-gray-800 text-lg mb-2 truncate">
          {/* === Link ব্যবহার করা হয়েছে === */}
          <Link to={`/product/${id}`} className="hover:text-green-700 transition-colors">
            {name}
          </Link>
        </h3>
        
        {/* মূল্য */}
        <div className="flex items-baseline gap-2 mb-4 mt-auto">
          <span className="text-blue-600 font-bold text-xl">৳ {newPrice}</span>
          <span className="text-gray-500 line-through text-sm">৳ {oldPrice}</span>
        </div>

        {/* === বাটনকেও Link করা হয়েছে === */}
        {/* `asChild` prop Button-কে Link-এর স্টাইল নিতে সাহায্য করে */}
        <Button asChild className="w-full bg-green-600 text-white text-center font-medium py-2 rounded-lg transition-all duration-300 hover:bg-green-700 active:scale-95">
           <Link to={`/product/${id}`}>
             অর্ডার করুন
           </Link>
        </Button>
      </div>
    </motion.div>
  );
};

// Note: No default export needed if you only use named exports