// src/components/home/featuredProducts/FeaturedProducts.jsx

import React from 'react';
import { motion } from 'framer-motion';
// ProductCard এবং variants ইম্পোর্ট করুন
import { ProductCard, itemVariants } from '@/components/shared/ProductCard'; // পাথ চেক করুন

// extracted product data from the previous step
const featuredProductsData = [
  { id: 1070, name: "দানাদার গাওয়া ঘি | Granular Gawa Ghee", imageUrl: "https://hffoodservice.com/wp-content/uploads/2023/11/সিরাজগঞ্জের-দানাদার-গাওয়া-ঘি-copy-1-720x720.webp", newPrice: 850, oldPrice: null, discount: null, productLink: "/product/1070" },
  { id: 113417, name: "শাহী মাংসের মশলা | Shahi Meat Masala", imageUrl: "https://hffoodservice.com/wp-content/uploads/2025/03/শাহী-মাংসের-মশলা-2-720x720.webp", newPrice: 450, oldPrice: null, discount: null, productLink: "/product/113417" },
  { id: 1184, name: "হানি নাটস | Honey Nuts", imageUrl: "https://hffoodservice.com/wp-content/uploads/2024/05/হানি-নাটস-copy-720x720.webp", newPrice: 1350, oldPrice: null, discount: null, productLink: "/product/1184" },
  { id: 1118, name: "শাহী গরম মশলা | Shahi Garam Masala Powder", imageUrl: "https://hffoodservice.com/wp-content/uploads/2023/11/স্পেশাল-শাহী-গরম-মশলা-500-copy-1-720x720.webp", newPrice: 650, oldPrice: null, discount: null, productLink: "/product/1118" },
  { id: 171813, name: "Karkuma Joint Guard (90 Pcs)", imageUrl: "https://hffoodservice.com/wp-content/uploads/2025/08/Karkuma-Joint-Guard-copy-720x720.webp", newPrice: 2170, oldPrice: null, discount: null, productLink: "/product/171813" },
  { id: 171808, name: "Karkuma Organic Turmeric Immune Booster", imageUrl: "https://hffoodservice.com/wp-content/uploads/2025/08/Organic-Turmaric-Immune-Booster-copy-720x720.webp", newPrice: 390, oldPrice: null, discount: null, productLink: "/product/171808" },
  { id: 171802, name: "Karkuma Organic Healthy Gut", imageUrl: "https://hffoodservice.com/wp-content/uploads/2025/08/Organic-Healthy-Gut-copy-720x720.webp", newPrice: 800, oldPrice: null, discount: null, productLink: "/product/171802" },
  { id: 175069, name: "Ausimex Baby Oats", imageUrl: "https://hffoodservice.com/wp-content/uploads/2025/09/Ausimex-Baby-Oats-500g-720x720.webp", newPrice: 645, oldPrice: null, discount: null, productLink: "/product/175069" },
  // Add the rest of the products here...
];


// Grid Container Animation Variant
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Stagger effect for cards
    }
  }
};

const FeaturedProducts = () => {
  return (
    <section className="py-12 md:py-16 bg-white"> {/* Changed background to white */}
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center"> {/* Centered title */}
          সকল পণ্য
        </h2>
        
        {/* Product Grid */}
        <motion.div 
          // Matching the columns from the HTML: small=2, medium=3, large=5
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6" 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Map through the featured products data */}
          {featuredProductsData.map((product) => (
            <ProductCard 
              key={product.id} 
              product={{
                ...product,
                // Adjusting the data slightly to fit ProductCard props better
                // Using productLink for navigation if needed, though ProductCard now handles it internally
              }} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;