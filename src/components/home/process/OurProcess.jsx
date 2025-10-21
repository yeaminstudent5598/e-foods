import React from 'react';
import { motion } from 'framer-motion';
// lucide-react থেকে আইকন
import { Leaf, Award, PackageCheck, Truck } from 'lucide-react';

// প্রক্রিয়ার ধাপগুলো
const processSteps = [
  {
    icon: <Leaf size={48} className="text-green-600" />,
    title: "খাঁটি উৎসের সন্ধান",
    description: "আমরা সরাসরি গ্রাম থেকে সেরা কৃষক এবং উৎপাদকের কাছ থেকে পণ্য সংগ্রহ করি।"
  },
  {
    icon: <Award size={48} className="text-green-600" />,
    title: "মান নিয়ন্ত্রণ",
    description: "প্রতিটি পণ্য আমাদের নিজস্ব ল্যাবে পরীক্ষা করা হয় যাতে এর গুণমান ১০০% নিশ্চিত থাকে।"
  },
  {
    icon: <PackageCheck size={48} className="text-green-600" />,
    title: "স্বাস্থ্যসম্মত প্যাকিং",
    description: "পণ্যের স্বাদ ও গুণ অটুট রাখতে আমরা স্বাস্থ্যসম্মত উপায়ে ফুড-গ্রেড প্যাকেজিং করি।"
  },
  {
    icon: <Truck size={48} className="text-green-600" />,
    title: "দ্রুততম ডেলিভারি",
    description: "অর্ডার করার পর যত দ্রুত সম্ভব আপনার ঠিকানায় ফ্রেশ পণ্য পৌঁছে দেওয়াই আমাদের লক্ষ্য।"
  }
];

// অ্যানিমেশন ভেরিয়েন্ট (Staggered fade-in)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // একটির পর একটি আইটেম আসবে
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};


const OurProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        
        {/* সেকশনের শিরোনাম */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            কীভাবে আমরা <span className="text-green-700">খাঁটি মান</span> নিশ্চিত করি?
          </h2>
          <p className="text-gray-600 mt-2">
            গ্রামের উঠান থেকে আপনার রান্নাঘর পর্যন্ত
          </p>
        </motion.div>

        {/* ধাপগুলোর গ্রিড */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="relative bg-gray-50 p-6 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-b-4 border-green-600"
              variants={itemVariants}
            >
              {/* ধাপের নম্বর */}
              <span className="absolute -top-4 -left-4 bg-green-600 text-white font-bold rounded-full h-10 w-10 flex items-center justify-center text-xl shadow-md">
                {index + 1}
              </span>
              
              <div className="inline-block p-4 bg-green-100 rounded-full mb-5">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;