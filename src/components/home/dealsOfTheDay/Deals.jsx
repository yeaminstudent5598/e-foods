// src/components/home/dealsOfTheDay/Deals.jsx

import React from 'react';
import { motion } from 'framer-motion';
// === সঠিক ProductCard এবং variants ইম্পোর্ট করা হয়েছে ===
// নিশ্চিত করুন পাথটি আপনার প্রজেক্ট অনুযায়ী ঠিক আছে
import { ProductCard, itemVariants } from '@/components/shared/ProductCard'; 

// আপনার productData অ্যারে 
const productData = [
  { id: 1, name: "কালোজিরা আচার", imageUrl: "https://efoodis.com/public/uploads/product/1756417513-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%9C%E0%A6%BF%E0%A6%B0%E0%A6%BE-%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%86%E0%A6%9A%E0%A6%BE%E0%A6%B0.jpg", oldPrice: 1250, newPrice: 890, discount: "29%" },
  { id: 2, name: "ঝুড়ি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1754690259-juri.webp", oldPrice: 850, newPrice: 790, discount: "7%" },
  { id: 3, name: "রসুনের আচার", imageUrl: "https://efoodis.com/public/uploads/product/1754690259-juri.webp", oldPrice: 850, newPrice: 690, discount: "19%" },
  { id: 4, name: "১ কিজিঃ ৪ পিঠা কম্বো অফার", imageUrl: "https://efoodis.com/public/uploads/product/1758055563-combo-offer.jpg", oldPrice: 990, newPrice: 690, discount: "30%" },
  { id: 5, name: "ঝিনুক পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1756499233-jhinuk-pitha.jpg", oldPrice: 850, newPrice: 590, discount: "31%" },
  { id: 6, name: "নকশি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1756499233-jhinuk-pitha.jpg", oldPrice: 850, newPrice: 590, discount: "31%" },
  { id: 7, name: "১.৫ লিটার ৪ স্পেশাল কম্বো", imageUrl: "https://efoodis.com/public/uploads/product/1758059095-combo-web-efoodis.jpg", oldPrice: 1800, newPrice: 1250, discount: "31%" },
  { id: 8, name: "নকশি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1756500696-n.jpg", oldPrice: 850, newPrice: 690, discount: "19%" },
  { id: 9, name: "গোজাপ ফুল পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1754854824-gulap-ful-pitha.webp", oldPrice: 750, newPrice: 590, discount: "21%" },
  { id: 10, name: "গোজাপ ফুল পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1754854824-gulap-ful-pitha.webp", oldPrice: 850, newPrice: 690, discount: "19%" },
  { id: 11, name: "ছোট নকশি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1758020593-suta-nokshi-pitha.png", oldPrice: 850, newPrice: 690, discount: "19%" },
];

// Grid Container Variant 
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // প্রতিটি কার্ডের মধ্যে ০.০৫ সেকেন্ড দেরি হবে
    }
  }
};

// মূল Deals কম্পোনেন্ট
const Deals = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          All Products
        </h2>
        
        {/* গ্রিড কন্টেইনার 'motion.div' দিয়ে মোড়ানো */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          // যখন সেকশনটি ভিউপোর্টে আসবে তখন অ্যানিমেশন শুরু হবে
          whileInView="visible"
          // অ্যানিমেশনটি শুধু একবারই চলবে
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* productData ম্যাপ করে প্রতিটি ProductCard রেন্ডার করা হচ্ছে */}
          {productData.map((product) => (
            // === ইম্পোর্ট করা ProductCard ব্যবহার করা হচ্ছে ===
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Deals;