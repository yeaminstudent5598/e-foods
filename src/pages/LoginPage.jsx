import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom'; // SPA নেভিগেশনের জন্য
import { LogIn } from 'lucide-react'; // আইকন

const LoginPage = () => {
  
  // একটি ডেমো সাবমিট হ্যান্ডলার
  const handleSubmit = (event) => {
    event.preventDefault();
    // এখানে আপনার লগইন লজিক (Firebase, NextAuth, API কল) থাকবে
    console.log("Login attempt...");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      
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
          আপনার একাউন্টে লগইন করুন
        </h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          
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
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="font-medium text-gray-700">পাসওয়ার্ড</Label>
              <Link 
                to="/forgot-password" // একটি পাসওয়ার্ড রিসেট পেজ বানাতে পারেন
                className="text-sm text-green-600 hover:underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>
            <Input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              className="mt-2"
              required 
            />
          </div>

          {/* লগইন বাটন */}
          <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-base">
            লগইন করুন <LogIn size={18} className="ml-2" />
          </Button>
        </form>

        <Separator /> 
        
        {/* রেজিস্ট্রেশন লিঙ্ক */}
        <p className="text-center text-sm text-gray-600">
          একাউন্ট নেই?{' '}
          <Link to="/register" className="font-medium text-green-700 hover:underline">
            এখানে রেজিস্ট্রেশন করুন
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;