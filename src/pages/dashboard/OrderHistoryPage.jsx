import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // shadcn/ui Table
import { Badge } from "@/components/ui/badge"; // shadcn/ui Badge
import { Button } from "@/components/ui/button";
import { Eye, Archive } from 'lucide-react'; // আইকন

// ডেমো অর্ডার ডেটা
const demoOrders = [
  {
    id: "#EFOODS-1052",
    date: "October 20, 2025",
    status: "Delivered",
    total: 1480.00
  },
  {
    id: "#EFOODS-1045",
    date: "October 18, 2025",
    status: "Pending",
    total: 890.00
  },
  {
    id: "#EFOODS-1012",
    date: "September 30, 2025",
    status: "Cancelled",
    total: 590.00
  }
];

// স্ট্যাটাস অনুযায়ী ব্যাজের কালার
const getStatusBadge = (status) => {
  switch (status) {
    case 'Delivered':
      return <Badge className="bg-green-100 text-green-700">{status}</Badge>;
    case 'Pending':
      return <Badge className="bg-yellow-100 text-yellow-700">{status}</Badge>;
    case 'Cancelled':
      return <Badge variant="destructive">{status}</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const OrderHistoryPage = () => {
  // === ডেমো State ===
  // শুরুতে অর্ডার থাকবে। খালি পেজ দেখতে [] করে দিন।
  const [orders, setOrders] = useState(demoOrders);

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
        My Orders
      </h3>

      {/* কন্টেন্ট */}
      {orders.length === 0 ? (
        // === খালি অর্ডার ভিউ ===
        <div className="text-center text-gray-500 py-20">
          <Archive size={48} className="mx-auto mb-4" />
          <p className="text-lg">You have no orders yet.</p>
          <p>When you place an order, it will appear here.</p>
        </div>
      ) : (
        // === অর্ডার টেবিল ভিউ ===
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableCaption className="py-4">A list of your recent orders.</TableCaption>
            <TableHeader className="bg-gray-50">
              <TableRow>
                <TableHead className="font-semibold text-gray-700">Order ID</TableHead>
                <TableHead className="font-semibold text-gray-700">Date</TableHead>
                <TableHead className="font-semibold text-gray-700">Status</TableHead>
                <TableHead className="font-semibold text-gray-700 text-right">Total</TableHead>
                <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{getStatusBadge(order.status)}</TableCell>
                  <TableCell className="text-right">৳ {order.total.toFixed(2)}</TableCell>
                  <TableCell className="text-center">
                    <Button variant="outline" size="sm">
                      <Eye size={16} className="mr-2" /> View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;