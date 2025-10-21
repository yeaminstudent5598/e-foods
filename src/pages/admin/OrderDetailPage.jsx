import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, User, MapPin, CreditCard, Printer } from 'lucide-react';

// একটি ডেমো অর্ডার। বাস্তবে আপনি ID দিয়ে API থেকে fetch করবেন।
const demoOrderDetails = {
  id: "#EFOODS-1052",
  date: "October 20, 2025",
  status: "Delivered",
  customer: {
    name: "সাদিয়া ইসলাম",
    email: "sadia@example.com",
    phone: "+8801712345678",
  },
  shippingAddress: {
    name: "সাদিয়া ইসলাম",
    address: "House 123, Road 4, Block B, Basundhara R/A",
    city: "Dhaka",
    zip: "1229"
  },
  payment: {
    method: "Cash on Delivery",
    status: "Paid"
  },
  items: [
    {
      id: 1, 
      name: "কালোজিরা আচার", 
      imageUrl: "https://efoodis.com/public/uploads/product/1756417513-%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%8B%E0%A6%9C%E0%A6%BF%E0%A6%B0%E0%A6%BE-%E0%A6%AE%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B8-%E0%A6%86%E0%A6%9A%E0%A6%BE%E0%A6%B0.jpg", 
      price: 890, 
      quantity: 1
    },
    { 
      id: 5, 
      name: "ঝিনুক পিঠা", 
      imageUrl: "https://efoodis.com/public/uploads/product/1756499233-jhinuk-pitha.jpg", 
      price: 590, 
      quantity: 1 // ডেমো ডেটা পরিবর্তন করা হয়েছে
    },
  ],
  subtotal: 1480.00,
  shipping: 50.00,
  total: 1530.00 // মোট ঠিক করা হয়েছে
};

// স্ট্যাটাস ব্যাজ
const getStatusBadge = (status) => {
  switch (status) {
    case 'Delivered': return <Badge className="bg-green-100 text-green-700">{status}</Badge>;
    case 'Processing': return <Badge className="bg-blue-100 text-blue-700">{status}</Badge>;
    case 'Pending': return <Badge className="bg-yellow-100 text-yellow-700">{status}</Badge>;
    case 'Cancelled': return <Badge variant="destructive">{status}</Badge>;
    default: return <Badge variant="secondary">{status}</Badge>;
  }
};

const OrderDetailPage = () => {
  const { orderId } = useParams(); // URL থেকে ID পাবে
  const navigate = useNavigate();
  
  // TODO: এখানে orderId দিয়ে API থেকে আসল ডেটা fetch করতে হবে
  const order = demoOrderDetails; 

  return (
    <div>
      {/* হেডার: টাইটেল, ব্যাক বাটন ও প্রিন্ট বাটন */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Order Details
          </h2>
          <p className="text-gray-600">
            Order ID: <span className="font-medium text-black">{order.id}</span>
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate(-1)}>
            <ArrowLeft size={16} className="mr-2" /> Back to Orders
          </Button>
          <Button variant="outline" onClick={() => window.print()}>
            <Printer size={16} className="mr-2" /> Print Invoice
          </Button>
        </div>
      </div>

      {/* অর্ডার স্ট্যাটাস ও তারিখ */}
      <Card className="mb-6">
        <CardContent className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <p className="text-sm text-gray-500">Order Date</p>
            <p className="text-lg font-semibold">{order.date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mt-4 sm:mt-0">Order Status</p>
            {getStatusBadge(order.status)}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* কলাম ১: আইটেম লিস্ট */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Items ({order.items.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-center">Quantity</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {order.items.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-12 h-12 rounded-md object-cover border"
                          />
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-500">৳ {item.price.toFixed(2)}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">x {item.quantity}</TableCell>
                      <TableCell className="text-right">৳ {(item.price * item.quantity).toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter className="bg-gray-50">
                  <TableRow>
                    <TableCell colSpan={2} className="font-medium">Subtotal</TableCell>
                    <TableCell className="text-right font-medium">৳ {order.subtotal.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={2}>Shipping</TableCell>
                    <TableCell className="text-right">৳ {order.shipping.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow className="text-base font-bold">
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell className="text-right">৳ {order.total.toFixed(2)}</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* কলাম ২: কাস্টমার ও পেমেন্ট */}
        <div className="lg:col-span-1 space-y-6">
          {/* কাস্টমার ডিটেইলস */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <User size={20} />
              <CardTitle>Customer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm">
              <p className="font-medium text-base">{order.customer.name}</p>
              <p className="text-gray-600">{order.customer.email}</p>
              <p className="text-gray-600">{order.customer.phone}</p>
            </CardContent>
          </Card>

          {/* শিপিং এড্রেস */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <MapPin size={20} />
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-sm text-gray-600">
              <p className="font-medium text-gray-800">{order.shippingAddress.name}</p>
              <p>{order.shippingAddress.address}</p>
              <p>{order.shippingAddress.city}, {order.shippingAddress.zip}</p>
            </CardContent>
          </Card>

          {/* পেমেন্ট ডিটেইলস */}
          <Card>
            <CardHeader className="flex flex-row items-center gap-3">
              <CreditCard size={20} />
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Method:</span>
                <span className="font-medium">{order.payment.method}</span>
              </div>
              <div className="flex justify-between">
                <span>Status:</span>
                <Badge variant={order.payment.status === "Paid" ? "default" : "secondary"}
                  className={order.payment.status === "Paid" ? "bg-green-100 text-green-700" : ""}
                >
                  {order.payment.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;