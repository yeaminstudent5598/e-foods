import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom'; // SPA নেভিগেশনের জন্য
import { UserPlus } from 'lucide-react'; // আইকন

const RegisterPage = () => {
  
  // একটি ডেমো সাবমিট হ্যান্ডলার
  const handleSubmit = (event) => {
    event.preventDefault();
    // এখানে আপনার রেজিস্ট্রেশন লজিক (Firebase, NextAuth, API কল) থাকবে
    // পাসওয়ার্ড দুটি এক কিনা তা পরীক্ষা করতে হবে
    console.log("Register attempt...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-12 px-4">
      
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl border border-gray-200">
        
        {/* লোগো (Navbar থেকে লোগো লিঙ্ক) */}
        <div className="flex justify-center">
          <Link to="/">
            {/* !!! আপনার আসল লোগোর পাথ এখানে দিন !!! */}
            <img 
              src="https://www.shutterstock.com/image-vector/letter-e-logo-symbol-template-260nw-1521105263.jpg" 
              alt="e-foodis" 
              className="h-14" 
            />
          </Link>
        </div>
        
        <h2 className="text-3xl font-bold text-center text-gray-900">
          নতুন একাউন্ট তৈরি করুন
        </h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* সম্পূর্ণ নাম ফিল্ড */}
          <div>
            <Label htmlFor="name" className="font-medium text-gray-700">আপনার নাম</Label>
            <Input 
              type="text" 
              id="name" 
              placeholder="আপনার সম্পূর্ণ নাম" 
              className="mt-2"
              required 
            />
          </div>

          {/* ইমেইল ফিল্ড */}
          <div>
            <Label htmlFor="email" className="font-medium text-gray-700">ইমেইল এড্রেস</Label>
            <Input 
              type="email" 
              id="email" 
              placeholder="example@email.com" 
              className="mt-2"
              required 
            />
          </div>

          {/* পাসওয়ার্ড ফিল্ড */}
          <div>
            <Label htmlFor="password" className="font-medium text-gray-700">পাসওয়ার্ড</Label>
            <Input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              className="mt-2"
              required 
            />
          </div>

          {/* কনফার্ম পাসওয়ার্ড ফিল্ড */}
          <div>
            <Label htmlFor="confirm-password" className="font-medium text-gray-700">পাসওয়ার্ড নিশ্চিত করুন</Label>
            <Input 
              type="password" 
              id="confirm-password" 
              placeholder="••••••••" 
              className="mt-2"
              required 
            />
          </div>

          {/* রেজিস্ট্রেশন বাটন */}
          <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-base">
            রেজিস্ট্রেশন করুন <UserPlus size={18} className="ml-2" />
          </Button>
        </form>

        <Separator /> 
        
        {/* লগইন লিঙ্ক */}
        <p className="text-center text-sm text-gray-600">
          ইতোমধ্যে একাউন্ট আছে?{' '}
          <Link to="/login" className="font-medium text-green-700 hover:underline">
            এখানে লগইন করুন
          </Link>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;