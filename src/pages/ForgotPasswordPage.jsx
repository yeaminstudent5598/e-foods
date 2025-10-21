import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom'; // SPA নেভিগেশনের জন্য
import { Mail } from 'lucide-react'; // আইকন

const ForgotPasswordPage = () => {
  
  // একটি ডেমো সাবমিট হ্যান্ডলার
  const handleSubmit = (event) => {
    event.preventDefault();
    // এখানে আপনার পাসওয়ার্ড রিসেট লজিক থাকবে (যেমন: Firebase sendPasswordResetEmail)
    console.log("Password reset link requested...");
    // ইউজারকে একটি সফল বার্তা দেখাতে পারেন
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
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            পাসওয়ার্ড ভুলে গেছেন?
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            চিন্তার কারণ নেই! আপনার ইমেইল এড্রেসটি দিন, আমরা আপনাকে পাসওয়ার্ড রিসেট করার একটি লিঙ্ক পাঠিয়ে দেবো।
          </p>
        </div>
        
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

          {/* রিসেট বাটন */}
          <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-base">
            রিসেট লিঙ্ক পাঠান <Mail size={18} className="ml-2" />
          </Button>
        </form>

        <Separator /> 
        
        {/* লগইন পেজে ফেরত যাওয়ার লিঙ্ক */}
        <p className="text-center text-sm text-gray-600">
          পাসওয়ার্ড মনে পড়েছে?{' '}
          <Link to="/login" className="font-medium text-green-700 hover:underline">
            লগইন করুন
          </Link>
        </p>

      </div>
    </div>
  );
};

export default ForgotPasswordPage;