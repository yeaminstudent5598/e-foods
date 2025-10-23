// src/pages/ProductDetailPage.jsx

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Minus, Plus, ShoppingCart, CheckCircle, Truck } from 'lucide-react';
import { ProductCard } from '@/components/shared/ProductCard'; // নিশ্চিত করুন পাথ ঠিক আছে

// === ডেমো ডেটা (অপরিবর্তিত) ===
const productData = [
  { id: 1, name: "কালোজিরা আচার", imageUrl: "https://efoodis.com/public/uploads/product/1756417513-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%9C%E0%A6%BF%E0%A6%B0%E0%A6%BE-%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%86%E0%A6%9A%E0%A6%BE%E0%A6%B0.jpg", oldPrice: 1250, newPrice: 890, discount: "29%", description: "সম্পূর্ণ ঘরোয়া পরিবেশে, নিজস্ব তত্ত্বাবধানে বাছাইকৃত সেরা মানের কালোজিরা, রসুন, সরিষার তেল এবং অন্যান্য মশলা দিয়ে তৈরি। স্বাদে ও মানে অতুলনীয়।", rating: 4.5, reviews: 15, stock: 50, category: "Achar", weight: "500gm", ingredients: ["কালোজিরা", "রসুন", "সরিষার তেল", "মশলা"] },
  { id: 2, name: "ঝুড়ি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1754690259-juri.webp", oldPrice: 850, newPrice: 790, discount: "7%", description: "চালের গুঁড়া দিয়ে তৈরি ঐতিহ্যবাহী মুচমুচে মজাদার ঝুড়ি পিঠা। বিকেলের নাস্তায় চায়ের সাথে অসাধারণ।", rating: 4.8, reviews: 22, stock: 30, category: "Pitha", weight: "1kg", ingredients: ["চালের গুঁড়া", "চিনি", "তেল"] },
  { id: 3, name: "রসুনের আচার", imageUrl: "https://efoodis.com/public/uploads/product/1754690259-juri.webp", oldPrice: 850, newPrice: 690, discount: "19%", description: "রসুনের কোয়া দিয়ে তৈরি টক-ঝাল-মিষ্টি স্বাদের আচার।", rating: 4.7, reviews: 12, stock: 40, category: "Achar", weight: "400gm", ingredients: ["রসুন", "সরিষার তেল", "ভিনেগার", "মশলা"] },
  { id: 5, name: "ঝিনুক পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1756499233-jhinuk-pitha.jpg", oldPrice: 850, newPrice: 590, discount: "31%", description: "চিনির সিরায় ডোবানো মজাদার ঝিনুক পিঠা। দেখতে যেমন সুন্দর, খেতেও তেমন মজা।", rating: 4.6, reviews: 18, stock: 0, category: "Pitha", weight: "1kg", ingredients: ["ময়দা", "চিনি", "তেল", "এলাচ"] },
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

  const relatedProducts = productData.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    console.log(`Adding ${quantity} of ${product.name} (ID: ${productId}) to cart.`);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    // === প্যাডিং সামান্য অ্যাডজাস্ট করা হয়েছে ===
    <section className="py-10 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* ===== Product Top Section ===== */}
        {/* === গ্যাপ অ্যাডজাস্ট করা হয়েছে === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12 md:mb-16">
          
          {/* --- Image Gallery --- */}
          <div className="sticky top-24">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-auto max-h-[450px] md:max-h-[500px] object-contain rounded-lg shadow-md border mb-4"
            />
            {/* === থাম্বনেইল সাইজ রেসপন্সিভ === */}
            <div className="flex gap-2 justify-center">
              <img src={product.imageUrl} alt="thumbnail" className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded border-2 border-green-500 cursor-pointer" />
              <img src={product.imageUrl} alt="thumbnail" className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded border cursor-pointer opacity-60 hover:opacity-100" />
              <img src={product.imageUrl} alt="thumbnail" className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded border cursor-pointer opacity-60 hover:opacity-100" /> 
            </div>
          </div>

          {/* --- Product Details --- */}
          {/* === স্পেসিং সামান্য অ্যাডজাস্ট === */}
          <div className="space-y-4 md:space-y-5"> 
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">{product.name}</h1>
            <div className="flex items-center gap-3"> {/* গ্যাপ সামান্য কমানো */}
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={1.5} />
                ))}
              </div>
              <span className="text-gray-600 text-xs sm:text-sm">({product.reviews} reviews)</span>
            </div>
            <div className="flex items-baseline gap-2"> {/* গ্যাপ সামান্য কমানো */}
              {/* === মূল্য সাইজ রেসপন্সিভ === */}
              <span className="text-2xl sm:text-3xl font-bold text-green-700">৳ {product.newPrice}</span> 
              <span className="text-lg sm:text-xl text-gray-400 line-through">৳ {product.oldPrice}</span>
              {/* === ব্যাজ সাইজ রেসপন্সিভ === */}
              <Badge variant="destructive" className="text-xs sm:text-sm px-2 py-0.5">-{product.discount}</Badge> 
            </div>
            <div>
              {product.stock > 0 ? (
                <Badge className="bg-green-100 text-green-700 border border-green-200 text-xs sm:text-sm">In Stock ({product.stock} units)</Badge>
              ) : (
                <Badge variant="destructive" className="text-xs sm:text-sm">Out of Stock</Badge>
              )}
            </div>
            
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base pt-2">{product.description.substring(0, 150)}{product.description.length > 150 ? "..." : ""}</p> 

            <Separator className="my-4 sm:my-6" />

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3"> {/* গ্যাপ কমানো */}
              {/* === উচ্চতা রেসপন্সিভ === */}
              <div className="flex items-center border rounded-md h-11 sm:h-12"> 
                <Button variant="ghost" size="icon" onClick={decreaseQuantity} className="rounded-r-none h-full"> <Minus size={16} /> </Button>
                <Input type="number" value={quantity} readOnly className="w-14 sm:w-16 h-full text-center border-y-0 rounded-none focus-visible:ring-0 text-base sm:text-lg font-semibold" />
                <Button variant="ghost" size="icon" onClick={increaseQuantity} className="rounded-l-none h-full"> <Plus size={16} /> </Button>
              </div>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 flex-grow h-11 sm:h-12 text-sm sm:text-base" // উচ্চতা ও ফন্ট সাইজ
                onClick={handleAddToCart}
                disabled={product.stock === 0 || addedToCart}
              >
                {addedToCart ? (
                  <> <CheckCircle size={18} className="mr-2" /> Added </>
                ) : (
                  <> <ShoppingCart size={18} className="mr-2" /> Add to Cart </>
                )}
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 pt-3"> {/* প্যাডিং কমানো */}
              <Truck size={16} className="text-green-600"/>
              <span>ঢাকার ভিতরে ২৪-৪৮ ঘণ্টা, ঢাকার বাইরে ৩-৫ দিনে ডেলিভারি।</span>
            </div>

            <div className="text-xs sm:text-sm text-gray-500 pt-1"> {/* প্যাডিং কমানো */}
              Category: <Link to={`/category/${product.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="text-blue-600 hover:underline">{product.category}</Link>
            </div>
          </div>
        </div>

        {/* ===== Product Tabs Section ===== */}
        {/* === উপরের মার্জিন কমানো === */}
        <Tabs defaultValue="description" className="w-full mt-10 md:mt-16"> 
          {/* === নিচের মার্জিন রেসপন্সিভ === */}
          <TabsList className="grid w-full grid-cols-3 md:w-auto md:inline-flex mb-4 sm:mb-6"> 
            <TabsTrigger value="description" className="text-xs sm:text-sm">Description</TabsTrigger>
            <TabsTrigger value="specifications" className="text-xs sm:text-sm">Specifications</TabsTrigger>
            <TabsTrigger value="reviews" className="text-xs sm:text-sm">Reviews ({product.reviews})</TabsTrigger>
          </TabsList>
          
          {/* === কন্টেন্টের ফন্ট সাইজ ঠিক করা === */}
          <TabsContent value="description" className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed"> 
            <p>{product.description}</p>
            <p>আমাদের সকল পণ্য সরাসরি গ্রাম থেকে সংগ্রহ করা এবং সম্পূর্ণ স্বাস্থ্যসম্মত উপায়ে প্রস্তুতকৃত।</p>
          </TabsContent>
          
          <TabsContent value="specifications" className="text-gray-700 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-semibold mb-3">Product Specifications</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Weight:</strong> {product.weight || 'N/A'}</li>
              <li><strong>Main Ingredients:</strong> {product.ingredients ? product.ingredients.join(', ') : 'N/A'}</li>
              <li><strong>Origin:</strong> Bangladesh</li>
              <li><strong>Shelf Life:</strong> Please check packaging</li>
            </ul>
          </TabsContent>

          <TabsContent value="reviews" className="text-gray-700 text-sm sm:text-base">
             <h3 className="text-base sm:text-lg font-semibold mb-3">Customer Reviews</h3>
             <div className="border rounded-md p-3 sm:p-4 mb-3 sm:mb-4">
               <div className="flex items-center mb-1">
                 <div className="flex text-yellow-500 mr-2">
                   <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14} fill="currentColor"/> <Star size={14}/>
                 </div>
                 <span className="font-semibold text-sm sm:text-base">ভালো মানের আচার</span>
               </div>
               <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">by Customer Name - October 21, 2025</p>
               <p className="text-xs sm:text-sm">খুবই সুস্বাদু, বাড়ির বানানো আচারের মতো।</p>
             </div>
              <p>More reviews coming soon...</p>
          </TabsContent>
        </Tabs>

        {/* ===== Related Products Section ===== */}
        {relatedProducts.length > 0 && (
          // === উপরের মার্জিন রেসপন্সিভ ===
          <div className="mt-16 md:mt-20 pt-8 md:pt-10 border-t"> 
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
              Related Products
            </h2>
            {/* === গ্যাপ রেসপন্সিভ === */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"> 
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