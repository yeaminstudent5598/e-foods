import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from 'lucide-react'; // আইকন

const ContactPage = () => {
  return (
    <section className="py-16 bg-white min-h-[80vh]">
      <div className="container mx-auto px-4">
        
        {/* সেকশনের শিরোনাম */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900">
            যোগাযোগ করুন
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            আপনার যেকোনো প্রশ্ন, মতামত বা অভিযোগ আমাদের জানান।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* ===== কন্টাক্ট ফর্ম ===== */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              আমাদের মেসেজ পাঠান
            </h3>
            
            <form className="space-y-6">
              {/* Name Input */}
              <div>
                <Label htmlFor="name" className="font-medium">আপনার নাম</Label>
                <Input 
                  type="text" 
                  id="name" 
                  placeholder="আপনার সম্পূর্ণ নাম" 
                  className="mt-2" 
                />
              </div>

              {/* Email Input */}
              <div>
                <Label htmlFor="email" className="font-medium">আপনার ইমেইল</Label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="example@email.com" 
                  className="mt-2" 
                />
              </div>

              {/* Subject Input */}
              <div>
                <Label htmlFor="subject" className="font-medium">বিষয়</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="আপনার বার্তার বিষয়" 
                  className="mt-2" 
                />
              </div>

              {/* Message Textarea */}
              <div>
                <Label htmlFor="message" className="font-medium">আপনার বার্তা</Label>
                <Textarea 
                  id="message" 
                  placeholder="আপনার বিস্তারিত বার্তা এখানে লিখুন..." 
                  className="mt-2" 
                  rows={6} 
                />
              </div>
              
              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700">
                মেসেজ পাঠান <Send size={18} className="ml-2" />
              </Button>
            </form>
          </div>

          {/* ===== কন্টাক্ট ইনফরমেশন ===== */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              সরাসরি যোগাযোগ
            </h3>
            
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-green-100 p-4 rounded-full">
                <Phone size={24} className="text-green-700" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">ফোন</h4>
                <p className="text-gray-600 mb-1">যেকোনো তথ্যের জন্য কল করুন (সকাল ১০টা - রাত ৮টা)</p>
                <a 
                  href="tel:+8801641801705" 
                  className="text-lg font-medium text-green-700 hover:underline"
                >
                  +8801641801705
                </a>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-green-100 p-4 rounded-full">
                <Mail size={24} className="text-green-700" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">ইমেইল</h4>
                <p className="text-gray-600 mb-1">যেকোনো সাপোর্টের জন্য আমাদের ইমেইল করুন</p>
                <a 
                  href="mailto:support@efoodis.com" 
                  className="text-lg font-medium text-green-700 hover:underline"
                >
                  support@efoodis.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-green-100 p-4 rounded-full">
                <MapPin size={24} className="text-green-700" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800">অফিসের ঠিকানা</h4>
                <p className="text-gray-600 text-lg">
                  হাউস #১২৩, রোড #৪, ব্লক #বি <br/>
                  বসুন্ধরা আর/এ, ঢাকা-১২২৯, বাংলাদেশ
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPage;