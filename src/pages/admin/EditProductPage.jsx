import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // URL থেকে ID এবং ফেরত যাওয়ার জন্য
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // নতুন
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // নতুন
import { ArrowLeft, Save, Upload } from 'lucide-react';

// একটি ডেমো প্রোডাক্ট। বাস্তবে আপনি ID দিয়ে API থেকে fetch করবেন।
const demoProduct = {
  id: 1, 
  name: "কালোজিরা আচার", 
  description: "সম্পূর্ণ ঘরোয়া পরিবেশে, নিজস্ব তত্ত্বাবধানে বাছাইকৃত সেরা মানের কালোজিরা, রসুন, সরিষার তেল এবং অন্যান্য মশলা দিয়ে তৈরি। স্বাদে ও মানে অতুলনীয়।",
  price: 890, 
  stock: 50, 
  status: "Active",
  category: "Achar",
  imageUrl: "https://efoodis.com/public/uploads/product/1756417513-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%9C%E0%A6%BF%E0%A6%B0%E0%A6%BE-%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%86%E0%A6%9A%E0%A6%BE%E0%A6%B0.jpg"
};

const EditProductPage = () => {
  const { id } = useParams(); // URL থেকে '1' আইডিটি পাবে
  const navigate = useNavigate(); // প্রোডাক্ট লিস্টে ফেরত যাওয়ার জন্য

  // ফর্মের স্টেট। শুরুতে ডেমো ডেটা দিয়ে পূর্ণ করা হলো।
  const [productData, setProductData] = useState(demoProduct);

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে API কল করে প্রোডাক্ট আপডেট করার কোড থাকবে
    console.log("Updating product:", id, productData);
    alert("Product Updated Successfully!");
    navigate('/admin/products'); // আপডেট শেষে প্রোডাক্ট লিস্টে ফেরত যাবে
  };

  // ফর্মের ইনপুট হ্যান্ডল করার জন্য
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {/* হেডার: টাইটেল ও ব্যাক বাটন */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Edit Product
          </h2>
          <p className="text-gray-600">
            Updating Product ID: <span className="font-medium text-black">#EFOODS-{id}</span>
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate(-1)}> {/* -1 মানে আগের পেজে যাও */}
          <ArrowLeft size={16} className="mr-2" /> Back to Products
        </Button>
      </div>

      {/* এডিট ফর্ম */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* কলাম ১: প্রোডাক্ট ডিটেইলস */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" name="name" value={productData.name} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" value={productData.description} onChange={handleChange} rows={6} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pricing & Inventory</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Price (৳)</Label>
                  <Input id="price" name="price" type="number" value={productData.price} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input id="stock" name="stock" type="number" value={productData.stock} onChange={handleChange} />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* কলাম ২: স্ট্যাটাস, ক্যাটাগরি ও ছবি */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Organization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select 
                    value={productData.category}
                    onValueChange={(value) => setProductData(prev => ({ ...prev, category: value }))}
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Achar">Achar</SelectItem>
                      <SelectItem value="Pitha">Pitha</SelectItem>
                      <SelectItem value="Oil">Oil</SelectItem>
                      <SelectItem value="Nuts & Dates">Nuts & Dates</SelectItem>
                      {/* অন্যান্য ক্যাটাগরি যোগ করুন */}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select 
                    value={productData.status}
                    onValueChange={(value) => setProductData(prev => ({ ...prev, status: value }))}
                  >
                    <SelectTrigger id="status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                      <SelectItem value="Archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Image</CardTitle>
              </CardHeader>
              <CardContent>
                <img src={productData.imageUrl} alt={productData.name} className="w-full h-auto rounded-md mb-4 border" />
                <Button variant="outline" className="w-full">
                  <Upload size={16} className="mr-2" /> Change Image
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* সেভ বাটন */}
        <div className="mt-8 flex justify-end">
          <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700">
            <Save size={18} className="mr-2" /> Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;