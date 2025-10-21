import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Eye, Truck, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// ডেমো অর্ডার ডেটা (অপরিবর্তিত)
const demoOrders = [
  { id: "#EFOODS-1052", date: "October 20, 2025", customer: "সাদিয়া ইসলাম", total: 1480.00, status: "Delivered" },
  { id: "#EFOODS-1051", date: "October 20, 2025", customer: "আরিফুর রহমান", total: 890.00, status: "Processing" },
  { id: "#EFOODS-1050", date: "October 19, 2025", customer: "নাসরিন সুলতানা", total: 590.00, status: "Pending" },
  { id: "#EFOODS-1049", date: "October 18, 2025", customer: "কামাল আহমেদ", total: 1250.00, status: "Cancelled" },
];

// স্ট্যাটাস অনুযায়ী ব্যাজের স্টাইল (অপরিবর্তিত)
const getStatusBadge = (status) => {
  switch (status) {
    case 'Delivered': return <Badge className="bg-green-100 text-green-700">{status}</Badge>;
    case 'Processing': return <Badge className="bg-blue-100 text-blue-700">{status}</Badge>;
    case 'Pending': return <Badge className="bg-yellow-100 text-yellow-700">{status}</Badge>;
    case 'Cancelled': return <Badge variant="destructive">{status}</Badge>;
    default: return <Badge variant="secondary">{status}</Badge>;
  }
};

const ManageOrdersPage = () => {
  const [orders, setOrders] = useState(demoOrders);

  const handleUpdateStatus = (orderId, newStatus) => {
    console.log(`Updating order ${orderId} to ${newStatus}`);
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Manage Orders</h2>
      </div>

      <div className="border rounded-lg overflow-hidden bg-white">
        <Table>
          <TableCaption className="py-4">A list of all customer orders.</TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="font-semibold">Order ID</TableHead>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="font-semibold">Customer</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold text-right">Total</TableHead>
              <TableHead className="font-semibold text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{getStatusBadge(order.status)}</TableCell>
                <TableCell className="text-right">৳ {order.total.toFixed(2)}</TableCell>
                <TableCell className="text-center">
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem asChild>

                        {/* =========================================== */}
                        {/* !!! এই লাইনেই পরিবর্তন করা হয়েছে !!! */}
                        {/* =========================================== */}
                        <Link to={`/admin/orders/${encodeURIComponent(order.id)}`}>
                        {/* =========================================== */}

                          <Eye className="mr-2 h-4 w-4" /> View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleUpdateStatus(order.id, 'Processing')}>
                        <Truck className="mr-2 h-4 w-4 text-blue-500" /> Mark as Processing
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(order.id, 'Delivered')}>
                        <Truck className="mr-2 h-4 w-4 text-green-500" /> Mark as Delivered
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleUpdateStatus(order.id, 'Cancelled')} className="text-red-500">
                        <XCircle className="mr-2 h-4 w-4" /> Cancel Order
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageOrdersPage;