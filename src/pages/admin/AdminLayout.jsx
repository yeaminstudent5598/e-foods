import React from 'react';
import { NavLink, Outlet, Link, useNavigate } from 'react-router-dom';
import {
  Bell,
  Home,
  Package,
  ShoppingCart,
  Users,
  LineChart,
  Menu,
} from 'lucide-react';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// অ্যাডমিন সাইডবারের লিঙ্ক (অপরিবর্তিত)
const adminNavLinks = [
  { name: 'Dashboard', href: '/admin', icon: Home },
  { name: 'Orders', href: '/admin/orders', icon: ShoppingCart, badge: '6' },
  { name: 'Products', href: '/admin/products', icon: Package },
  { name: 'Customers', href: '/admin/customers', icon: Users },
  { name: 'Analytics', href: '/admin/analytics', icon: LineChart },
];

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Admin logging out...");
    // TODO: অ্যাডমিন লগআউট লজিক
    navigate('/login');
  };


  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      
      {/* ===== ডেস্কটপ সাইডবার (ডার্ক থিম) ===== */}
      {/* === bg-muted/40 কে bg-gray-900 করা হয়েছে === */}
      <aside className="hidden border-r border-gray-700 bg-gray-900 md:block"> {/* Border কালারও পরিবর্তন */}
        <div className="flex h-full max-h-screen flex-col gap-2">
          
          {/* === হেডার লোগো (ডার্ক থিম) === */}
          <div className="flex h-14 items-center border-b border-gray-700 px-4 lg:h-[60px] lg:px-6">
            <Link to="/admin" className="flex items-center gap-2 font-semibold text-white">
              <Package className="h-6 w-6 text-green-500" /> {/* আইকন সবুজ */}
              <span className="text-xl">e-foodis Admin</span>
            </Link>
          </div>
          
          {/* === নেভিগেশন (ডার্ক থিম) === */}
          <nav className="flex-1 overflow-auto py-4 px-2 text-base font-medium lg:px-4">
            {adminNavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-3 transition-all ${
                    isActive
                      // === Active কালার (সবুজ ব্যাকগ্রাউন্ড, সাদা টেক্সট) ===
                      ? 'bg-green-600 text-white font-semibold shadow-inner' 
                      // === Inactive কালার (হালকা ধূসর টেক্সট, ডার্ক হোভার) ===
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`
                }
              >
                <link.icon className="h-5 w-5" />
                {link.name}
                {link.badge && (
                  // === ব্যাজ কালার (সাদা টেক্সট) ===
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white border-green-700">
                    {link.badge}
                  </Badge>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* ===== মোবাইল হেডার ও প্রধান কন্টেন্ট ===== */}
      <div className="flex flex-col">
        {/* === হেডার এখন bg-white === */}
        <header className="flex h-14 items-center gap-4 border-b bg-white px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30"> {/* Sticky হেডার */}
          
          {/* --- মোবাইল মেনু (Sheet) --- */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            {/* === মোবাইল সাইডবারও ডার্ক করা হয়েছে === */}
            <SheetContent side="left" className="flex flex-col p-0 bg-gray-900 border-r-0 w-full max-w-[280px]"> {/* প্রস্থ নির্দিষ্ট করা হলো */}
              <div className="flex h-14 items-center border-b border-gray-700 px-4 lg:h-[60px] lg:px-6">
                <Link to="/admin" className="flex items-center gap-2 font-semibold text-white">
                  <Package className="h-6 w-6 text-green-500" />
                  <span className="text-xl">e-foodis Admin</span>
                </Link>
              </div>
              <nav className="flex-1 overflow-auto py-4 px-2 text-base font-medium lg:px-4">
                {adminNavLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    end
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-lg px-3 py-3 transition-all ${
                        isActive
                          ? 'bg-green-600 text-white font-semibold shadow-inner'
                          : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      }`
                    }
                  >
                    <link.icon className="h-5 w-5" />
                    {link.name}
                    {link.badge && (
                      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-white border-green-700">
                        {link.badge}
                      </Badge>
                    )}
                  </NavLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          {/* --- টপ বার (নোটিফিকেশন ও প্রোফাইল) --- */}
          <div className="w-full flex-1" /> {/* ফাঁকা জায়গা */}
          <Button variant="outline" size="icon" className="relative h-9 w-9"> {/* সাইজ সামান্য ছোট করা */}
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9"> {/* সাইজ ও ভ্যারিয়েন্ট পরিবর্তন */}
                <Avatar className="h-8 w-8"> {/* সাইজ পরিবর্তন */}
                  <AvatarImage src="https://github.com/shadcn.png" alt="Admin" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="text-red-500 cursor-pointer">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* ===== প্রধান কন্টেন্ট এরিয়া ===== */}
        {/* === কন্টেন্ট এরিয়ার ব্যাকগ্রাউন্ড bg-gray-50 রাখা হয়েছে === */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;