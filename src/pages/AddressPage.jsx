import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Home, MapPin } from 'lucide-react'; // আইকন

// ডেমো ডেটা
const demoAddresses = [
  {
    id: 1,
    type: "Home",
    isDefault: true,
    name: "Yeamin Student",
    phone: "+8801641801705",
    address: "House 123, Road 4, Block B, Basundhara R/A, Dhaka-1229"
  },
  {
    id: 2,
    type: "Office",
    isDefault: false,
    name: "Yeamin Student",
    phone: "+8801641801705",
    address: "Level 5, ABC Tower, Gulshan 1, Dhaka-1212"
  }
];

// একটি সিঙ্গেল এড্রেস কার্ড
const AddressCard = ({ address, onRemove }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-6 relative">
      {/* ডিফল্ট ব্যাজ */}
      {address.isDefault && (
        <Badge className="absolute -top-3 -left-3 bg-green-100 text-green-700 border-green-200">
          Default
        </Badge>
      )}

      {/* কার্ড হেডার (টাইপ ও আইকন) */}
      <div className="flex items-center gap-2 mb-3">
        {address.type === "Home" ? <Home size={20} className="text-gray-600" /> : <MapPin size={20} className="text-gray-600" />}
        <h4 className="text-lg font-semibold text-gray-800">{address.type} Address</h4>
      </div>

      {/* এড্রেস ডিটেইলস */}
      <div className="space-y-1 text-gray-600">
        <p className="font-medium text-gray-700">{address.name}</p>
        <p>{address.phone}</p>
        <p>{address.address}</p>
      </div>

      {/* এডিট/ডিলিট বাটন */}
      <div className="mt-4 flex gap-2">
        <Button variant="outline" size="sm">
          <Edit size={16} className="mr-2" /> Edit
        </Button>
        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600" onClick={() => onRemove(address.id)}>
          <Trash2 size={16} className="mr-2" /> Delete
        </Button>
      </div>
    </div>
  );
};


const AddressPage = () => {
  // === ডেমো State ===
  // শুরুতে এড্রেস থাকবে। খালি পেজ দেখতে [] করে দিন।
  const [addresses, setAddresses] = useState(demoAddresses);

  // ডেমো রিমুভ ফাংশন
  const handleRemoveAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6 border-b pb-3">
        <h3 className="text-2xl font-semibold text-gray-800">
          My Addresses
        </h3>
        <Button className="bg-green-600 hover:bg-green-700">
          <Plus size={20} className="mr-2" /> Add New Address
        </Button>
      </div>

      {/* কন্টেন্ট */}
      {addresses.length === 0 ? (
        // === খালি এড্রেস ভিউ ===
        <div className="text-center text-gray-500 py-20">
          <MapPin size={48} className="mx-auto mb-4" />
          <p className="text-lg">You have no saved addresses.</p>
          <p>Click "Add New Address" to get started.</p>
        </div>
      ) : (
        // === এড্রেস লিস্ট ভিউ ===
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map(address => (
            <AddressCard 
              key={address.id} 
              address={address} 
              onRemove={handleRemoveAddress} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddressPage;