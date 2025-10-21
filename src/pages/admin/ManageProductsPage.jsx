import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom'; // Link ইম্পোর্ট করা আছে

const demoProducts = [
  { id: 1, name: "কালোজিরা আচার", price: 890, stock: 50, status: "Active" },
  { id: 5, name: "ঝিনুক পিঠা", price: 590, stock: 0, status: "Out of Stock" },
  { id: 7, name: "১.৫ লিটার কম্বো", price: 1250, stock: 20, status: "Active" },
];

const ManageProductsPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Manage Products</h2>
        {/* === এই বাটনটিকে Link দিয়ে মোড়ানো হয়েছে === */}
        <Button asChild className="bg-green-600 hover:bg-green-700">
          <Link to="/admin/products/add">
            <Plus size={20} className="mr-2" /> Add New Product
          </Link>
        </Button>
        {/* ======================================= */}
      </div>

      <div className="border rounded-lg overflow-hidden bg-white">
        <Table>
          {/* TableCaption বাদ দেওয়া হলো, প্রয়োজন নেই */}
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="font-semibold text-gray-700">Product Name</TableHead> {/* হেডার টেক্সট কালার */}
              <TableHead className="font-semibold text-gray-700">Status</TableHead>
              <TableHead className="font-semibold text-gray-700">Stock</TableHead>
              <TableHead className="font-semibold text-gray-700 text-right">Price</TableHead>
              <TableHead className="font-semibold text-gray-700 text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {demoProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>
                  <Badge variant={product.status === "Active" ? "default" : (product.status === "Out of Stock" ? "destructive" : "secondary")} // Out of Stock এর জন্য destructive ব্যবহার
                    className={
                      product.status === "Active" ? "bg-green-100 text-green-700 border-green-200" :
                      product.status === "Out of Stock" ? "" : // destructive এর ডিফল্ট স্টাইল
                      "bg-gray-100 text-gray-600" // অন্যান্য স্ট্যাটাসের জন্য (যেমন Draft)
                    }
                  >
                    {product.status}
                  </Badge>
                </TableCell>
                <TableCell>{product.stock} units</TableCell>
                <TableCell className="text-right">৳ {product.price}</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/admin/products/edit/${product.id}`}>Edit</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ManageProductsPage;