import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // shadcn/ui থেকে ইম্পোর্ট

// ডেমো প্রশ্ন ও উত্তর
const faqData = [
  {
    question: "e-foodis-এর পণ্যগুলো কি সত্যিই অর্গানিক?",
    answer: "হ্যাঁ, আমাদের বেশিরভাগ পণ্যই সরাসরি প্রত্যন্ত গ্রাম থেকে সংগ্রহ করা হয়, যেখানে কৃত্রিম সার বা কীটনাশক ব্যবহার করা হয় না। আমরা প্রতিটি পণ্য নিজস্ব টিমের মাধ্যমে পরীক্ষা করে তার গুণমান নিশ্চিত করি।"
  },
  {
    question: "আপনারা বাংলাদেশের কোথায় কোথায় ডেলিভারি দেন?",
    answer: "আমরা বিশ্বস্ত কুরিয়ার সার্ভিসের মাধ্যমে সারা বাংলাদেশে হোম ডেলিভারি দিয়ে থাকি। ঢাকার ভেতরে ২৪-৪৮ ঘণ্টা এবং ঢাকার বাইরে ৩-৫ কার্যদিবসের মধ্যে ডেলিভারি সম্পন্ন করা হয়।"
  },
  {
    question: "আমি কীভাবে অর্ডার করতে পারি?",
    answer: "আপনি খুব সহজেই আমাদের ওয়েবসাইট থেকে আপনার পছন্দের পণ্যগুলো 'Add to Cart' বাটনে ক্লিক করে কার্টে যোগ করতে পারেন। এরপর কার্ট পেজ থেকে 'Checkout' করে আপনার ঠিকানা ও পেমেন্ট মেথড সিলেক্ট করে অর্ডার সম্পন্ন করতে পারবেন।"
  },
  {
    question: "পেমেন্ট করার কী কী উপায় আছে?",
    answer: "আমরা 'ক্যাশ অন ডেলিভারি' (COD) গ্রহণ করি। এছাড়া আপনি চাইলে বিকাশ, নগদ, বা রকেটের মতো মোবাইল পেমেন্টের মাধ্যমেও অগ্রিম পেমেন্ট করতে পারেন।"
  },
  {
    question: "আমি কি ভাঙা বা নষ্ট পণ্য ফেরত দিতে পারবো?",
    answer: "অবশ্যই। ডেলিভারি ম্যানের সামনে পণ্য চেক করে নিন। কোনো পণ্য ভাঙা, নষ্ট বা ভুল পেলে সাথে সাথেই ডেলিভারি ম্যানকে ফেরত দিন অথবা ২৪ ঘণ্টার মধ্যে আমাদের কাস্টমার সার্ভিসে (+8801641801705) ছবিসহ যোগাযোগ করুন। আমরা বিনামূল্যে পণ্যটি পরিবর্তন করে দেবো।"
  },
  {
    question: "আপনাদের পিঠা বা আচার কতদিন ভালো থাকে?",
    answer: "যেহেতু আমাদের পণ্য সম্পূর্ণ প্রিজারভেটিভ-মুক্ত, তাই এর মেয়াদকাল সাধারণ পণ্যের চেয়ে কিছুটা কম হতে পারে। প্রতিটি পণ্যের প্যাকেটের গায়ে এর মেয়াদ এবং সংরক্ষণের নিয়ম (যেমন: ফ্রিজে রাখুন) লেখা থাকে। অনুগ্রহ করে সেটি অনুসরণ করুন।"
  }
];

const FAQPage = () => {
  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl"> {/* কন্টেন্ট সহজে পড়ার জন্য max-w-4xl */}
        
        {/* সেকশনের শিরোনাম */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            সাধারণ জিজ্ঞাসা (FAQ)
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            আপনার যা কিছু জানার আছে, আমরা সাহায্য করতে প্রস্তুত।
          </p>
        </div>

        {/* Accordion সেকশন */}
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border-b border-gray-200"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-gray-800 hover:no-underline hover:text-green-700">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 leading-relaxed pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
};

export default FAQPage;