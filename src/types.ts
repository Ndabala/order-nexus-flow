export type UserRole = "customer" | "vendor" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Vendor {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  image: string;
  featured: boolean;
  isOpen: boolean;
}

export interface MenuItem {
  id: string;
  vendorId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  popular: boolean;
  available: boolean;
  rating: number;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  vendorId: string;
  vendorName: string;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  vendorId: string;
  vendorName: string;
  items: { menuItemId: string; name: string; quantity: number; price: number }[];
  total: number;
  status: "pending" | "confirmed" | "preparing" | "out_for_delivery" | "delivered" | "cancelled";
  deliveryAddress: string;
  paymentMethod: "card" | "cash" | "transfer";
  createdAt: string;
  estimatedDelivery: string;
  rating?: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface DashboardStats {
  totalOrders: number;
  totalRevenue: number;
  activeVendors: number;
  totalCustomers: number;
  pendingOrders: number;
  averageRating: number;
}