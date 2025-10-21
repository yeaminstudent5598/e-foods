import React from 'react';
import { motion } from 'framer-motion';

// Swiper React কম্পোনেন্ট ইম্পোর্ট করুন
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper স্টাইল ইম্পোর্ট করুন
import 'swiper/css';
import 'swiper/css/autoplay'; // Autoplay স্টাইল (Pagination বাদ দেওয়া হয়েছে)

// প্রয়োজনীয় মডিউল ইম্পোর্ট করুন
import { Autoplay } from 'swiper/modules'; // Pagination মডিউল বাদ দেওয়া হয়েছে

// lucide-react থেকে আইকন
import { Star, Quote } from 'lucide-react';

// ডেমো রিভিউ ডেটা (কার্ড সংখ্যা বাড়ানো হয়েছে)
const reviews = [
  {
    name: "সাদিয়া ইসলাম",
    location: "ঢাকা",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250",
    review: "e-foodis-এর আচারগুলো ঠিক যেন দাদীর হাতের বানানো! স্বাদ আর মান দুটোই অসাধারণ। ধন্যবাদ এমন খাঁটি জিনিস পৌঁছে দেওয়ার জন্য।"
  },
  {
    name: "আরিফুর রহমান",
    location: "চট্টগ্রাম",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250",
    review: "ওদের অর্গানিক মশলা ব্যবহার করছি। রান্নার স্বাদই বদলে গেছে। বিশেষ করে হলুদের রঙ আর ঘ্রাণটা একদম খাঁটি।"
  },
  {
    name: "নাসরিন সুলতানা",
    location: "খুলনা",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250",
    review: "শীতের পিঠা অর্ডার করেছিলাম। ঝিনুক পিঠা আর নকশি পিঠা দুটোই খুব ফ্রেশ আর সুস্বাদু ছিল। ডেলিভারিও সময়মতো পেয়েছি।"
  },
  {
    name: "কামাল আহমেদ",
    location: "সিলেট",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=250",
    review: "অফিসের জন্য একসাথে অনেকগুলো কম্বো অর্ডার করেছিলাম। সবাই খুব প্রশংসা করেছে। প্যাকিজিং খুবই সুন্দর এবং প্রফেশনাল ছিল।"
  },
  {
    name: "ফারজানা আক্তার",
    location: "রাজশাহী",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250",
    review: "বাচ্চাদের জন্য বাদাম আর খেজুর নিয়েছিলাম। কোয়ালিটি খুবই প্রিমিয়াম। নির্দ্বিধায় আবারও অর্ডার করবো।"
  },
  {
    name: "মিজানুর চৌধুরী",
    location: "ঢাকা",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250",
    review: "রসুনের আচারটা আমার খুবই ভালো লেগেছে। ঝাল-মিষ্টির দারুণ একটা ব্যালেন্স। রুটি বা ভাতের সাথে খাওয়ার জন্য পারফেক্ট।"
  }
];

// অ্যানিমেশন ভেরিয়েন্ট (অপরিবর্তিত)
const fadeInAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: "easeOut" 
    } 
  }
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* সেকশনের শিরোনাম */}
        <motion.div 
          className="text-center mb-12"
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimation}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">
            আমাদের কাস্টমাররা কী বলেন
          </h2>
          <p className="text-gray-600 mt-2">
            আমাদের সেবায় যারা সন্তুষ্ট
          </p>
        </motion.div>

        {/* Swiper Marquee স্লাইডার */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Swiper
            // === Marquee অ্যানিমেশনের জন্য নতুন কনফিগারেশন ===
            modules={[Autoplay]}
            loop={true} // লুপ চালু করা হয়েছে
            freeMode={true} // স্লাইডগুলো আটকে থাকবে না, চলতে থাকবে
            grabCursor={true}
            spaceBetween={30}
            slidesPerView={'auto'} // প্রতিটি স্লাইড তার নিজের প্রস্থ (width) নেবে
            autoplay={{
              delay: 1, // ১ মিলিসেকেন্ড পর শুরু হবে (সাথে সাথে)
              disableOnInteraction: false, // ইউজার ক্লিক করলেও চলবে
              pauseOnMouseEnter: true, // মাউস হোভার করলে থামবে (Good UX)
            }}
            speed={8000} // একটি স্লাইড পার হতে ৮ সেকেন্ড সময় নেবে (ধীর গতি)
            className="w-full" // pb-12 বাদ দেওয়া হয়েছে কারণ pagination নেই
          >
            {reviews.map((item, index) => (
              <SwiperSlide 
                key={index} 
                // === প্রতিটি স্লাইডের একটি নির্দিষ্ট প্রস্থ দেওয়া জরুরি ===
                className="!w-80 md:!w-96" // Tailwind 'w-80' বা 320px
              >
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-600 h-full flex flex-col">
                  {/* স্টার রেটিং */}
                  <div className="flex text-yellow-500 mb-4">
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                    <Star fill="currentColor" size={20} />
                  </div>
                  
                  {/* রিভিউ টেক্সট */}
                  <div className="relative mb-4">
                    <Quote size={28} className="absolute -top-3 -left-4 text-gray-200" />
                    <p className="text-gray-600 italic z-10 relative">"{item.review}"</p>
                  </div>

                  {/* কাস্টমার প্রোফাইল */}
                  <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-green-200"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg">{item.name}</h4>
                      <p className="text-gray-500 text-sm">{item.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;