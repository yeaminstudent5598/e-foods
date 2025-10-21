import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// shadcn/ui Components
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// ProductCard Component
import { ProductCard, itemVariants } from '../components/shared/ProductCard'; // Adjust path if needed
import { ListFilter, LayoutGrid, X } from 'lucide-react'; // Icons

// Demo Data (Same as Deals.jsx for now)
// TODO: Replace with actual fetching logic (e.g., TanStack Query)
const allProducts = [
  { id: 1, name: "কালোজিরা আচার", imageUrl: "https://efoodis.com/public/uploads/product/1756417513-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%9C%E0%A6%BF%E0%A6%B0%E0%A6%BE-%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%86%E0%A6%9A%E0%A6%BE%E0%A6%B0.jpg", oldPrice: 1250, newPrice: 890, discount: "29%", category: "Achar" },
  { id: 2, name: "ঝুড়ি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1754690259-juri.webp", oldPrice: 850, newPrice: 790, discount: "7%", category: "Pitha" },
  { id: 3, name: "রসুনের আচার", imageUrl: "https://efoodis.com/public/uploads/product/1754690259-juri.webp", oldPrice: 850, newPrice: 690, discount: "19%", category: "Achar" },
  { id: 4, name: "১ কিজিঃ ৪ পিঠা কম্বো", imageUrl: "https://efoodis.com/public/uploads/product/1758055563-combo-offer.jpg", oldPrice: 990, newPrice: 690, discount: "30%", category: "Pitha" },
  { id: 5, name: "ঝিনুক পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1756499233-jhinuk-pitha.jpg", oldPrice: 850, newPrice: 590, discount: "31%", category: "Pitha" },
  { id: 6, name: "নকশি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1756499233-jhinuk-pitha.jpg", oldPrice: 850, newPrice: 590, discount: "31%", category: "Pitha" },
  { id: 7, name: "১.৫ লিটার ৪ স্পেশাল কম্বো", imageUrl: "https://efoodis.com/public/uploads/product/1758059095-combo-web-efoodis.jpg", oldPrice: 1800, newPrice: 1250, discount: "31%", category: "Oil" },
  { id: 8, name: "নকশি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1756500696-n.jpg", oldPrice: 850, newPrice: 690, discount: "19%", category: "Pitha" },
  { id: 9, name: "গোজাপ ফুল পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1754854824-gulap-ful-pitha.webp", oldPrice: 750, newPrice: 590, discount: "21%", category: "Pitha" },
  { id: 10, name: "গোজাপ ফুল পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1754854824-gulap-ful-pitha.webp", oldPrice: 850, newPrice: 690, discount: "19%", category: "Pitha" },
  { id: 11, name: "ছোট নকশি পিঠা", imageUrl: "https://efoodis.com/public/uploads/product/1758020593-suta-nokshi-pitha.png", oldPrice: 850, newPrice: 690, discount: "19%", category: "Pitha" },
  { id: 12, name: "অর্গানিক সরিষার তেল", imageUrl: "https://efoodis.com/public/uploads/category/1736429963-organic.webp", oldPrice: 500, newPrice: 450, discount: "10%", category: "Oil" },
];

const categories = ["Pitha", "Achar", "Nuts & Dates", "Organic Spices", "Oil", "Super Foods", "Sweeteners & Dairy"]; // Added missing categories

// Grid Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    }
  }
};

const ProductsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]); // Price range state

  // TODO: Implement actual filtering logic using state for selectedCategories, sortOrder, and priceRange
  const [filteredProducts, setFilteredProducts] = useState(allProducts); 

  return (
    <section className="py-12 bg-gray-50 min-h-screen"> {/* Added min-h-screen */}
      <div className="container mx-auto px-4">
        
        {/* Page Title and Sort Dropdown */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">সকল পণ্য</h1>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            {/* Sort Dropdown */}
            <Select onValueChange={(value) => console.log("Sort by:", value)}> {/* TODO: Add sort logic */}
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Sort by: Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Sort by: Default</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="latest">Latest Products</SelectItem>
              </SelectContent>
            </Select>

            {/* Mobile Filter Button */}
            <Button 
              variant="outline" 
              className="md:hidden flex-shrink-0" // Added flex-shrink-0
              onClick={() => setIsSidebarOpen(true)}
            >
              <ListFilter size={20} className="mr-2 md:mr-0" /> <span className="hidden sm:inline">Filter</span>
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* ===== Filter Sidebar (Desktop) ===== */}
          <aside className="w-full md:w-1/4 lg:w-1/5 hidden md:block bg-white p-6 rounded-lg shadow-sm h-fit sticky top-24"> {/* Added sticky */}
            <FilterSidebar priceRange={priceRange} setPriceRange={setPriceRange} />
          </aside>
          
          {/* ===== Mobile Filter Sidebar (Overlay & Sheet) ===== */}
          <AnimatePresence>
            {isSidebarOpen && (
              <>
                {/* Overlay */}
                <motion.div 
                  className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsSidebarOpen(false)}
                />
                {/* Sidebar using motion.aside */}
                <motion.aside 
                  className="fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white p-6 z-50 overflow-y-auto md:hidden shadow-xl"
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
                >
                  <div className="flex justify-between items-center mb-6 border-b pb-4">
                    <h3 className="text-xl font-semibold">Filters</h3>
                    <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)}>
                      <X size={24} />
                    </Button>
                  </div>
                  <FilterSidebar priceRange={priceRange} setPriceRange={setPriceRange} />
                </motion.aside>
              </>
            )}
          </AnimatePresence>
          
          {/* ===== Product Grid ===== */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            {/* Show message if no products match filters */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                <LayoutGrid size={48} className="mx-auto mb-4"/>
                <p className="text-xl">No products found matching your filters.</p>
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                layout // Important for smooth filtering animations
              >
                {/* Map over filtered products */}
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
};

// Reusable Filter Sidebar Component
const FilterSidebar = ({ priceRange, setPriceRange }) => (
  <div className="space-y-6">
    {/* Category Filter */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Categories</h3>
      <div className="space-y-3 max-h-60 overflow-y-auto pr-2"> {/* Added scroll for many categories */}
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-3"> {/* Increased spacing */}
            <Checkbox id={category} onCheckedChange={(checked) => console.log(category, checked)} /> {/* TODO: Add category filter logic */}
            <label
              htmlFor={category}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>

    <Separator />

    {/* Price Range Filter */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Price Range</h3>
      <Slider
        defaultValue={[0, 2000]} // Initial default value
        value={priceRange} // Controlled component
        max={5000} // Max price
        step={100} // Step interval
        onValueChange={setPriceRange} // Update state on change
        className="my-4" // Added margin
      />
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>৳ {priceRange[0]}</span>
        <span>৳ {priceRange[1]}</span>
      </div>
    </div>

    <Separator />

    <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => console.log("Applying filters...")}> {/* TODO: Add apply filter logic */}
      Apply Filters
    </Button>
  </div>
);

export default ProductsPage;