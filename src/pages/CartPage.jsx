import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react'; // আইকন

// ডেমো ডেটা - এই ডেটা আপনি আপনার গ্লোবাল স্টেট/컨টেক্সট থেকে পাবেন
const demoCartItems = [
  {
    id: 1, 
    name: "কালোজিরা আচার", 
    imageUrl: "https://efoodis.com/public/uploads/product/1756417513-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%9C%E0%A6%BF%E0%A6%B0%E0%A6%BE-%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%86%E0%A6%9A%E0%A6%BE%E0%A6%B0.jpg", 
    price: 890, 
    quantity: 1
  },
  { 
    id: 5, 
    name: "ঝিনুক পিঠা", 
    imageUrl: "https://efoodis.com/public/uploads/product/1756499233-jhinuk-pitha.jpg", 
    price: 590, 
    quantity: 2
  },
];


const CartPage = () => {
  // === ডেমো State ===
  // শুরুতে কার্টে আইটেম থাকবে। খালি কার্ট দেখতে [] করে দিন।
  const [cartItems, setCartItems] = useState(demoCartItems); 

  // === হিসাবনিকাশ ===
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 50; // ডেমো শিপিং ফি
  const total = subtotal + shipping;

  // একটি আইটেম রিমুভ করার ডেমো ফাংশন
  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // === খালি কার্ট ভিউ ===
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24 text-center min-h-[70vh] flex flex-col justify-center items-center">
        <ShoppingBag size={80} className="text-gray-300 mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
          <Link to="/products">
            Shop Now <ArrowRight size={20} className="ml-2" />
          </Link>
        </Button>
      </div>
    );
  }

  // === dolu কার্ট ভিউ ===
  return (
    <section className="py-16 bg-gray-50 min-h-[80vh]">
      <div className="container mx-auto px-4">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Your Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* ===== কলাম ১: কার্ট আইটেম লিস্ট ===== */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-6">Items ({cartItems.length})</h2>
            
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  {/* প্রোডাক্ট ইনফো */}
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="w-20 h-20 rounded-md object-cover border"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">Price: ৳ {item.price}</p>
                    </div>
                  </div>

                  {/* পরিমাণ ও রিমুভ বাটন */}
                  <div className="flex items-center gap-4 w-full sm:w-auto justify-between">
                    <Input 
                      type="number" 
                      defaultValue={item.quantity} 
                      min="1"
                      className="w-20 text-center"
                      aria-label="Quantity"
                    />
                    <p className="font-semibold w-24 text-right">
                      ৳ {item.price * item.quantity}
                    </p>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="text-red-500 hover:text-red-600"
                      onClick={() => handleRemove(item.id)}
                    >
                      <Trash2 size={20} />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ===== কলাম ২: অর্ডার সামারি ===== */}
          <div className="lg:col-span-1 h-fit bg-white p-6 rounded-lg shadow-md border">
            <h2 className="text-xl font-semibold mb-6 border-b pb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium">৳ {subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping Fee</span>
                <span className="font-medium">৳ {shipping}</span>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>৳ {total}</span>
              </div>

              <Button asChild size="lg" className="w-full bg-green-600 hover:bg-green-700 text-base mt-6">
                <Link to="/checkout"> {/* TODO: Checkout পেজ বানাতে হবে */}
                  Proceed to Checkout <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CartPage;