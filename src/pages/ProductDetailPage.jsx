// src/pages/ProductDetailPage.jsx

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // <-- Tabs Import
import { Star, Minus, Plus, ShoppingCart, CheckCircle, Truck } from 'lucide-react';

// === Shared ProductCard Import ===
import { ProductCard } from '@/components/shared/ProductCard'; // <-- Import ProductCard

// === ডেমো ডেটা ফাংশন (বাস্তবে API কল হবে) ===
const productData = [
  // ... (আপনার আগের productData অ্যারে এখানে পেস্ট করুন) ...
  { id: 1, name: "কালোজিরা আচার", imageUrl: "https://efoodis.com/public/uploads/product/1756417513-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%9C%E0%A6%BF%E0%A6%B0%E0%A6%BE-%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%86%E0%A6%9A%E0%A6%BE%E0%A6%B0.jpg", oldPrice: 1250, newPrice: 890, discount: "29%", description: "সম্পূর্ণ ঘরোয়া পরিবেশে, নিজস্ব তত্ত্বাবধানে বাছাইকৃত সেরা মানের কালোজিরা, রসুন, সরিষার তেল এবং অন্যান্য মশলা দিয়ে তৈরি। স্বাদে ও মানে অতুলনীয়।", rating: 4.5, reviews: 15, stock: 50, category: "Achar", weight: "500gm", ingredients: ["কালোজিরা", "রসুন", "সরিষার তেল", "মশলা"] },
  { id: 2, name: "ঝুড়ি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1754690259-juri.webp", oldPrice: 850, newPrice: 790, discount: "7%", description: "চালের গুঁড়া দিয়ে তৈরি ঐতিহ্যবাহী মুচমুচে মজাদার ঝুড়ি পিঠা। বিকেলের নাস্তায় চায়ের সাথে অসাধারণ।", rating: 4.8, reviews: 22, stock: 30, category: "Pitha", weight: "1kg", ingredients: ["চালের গুঁড়া", "চিনি", "তেল"] },
  { id: 3, name: "রসুনের আচার", imageUrl: "https://efoodis.com/public/uploads/product/1754690259-juri.webp", oldPrice: 850, newPrice: 690, discount: "19%", description: "রসুনের কোয়া দিয়ে তৈরি টক-ঝাল-মিষ্টি স্বাদের আচার।", rating: 4.7, reviews: 12, stock: 40, category: "Achar", weight: "400gm", ingredients: ["রসুন", "সরিষার তেল", "ভিনেগার", "মশলা"] },
  // ... Add other products with description, rating, reviews, stock, category, weight, ingredients
  { id: 5, name: "ঝিনুক পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1756499233-jhinuk-pitha.jpg", oldPrice: 850, newPrice: 590, discount: "31%", description: "চিনির সিরায় ডোবানো মজাদার ঝিনুক পিঠা। দেখতে যেমন সুন্দর, খেতেও তেমন মজা।", rating: 4.6, reviews: 18, stock: 0, category: "Pitha", weight: "1kg", ingredients: ["ময়দা", "চিনি", "তেল", "এলাচ"] },
];

