import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
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
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Mail, Phone, MapPin, DollarSign, Archive, UserX } from 'lucide-react';

// একটি ডেমো কাস্টমার। বাস্তবে আপনি ID দিয়ে API থেকে fetch করবেন।
const demoCustomerDetails = {
  id: "CUST-001",
  name: "সাদিয়া ইসলাম",
  email: "sadia@example.com",
  phone: "+8801712345678",
  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250",
  joined: "October 15, 2025",
  totalSpent: 4500.00,
  addresses: [
    {
      id: 1,
      type: "Home",
      isDefault: true,
      address: "House 123, Road 4, Block B, Basundhara R/A, Dhaka-1229"
    }
  ],
  orders: [
    {
      id: "#EFOODS-1052",
      date: "October 20, 2025",
      status: "Delivered",
      total: 1480.00
    },
    {
      id: "#EFOODS-1030",
      date: "October 10, 2025",
      status: "Delivered",
      total: 3020.00
    },
  ]
};

// স্ট্যাটাস ব্যাজ (Order History থেকে কপি)
const getStatusBadge = (status) => {
  switch (status) {
    case 'Delivered': return <Badge className="bg-green-100 text-green-700">{status}</Badge>;
    case 'Pending': return <Badge className="bg-yellow-100 text-yellow-700">{status}</Badge>;
    case 'Cancelled': return <Badge variant="destructive">{status}</Badge>;
    default: return <Badge variant="secondary">{status}</Badge>;
  }
};

const CustomerDetailPage = () => {
  const { customerId } = useParams(); // URL থেকে ID পাবে
  const navigate = useNavigate();
  
  // TODO: এখানে customerId দিয়ে API থেকে আসল ডেটা fetch করতে হবে
  const customer = demoCustomerDetails; 

  return (
    <div>
      {/* হেডার: ব্যাক বাটন ও টাইটেল */}
      <div className="flex justify-between items-center mb-6">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft size={16} className="mr-2" /> Back to Customers
        </Button>
        <Button variant="outline" className="text-red-500 hover:text-red-600">
          <UserX size={16} className="mr-2" /> Disable Account
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* কলাম ১: কাস্টমার প্রোফাইল ও ঠিকানা */}
        <div className="lg:col-span-1 space-y-6">
          {/* কাস্টমার প্রোফাইল কার্ড */}
          <Card>
            <CardContent className="p-6 text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-green-200">
                <AvatarImage src={customer.avatar} alt={customer.name} />
                <AvatarFallback>
                  {customer.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold">{customer.name}</h3>
              <p className="text-gray-500">{customer.id}</p>
              <p className="text-sm text-gray-600 mt-2">
                Customer since {customer.joined}
              </p>
            </CardContent>
          </Card>

          {/* কন্টাক্ট ইনফো */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-500" />
                <span className="text-sm text-gray-700">{customer.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gray-500" />
                <span className="text-sm text-gray-700">{customer.phone}</span>
              </div>
            </CardContent>
          </Card>

          {/* সেভ করা ঠিকানা */}
          <Card>
            <CardHeader>
              <CardTitle>Saved Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {customer.addresses.map(addr => (
                <div key={addr.id} className="text-sm text-gray-600">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-800">{addr.type} Address</p>
                    {addr.isDefault && <Badge variant="outline">Default</Badge>}
                  </div>
                  <p>{addr.address}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* কলাম ২: অর্ডার হিস্ট্রি */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>
                Total Spent: <span className="font-bold text-green-700">৳ {customer.totalSpent.toFixed(2)}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border rounded-lg overflow-hidden">
                <Table>
                  <TableHeader className="bg-gray-50">
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {customer.orders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>
                          <Link to={`/admin/orders/${encodeURIComponent(order.id)}`} className="font-medium text-blue-600 hover:underline">
                            {order.id}
                          </Link>
                        </TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{getStatusBadge(order.status)}</TableCell>
                        <TableCell className="text-right">৳ {order.total.toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>
        
      </div>
    </div>
  );
};

export default CustomerDetailPage;