// src/pages/CategoryPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  // লিঙ্ক থেকে ক্যাটাগরির নামটি পাওয়ার জন্য
  const { categorySlug } = useParams();

  return (
    <div className="container mx-auto py-20 text-center min-h-[60vh]">
      <h1 className="text-4xl font-bold capitalize">
        Category: {categorySlug.replace('-', ' ')}
      </h1>
      <p className="mt-4 text-lg">
        এই ক্যাটাগরির পণ্যগুলো এখানে দেখানো হবে...
      </p>
      {/* এখানে আপনি ProductsPage-এর মতো একটি গ্রিড দেখাতে পারেন */}
    </div>
  );
};

export default CategoryPage;