const getProductById = (id) => {
  return productData.find(p => p.id === Number(id));
};
// ===========================================

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center min-h-[70vh]">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Product Not Found!</h2>
        <p className="text-gray-600 mb-8 text-lg">Sorry, we couldn't find the product you're looking for.</p>
        <Button asChild size="lg"><Link to="/products">Back to Shop</Link></Button>
      </div>
    );
  }

  // === Related Products Filter ===
  const relatedProducts = productData.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4); // Show max 4 related products

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of ${product.name} (ID: ${productId}) to cart.`);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* ===== Product Top Section ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start mb-16">
          
          {/* --- Image Gallery --- */}
          <div className="sticky top-24"> {/* Make image sticky */}
            {/* Main Image */}
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-lg border mb-4"
            />
            {/* Thumbnail Images (Placeholder) */}
            <div className="flex gap-2 justify-center">
              {/* Add more images if available */}
              <img src={product.imageUrl} alt="thumbnail" className="w-16 h-16 object-cover rounded border-2 border-green-500 cursor-pointer" />
              {/* Example placeholders */}
              <img src={product.imageUrl} alt="thumbnail" className="w-16 h-16 object-cover rounded border cursor-pointer opacity-60 hover:opacity-100" />
              <img src={product.imageUrl} alt="thumbnail" className="w-16 h-16 object-cover rounded border cursor-pointer opacity-60 hover:opacity-100" /> 
            </div>
          </div>

          {/* --- Product Details --- */}
          <div className="space-y-5"> {/* Adjusted spacing */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1.5} />
                ))}
              </div>
              <span className="text-gray-600 text-sm">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-green-700">৳ {product.newPrice}</span> {/* Changed price color */}
              <span className="text-xl text-gray-400 line-through">৳ {product.oldPrice}</span>
              <Badge variant="destructive" className="text-sm px-2 py-0.5">-{product.discount}</Badge> {/* Adjusted badge size */}
            </div>
            <div>
              {product.stock > 0 ? (
                <Badge className="bg-green-100 text-green-700 border border-green-200">In Stock ({product.stock} units)</Badge>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>
            
            {/* Short Description */}
            <p className="text-gray-700 leading-relaxed text-base pt-2">{product.description.substring(0, 150)}{product.description.length > 150 ? "..." : ""}</p> 

            <Separator className="my-6" />

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex items-center border rounded-md h-12"> {/* Fixed height */}
                <Button variant="ghost" size="icon" onClick={decreaseQuantity} className="rounded-r-none h-full"> <Minus size={16} /> </Button>
                <Input type="number" value={quantity} readOnly className="w-16 h-full text-center border-y-0 rounded-none focus-visible:ring-0 text-lg font-semibold" />
                <Button variant="ghost" size="icon" onClick={increaseQuantity} className="rounded-l-none h-full"> <Plus size={16} /> </Button>
              </div>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 flex-grow h-12 text-base" // Fixed height
                onClick={handleAddToCart}
                disabled={product.stock === 0 || addedToCart}
              >
                {addedToCart ? (
                  <> <CheckCircle size={20} className="mr-2" /> Added </>
                ) : (
                  <> <ShoppingCart size={20} className="mr-2" /> Add to Cart </>
                )}
              </Button>
            </div>
            
             {/* Delivery Info (Example) */}
            <div className="flex items-center gap-2 text-sm text-gray-500 pt-4">
              <Truck size={18} className="text-green-600"/>
              <span>ঢাকার ভিতরে ২৪-৪৮ ঘণ্টা, ঢাকার বাইরে ৩-৫ দিনে ডেলিভারি।</span>
            </div>

            <div className="text-sm text-gray-500 pt-2">
              Category: <Link to={`/category/${product.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-blue-600 hover:underline">{product.category}</Link>
            </div>
          </div>
        </div>

        {/* ===== Product Tabs Section ===== */}
        <Tabs defaultValue="description" className="w-full mt-16">
          <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex mb-6">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="prose max-w-none text-gray-700 leading-relaxed"> {/* Added prose for typography */}
            <p>{product.description}</p>
            {/* Add more detailed description here */}
            <p>আমাদের সকল পণ্য সরাসরি গ্রাম থেকে সংগ্রহ করা এবং সম্পূর্ণ স্বাস্থ্যসম্মত উপায়ে প্রস্তুতকৃত।</p>
          </TabsContent>
          
          <TabsContent value="specifications" className="text-gray-700">
            <h3 className="text-lg font-semibold mb-4">Product Specifications</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Weight:</strong> {product.weight || 'N/A'}</li>
              <li><strong>Main Ingredients:</strong> {product.ingredients ? product.ingredients.join(', ') : 'N/A'}</li>
              <li><strong>Origin:</strong> Bangladesh</li>
              <li><strong>Shelf Life:</strong> Please check packaging</li>
            </ul>
          </TabsContent>

          <TabsContent value="reviews" className="text-gray-700">
             <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
             {/* TODO: Add actual review display logic */}
             <div className="border rounded-md p-4 mb-4">
               <div className="flex items-center mb-1">
                 <div className="flex text-yellow-500 mr-2">
                   <Star size={16} fill="currentColor"/> <Star size={16} fill="currentColor"/> <Star size={16} fill="currentColor"/> <Star size={16} fill="currentColor"/> <Star size={16}/>
                 </div>
                 <span className="font-semibold">ভালো মানের আচার</span>
               </div>
               <p className="text-sm text-gray-600 mb-2">by Customer Name - October 21, 2025</p>
               <p className="text-sm">খুবই সুস্বাদু, বাড়ির বানানো আচারের মতো।</p>
             </div>
              <p>More reviews coming soon...</p>
          </TabsContent>
        </Tabs>

        {/* ===== Related Products Section ===== */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-10 border-t">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default ProductDetailPage;