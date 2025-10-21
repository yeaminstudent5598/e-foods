import React from 'react';
import { motion } from 'framer-motion';

// ডেমো ডেটা, আপনার Bestseller পণ্য দিয়ে এটি পরিবর্তন করুন
const bestsellers = [
  { id: 1, name: "ঝাল কালোজিরা আচার", imageUrl: "https://efoodis.com/public/uploads/product/1756417513-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%9C%E0%A6%BF%E0%A6%B0%E0%A6%BE-%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%86%E0%A6%9A%E0%A6%BE%E0%A6%B0.jpg", newPrice: 890, oldPrice: 1250 },
  { id: 2, name: "গোজাপ ফুল পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1754854824-gulap-ful-pitha.webp", newPrice: 590, oldPrice: 750 },
  { id: 3, name: "ঝিনুক পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1756499233-jhinuk-pitha.jpg", newPrice: 590, oldPrice: 850 },
  { id: 4, name: "১.৫ লিটার কম্বো", imageUrl: "https://efoodis.com/public/uploads/product/1758059095-combo-web-efoodis.jpg", newPrice: 1250, oldPrice: 1800 },
  { id: 5, name: "ঝুড়ি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1754690259-juri.webp", newPrice: 790, oldPrice: 850 },
  { id: 6, name: "ছোট নকশি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1758020593-suta-nokshi-pitha.png", newPrice: 690, oldPrice: 850 },
];

// একটি সিম্পল প্রোডাক্ট কার্ড (আপনি আপনার existing ProductCard ব্যবহার করতে পারেন)
const SimpleProductCard = ({ product }) => (
  <motion.div 
    className="flex-shrink-0 w-64 md:w-72 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl"
    whileHover={{ y: -5 }} // হোভার করলে সামান্য উপরে উঠবে
  >
    <a href="#" className="block">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 text-lg truncate mb-2">{product.name}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-blue-600 font-bold text-xl">৳ {product.newPrice}</span>
          <span className="text-gray-500 line-through text-sm">৳ {product.oldPrice}</span>
        </div>
      </div>
    </a>
  </motion.div>
);

const Bestsellers = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          আমাদের বেস্টসেলার পণ্য
        </h2>
        
        {/* Drag-scrolling কন্টেইনার */}
        <motion.div 
          className="cursor-grab active:cursor-grabbing"
          // 'overflow-x: hidden' প্যারেন্টে থাকা জরুরি
        >
          <motion.div 
            className="flex gap-6 pb-4" // pb-4 স্ক্রলবার হাইড করতে সাহায্য করে (যদি দেখা যায়)
            drag="x" // শুধু x-অক্ষে ড্রাগ করা যাবে
            dragConstraints={{ right: 0, left: - (288 * bestsellers.length) }} // 288px = (w-72 + gap-6)
            // 'left' ভ্যালুটি আপনার কার্ডের সংখ্যা ও প্রস্থ অনুযায়ী অ্যাডজাস্ট করতে হবে
          >
            {bestsellers.map((product) => (
              <SimpleProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Bestsellers;