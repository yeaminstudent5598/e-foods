import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";

// --- পেজগুলো ইম্পোর্ট ---
import HomePage from "../home/Home"; // হোম পেজের পাথ ঠিক করুন (যদি src/pages এ থাকে)
import AboutPage from "../../pages/AboutPage";
import ProductsPage from "../../pages/ProductsPage";
import ContactPage from "../../pages/ContactPage";
import FAQPage from "../../pages/FAQPage";
import CartPage from "../../pages/CartPage";
import CategoryPage from "../../pages/CategoryPage";
import ProductDetailPage from "../../pages/ProductDetailPage"; // প্রোডাক্ট ডিটেইলস পেজ

// --- Auth পেজ ---
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage"; // পাথ ঠিক করুন

// --- ইউজার ড্যাশবোর্ড ---
import DashboardLayout from "../../pages/dashboard/DashboardLayout";
import ProfilePage from "../../pages/dashboard/ProfilePage";
import OrderHistoryPage from "../../pages/dashboard/OrderHistoryPage";

// --- অ্যাডমিন ড্যাশবোর্ড ---
import AdminLayout from "../../pages/admin/AdminLayout"; // পাথ ঠিক করুন
import AdminHomePage from "../../pages/admin/AdminHomePage";
import ManageProductsPage from "../../pages/admin/ManageProductsPage";
import AddProductPage from "../../pages/admin/AddProductPage";
import EditProductPage from "../../pages/admin/EditProductPage";
import ManageOrdersPage from "../../pages/admin/ManageOrdersPage";
import OrderDetailPage from "../../pages/admin/OrderDetailPage";
import ManageCustomersPage from "../../pages/admin/ManageCustomersPage";
import CustomerDetailPage from "../../pages/admin/CustomerDetailPage";
import AnalyticsPage from "../../pages/admin/AnalyticsPage";
import AddProduct from "@/Dasboard/ContentManagement/addProudct/AddProduct";
import AddressPage from "@/pages/AddressPage";


export const router = createBrowserRouter([
  // ===== ১. প্রধান ওয়েবসাইট লেআউট =====
  {
    path: "/",
    element: <MainLayout />, 
    children: [
      { index: true, element: <HomePage /> }, // index: true মানে এটিই '/' রুট
      { path: "about", element: <AboutPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "faq", element: <FAQPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "category/:categorySlug", element: <CategoryPage /> },
      // --- প্রোডাক্ট ডিটেইলস রুট (সঠিক জায়গা) ---
      { 
        path: "product/:productId", 
        element: <ProductDetailPage />,
      },
    ],
  },

  // ===== ২. Auth পেজ (আলাদা লেআউট) =====
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/forgot-password", element: <ForgotPasswordPage /> }, // <-- সঠিক জায়গা

  // ===== ৩. ইউজার ড্যাশবোর্ড লেআউট =====
  {
    path: "/dashboard",
    element: <DashboardLayout />, 
    children: [
      { index: true, element: <ProfilePage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "orders", element: <OrderHistoryPage /> },
      { path: "addresses", element: <AddressPage /> }, 
    ],
  },

  // ===== ৪. অ্যাডমিন ড্যাশবোর্ড লেআউট =====
  {
    path: "/admin",
    element: <AdminLayout />,
    // TODO: Admin Route Protection
    children: [
      { index: true, element: <AdminHomePage /> },
      { path: "products", element: <ManageProductsPage /> },
      { path: "products/add", element: <AddProduct /> },
      { path: "products/edit/:id", element: <EditProductPage /> },
      { path: "orders", element: <ManageOrdersPage /> },
      { path: "orders/:orderId", element: <OrderDetailPage /> },
      { path: "customers", element: <ManageCustomersPage /> },
      { path: "customers/:customerId", element: <CustomerDetailPage /> },
      { path: "analytics", element: <AnalyticsPage /> },
      // --- এখান থেকে ভুল রুটগুলো বাদ দেওয়া হয়েছে ---
    ]
  },
]);