import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const ProfilePage = () => {
  
  // ডেমো সাবমিট হ্যান্ডলার
  const handleProfileUpdate = (event) => {
    event.preventDefault();
    console.log("Updating profile...");
    // এখানে প্রোফাইল আপডেট করার API কল হবে
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    console.log("Changing password...");
    // এখানে পাসওয়ার্ড পরিবর্তন করার API কল হবে
  };

  return (
    <div>
      {/* ===== সেকশন ১: প্রোফাইল ইনফরমেশন ===== */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
        My Profile
      </h3>
      
      <form onSubmit={handleProfileUpdate} className="space-y-6 max-w-lg">
        {/* ফুল নেম */}
        <div>
          <Label htmlFor="name" className="font-medium text-gray-700">Full Name</Label>
          <Input 
            type="text" 
            id="name"
            defaultValue="Yeamin Student" // ডেমো ডেটা (আপনার ফাইল পাথ থেকে)
            className="mt-2"
          />
        </div>
        
        {/* ইমেইল (সাধারণত পরিবর্তন করা যায় না) */}
        <div>
          <Label htmlFor="email" className="font-medium text-gray-700">Email Address</Label>
          <Input 
            type="email" 
            id="email"
            defaultValue="yeamin@example.com" // ডেমো ডেটা
            readOnly
            disabled
            className="mt-2 bg-gray-100"
          />
        </div>
        
        {/* ফোন নম্বর */}
        <div>
          <Label htmlFor="phone" className="font-medium text-gray-700">Phone Number</Label>
          <Input 
            type="tel" 
            id="phone"
            defaultValue="+8801641801705" // ডেমো ডেটা
            className="mt-2"
          />
        </div>
        
        <Button type="submit" className="bg-green-600 hover:bg-green-700">
          Save Changes
        </Button>
      </form>

      <Separator className="my-12" />

      {/* ===== সেকশন ২: পাসওয়ার্ড পরিবর্তন ===== */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
        Change Password
      </h3>
      
      <form onSubmit={handleChangePassword} className="space-y-6 max-w-lg">
        {/* বর্তমান পাসওয়ার্ড */}
        <div>
          <Label htmlFor="current-password" className="font-medium text-gray-700">Current Password</Label>
          <Input 
            type="password" 
            id="current-password"
            placeholder="••••••••"
            className="mt-2"
          />
        </div>
        
        {/* নতুন পাসওয়ার্ড */}
        <div>
          <Label htmlFor="new-password" className="font-medium text-gray-700">New Password</Label>
          <Input 
            type="password" 
            id="new-password"
            placeholder="••••••••"
            className="mt-2"
          />
        </div>
        
        {/* নতুন পাসওয়ার্ড কনফার্ম */}
        <div>
          <Label htmlFor="confirm-new-password" className="font-medium text-gray-700">Confirm New Password</Label>
          <Input 
            type="password" 
            id="confirm-new-password"
            placeholder="••••••••"
            className="mt-2"
          />
        </div>
        
        <Button type="submit" variant="secondary">
          Update Password
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;