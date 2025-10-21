import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts'; // recharts থেকে ইম্পোর্ট

// গত ৬ মাসের বিক্রির ডেমো ডেটা
const salesData = [
  { name: 'May', revenue: 40000 },
  { name: 'June', revenue: 30000 },
  { name: 'July', revenue: 52000 },
  { name: 'Aug', revenue: 48000 },
  { name: 'Sep', revenue: 61000 },
  { name: 'Oct', revenue: 75000 },
];

// টপ সেলিং পণ্যের ডেমো ডেটা
const topProductsData = [
  { name: 'কালোজিরা আচার', sold: 120 },
  { name: 'ঝিনুক পিঠা', sold: 98 },
  { name: '১.৫ লিটার কম্বো', sold: 75 },
  { name: 'গোজাপ ফুল পিঠা', sold: 60 },
  { name: 'রসুনের আচার', sold: 45 },
];


const AnalyticsPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Sales & Product Analytics
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* ===== চার্ট ১: রেভিনিউ লাইন চার্ট ===== */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview (Last 6 Months)</CardTitle>
            <CardDescription>Sales performance over time.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* ResponsiveContainer চার্টকে রেসপন্সিভ করে */}
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="৳" />
                <Tooltip formatter={(value) => `৳ ${value}`} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#16a34a" // সবুজ কালার 
                  strokeWidth={2} 
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* ===== চার্ট ২: টপ প্রোডাক্ট বার চার্ট ===== */}
        <Card>
          <CardHeader>
            <CardTitle>Top Selling Products</CardTitle>
            <CardDescription>Quantity sold for top 5 products.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={topProductsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="sold" 
                  fill="#16a34a" // সবুজ কালার
                  activeBar={<Rectangle fill="#14532d" />} 
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default AnalyticsPage;