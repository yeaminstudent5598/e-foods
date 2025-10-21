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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, UserX, Eye } from 'lucide-react'; // আইকন
import { Input } from '@/components/ui/input'; // সার্চের জন্য
import { Link } from 'react-router-dom';

// ডেমো কাস্টমার ডেটা
const demoCustomers = [
  {
    id: "CUST-001",
    name: "সাদিয়া ইসলাম",
    email: "sadia@example.com",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250",
    totalOrders: 5,
    totalSpent: 4500.00
  },
  {
    id: "CUST-002",
    name: "আরিফুর রহমান",
    email: "arifur@example.com",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250",
    totalOrders: 2,
    totalSpent: 1890.00
  },
  {
    id: "CUST-003",
    name: "নাসরিন সুলতানা",
    email: "nasrin@example.com",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=250",
    totalOrders: 1,
    totalSpent: 590.00
  },
  {
    id: "CUST-004",
    name: "কামাল আহমেদ",
    email: "kamal@example.com",
    avatar: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=250",
    totalOrders: 3,
    totalSpent: 2750.00
  },
];

const ManageCustomersPage = () => {
  // TODO: এই state আসল ডেটা দিয়ে লোড করতে হবে
  const [customers, setCustomers] = useState(demoCustomers);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Manage Customers</h2>
        <div className="w-full md:w-auto md:max-w-sm">
          <Input 
            type="search" 
            placeholder="Search by name or email..." 
            className="w-full"
          />
        </div>
      </div>

      {/* কাস্টমার টেবিল */}
      <div className="border rounded-lg overflow-hidden bg-white">
        <Table>
          <TableCaption className="py-4">A list of all registered customers.</TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="font-semibold">Customer</TableHead>
              <TableHead className="font-semibold hidden md:table-cell">Email</TableHead>
              <TableHead className="font-semibold hidden sm:table-cell text-center">Orders</TableHead>
              <TableHead className="font-semibold text-right">Total Spent</TableHead>
              <TableHead className="font-semibold text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                {/* Customer Cell */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={customer.avatar} alt={customer.name} />
                      <AvatarFallback>
                        {customer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-muted-foreground md:hidden">{customer.email}</p>
                    </div>
                  </div>
                </TableCell>
                {/* Email Cell (Desktop) */}
                <TableCell className="hidden md:table-cell">{customer.email}</TableCell>
                {/* Orders Cell */}
                <TableCell className="hidden sm:table-cell text-center">{customer.totalOrders}</TableCell>
                {/* Total Spent Cell */}
                <TableCell className="text-right">৳ {customer.totalSpent.toFixed(2)}</TableCell>
                {/* Actions Cell */}
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
                        <Link to={`/admin/customers/${customer.id}`}> {/* TODO: Customer Details পেজ */}
                          <Eye className="mr-2 h-4 w-4" /> View Details
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-500">
                        <UserX className="mr-2 h-4 w-4" /> Disable Account
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

export default ManageCustomersPage;