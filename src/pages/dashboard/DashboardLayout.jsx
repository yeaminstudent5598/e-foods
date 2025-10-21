import React from 'react';
// === useNavigate ইম্পোর্ট করা হয়েছে ===
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { User, Archive, MapPin, LogOut } from 'lucide-react';

// === লগআউট বাদে বাকি লিঙ্কগুলো ===
const sidebarLinks = [
  { name: 'My Profile', href: '/dashboard/profile', icon: User },
  { name: 'My Orders', href: '/dashboard/orders', icon: Archive },
  { name: 'My Addresses', href: '/dashboard/addresses', icon: MapPin },
];

const DashboardLayout = () => {
  // === নেভিগেট হুক ===
  const navigate = useNavigate();

  // === লগআউট হ্যান্ডলার ===
  const handleLogout = () => {
    console.log("User logging out...");
    
    // TODO: আপনার লগআউট লজিক এখানে যোগ করুন
    // যেমন:
    // - Firebase/Auth Context থেকে signOut() কল করুন
    // - LocalStorage থেকে টোকেন ক্লিয়ার করুন

    // লগআউট শেষে লগইন পেজে ফেরত পাঠান
    navigate('/login');
  };

  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            My Account
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          <aside className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
            <nav className="bg-white p-6 rounded-lg shadow-md">
              <ul className="space-y-2">
                
                {/* প্রোফাইল, অর্ডার, এড্রেস লিঙ্ক */}
                {sidebarLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) =>
                        `flex items-center gap-3 p-3 rounded-md transition-all duration-300 font-medium ${
                          isActive
                            ? 'bg-green-100 text-green-700'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`
                      }
                    >
                      <link.icon size={20} />
                      <span>{link.name}</span>
                    </NavLink>
                  </li>
                ))}
                
                {/* === লগআউট বাটন (আলাদাভাবে) === */}
                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 p-3 rounded-md transition-all duration-300 font-medium w-full text-left
                               text-red-500 hover:bg-red-50 hover:text-red-700"
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </li>

              </ul>
            </nav>
          </aside>

          {/* ===== প্রধান কন্টেন্ট এরিয়া ===== */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            <div className="bg-white p-8 rounded-lg shadow-md min-h-[400px]">
              <Outlet />
            </div>
          </main>

        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;