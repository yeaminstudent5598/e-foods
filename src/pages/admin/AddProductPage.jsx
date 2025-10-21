import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { ArrowLeft, Save, Upload, Image as ImageIcon } from 'lucide-react';

// খালি প্রোডাক্ট স্টেট
const initialProductState = {
  name: '',
  description: '',
  price: '',
  stock: '',
  category: '',
  status: 'Active', // ডিফল্ট স্ট্যাটাস
  imageUrl: '', // ছবি আপলোডের পর URL এখানে বসবে (বাস্তবে)
};

const AddProductPage = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState(initialProductState);
  const [imagePreview, setImagePreview] = useState(null); // ছবি প্রিভিউয়ের জন্য

  // ফর্ম সাবমিট হ্যান্ডলার
  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে API কল করে নতুন প্রোডাক্ট যোগ করার কোড থাকবে
    console.log("Adding new product:", productData);
    alert("New Product Added Successfully!");
    navigate('/admin/products'); // অ্যাড শেষে প্রোডাক্ট লিস্টে ফেরত যাবে
  };

  // ফর্মের ইনপুট হ্যান্ডল করার জন্য
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };

  // ছবি আপলোড হ্যান্ডলার (ডেমো)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // এখানে ছবি আপলোড করার লজিক থাকবে (API তে পাঠানো)
      console.log("Image selected:", file.name);
      // প্রিভিউ দেখানোর জন্য
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        // আপলোড সফল হলে productData তে imageUrl সেট করতে হবে
        // setProductData(prev => ({ ...prev, imageUrl: 'uploaded_image_url' }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      {/* হেডার: টাইটেল ও ব্যাক বাটন */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Add New Product
          </h2>
          <p className="text-gray-600">
            Enter the details for the new product.
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} className="mr-2" /> Back to Products
        </Button>
      </div>

      {/* অ্যাড ফর্ম */}
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
                  <Input id="name" name="name" value={productData.name} onChange={handleChange} required />
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
                  <Input id="price" name="price" type="number" value={productData.price} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input id="stock" name="stock" type="number" value={productData.stock} onChange={handleChange} required />
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
                    required
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Achar">Achar</SelectItem>
                      <SelectItem value="Pitha">Pitha</SelectItem>
                      <SelectItem value="Oil">Oil</SelectItem>
                      <SelectItem value="Nuts & Dates">Nuts & Dates</SelectItem>
                      <SelectItem value="Organic Spices">Organic Spices</SelectItem>
                      <SelectItem value="Rice, Pulse">Rice, Pulse</SelectItem>
                      <SelectItem value="Super Foods">Super Foods</SelectItem>
                      <SelectItem value="Sweeteners & Dairy">Sweeteners & Dairy</SelectItem>
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
                      <SelectItem value="Draft">Draft</SelectItem>
                      <SelectItem value="Archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Image</CardTitle>
                <CardDescription>Upload the main product image.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center space-y-4">
                {/* ছবি প্রিভিউ */}
                <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center bg-gray-50">
                  {imagePreview ? (
                    <img src={imagePreview} alt="Product preview" className="max-h-full max-w-full object-contain" />
                  ) : (
                    <div className="text-center text-gray-500">
                      <ImageIcon size={40} className="mx-auto mb-2" />
                      <p>Image Preview</p>
                    </div>
                  )}
                </div>
                {/* আপলোড বাটন */}
                <Input 
                  id="picture" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  className="hidden" // আসল ইনপুট হাইড করা
                />
                <Label 
                  htmlFor="picture" 
                  className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                >
                  <Upload size={16} className="mr-2" /> Upload Image
                </Label>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* সেভ বাটন */}
        <div className="mt-8 flex justify-end">
          <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700">
            <Save size={18} className="mr-2" /> Add Product
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddProductPage;