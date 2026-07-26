import type { Vendor, MenuItem, Category, Order, User } from "@/types";

export const APP_NAME = "FoodDash";
export const APP_TAGLINE = "Delicious food, delivered fast";

export const USERS: User[] = [
  { id: "u1", name: "Alice Johnson", email: "alice@example.com", role: "customer", avatar: "" },
  { id: "u2", name: "Bob Smith", email: "bob@example.com", role: "customer", avatar: "" },
  { id: "u3", name: "Chef Maria", email: "maria@tasteofitaly.com", role: "vendor", avatar: "" },
  { id: "u4", name: "Chef Tanaka", email: "tanaka@sakura.com", role: "vendor", avatar: "" },
  { id: "u5", name: "Chef Rahul", email: "rahul@spicekings.com", role: "vendor", avatar: "" },
  { id: "u6", name: "Admin Grace", email: "admin@fooddash.com", role: "admin", avatar: "" },
];

export const CATEGORIES: Category[] = [
  { id: "cat1", name: "Pizza", icon: "Pizza", count: 12 },
  { id: "cat2", name: "Burgers", icon: "Sandwich", count: 8 },
  { id: "cat3", name: "Sushi", icon: "Fish", count: 6 },
  { id: "cat4", name: "Salads", icon: "Salad", count: 10 },
  { id: "cat5", name: "Desserts", icon: "Cookie", count: 14 },
  { id: "cat6", name: "Drinks", icon: "Coffee", count: 9 },
  { id: "cat7", name: "Indian", icon: "Flame", count: 7 },
  { id: "cat8", name: "Italian", icon: "Wine", count: 11 },
];

export const VENDORS: Vendor[] = [
  {
    id: "v1",
    name: "Taste of Italy",
    description: "Authentic Italian cuisine with wood-fired pizzas and handmade pasta",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    minOrder: 10,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
    featured: true,
    isOpen: true,
  },
  {
    id: "v2",
    name: "Sakura Sushi",
    description: "Fresh and authentic Japanese sushi, sashimi, and bento boxes",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: 3.99,
    minOrder: 15,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&h=300&fit=crop",
    featured: true,
    isOpen: true,
  },
  {
    id: "v3",
    name: "Spice Kings",
    description: "Bold and aromatic Indian curries, biryanis, and tandoori specialties",
    cuisine: "Indian",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: 1.99,
    minOrder: 12,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
    featured: true,
    isOpen: true,
  },
  {
    id: "v4",
    name: "Burger Bliss",
    description: "Gourmet burgers with premium ingredients and hand-cut fries",
    cuisine: "American",
    rating: 4.6,
    deliveryTime: "15-25 min",
    deliveryFee: 2.49,
    minOrder: 8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    featured: false,
    isOpen: true,
  },
  {
    id: "v5",
    name: "Green Garden",
    description: "Fresh, organic salads, bowls, and healthy plant-based meals",
    cuisine: "Healthy",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: 1.49,
    minOrder: 8,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    featured: false,
    isOpen: true,
  },
  {
    id: "v6",
    name: "Sweet Treats",
    description: "Artisan desserts, cakes, pastries, and gourmet ice cream",
    cuisine: "Desserts",
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: 2.99,
    minOrder: 5,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=300&fit=crop",
    featured: false,
    isOpen: true,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  { id: "m1", vendorId: "v1", name: "Margherita Pizza", description: "Classic tomato, mozzarella, fresh basil", price: 12.99, category: "Pizza", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.8 },
  { id: "m2", vendorId: "v1", name: "Pepperoni Pizza", description: "Loaded with pepperoni and melted mozzarella", price: 14.99, category: "Pizza", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.7 },
  { id: "m3", vendorId: "v1", name: "Pasta Carbonara", description: "Creamy egg-based sauce with pancetta", price: 15.99, category: "Italian", image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.6 },
  { id: "m4", vendorId: "v1", name: "Bruschetta", description: "Grilled bread with tomato, basil, olive oil", price: 8.99, category: "Italian", image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.5 },
  { id: "m5", vendorId: "v2", name: "Salmon Sashimi", description: "Fresh Atlantic salmon sliced to perfection", price: 18.99, category: "Sushi", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.9 },
  { id: "m6", vendorId: "v2", name: "California Roll", description: "Crab, avocado, cucumber, and sesame", price: 12.99, category: "Sushi", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.7 },
  { id: "m7", vendorId: "v2", name: "Chicken Teriyaki Bento", description: "Grilled chicken with teriyaki glaze, rice, and veggies", price: 16.99, category: "Japanese", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.6 },
  { id: "m8", vendorId: "v2", name: "Miso Soup", description: "Traditional miso with tofu, seaweed, green onions", price: 4.99, category: "Japanese", image: "https://images.unsplash.com/photo-1607301405390-d831c242f59d?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.4 },
  { id: "m9", vendorId: "v3", name: "Chicken Biryani", description: "Fragrant basmati rice layered with spiced chicken", price: 14.99, category: "Indian", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.8 },
  { id: "m10", vendorId: "v3", name: "Butter Chicken", description: "Creamy tomato-based curry with tender chicken", price: 16.99, category: "Indian", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae7b4?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.9 },
  { id: "m11", vendorId: "v3", name: "Garlic Naan", description: "Soft, pillowy bread with garlic butter", price: 3.99, category: "Indian", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.5 },
  { id: "m12", vendorId: "v3", name: "Samosa (3 pcs)", description: "Crispy pastry filled with spiced potatoes and peas", price: 5.99, category: "Indian", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.6 },
  { id: "m13", vendorId: "v4", name: "Classic Cheeseburger", description: "Angus beef, cheddar, lettuce, tomato, special sauce", price: 11.99, category: "Burgers", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.7 },
  { id: "m14", vendorId: "v4", name: "Bacon BBQ Burger", description: "Smoked bacon, onion rings, BBQ sauce, aged cheddar", price: 14.99, category: "Burgers", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.8 },
  { id: "m15", vendorId: "v4", name: "Crispy Chicken Sandwich", description: "Buttermilk fried chicken, pickles, sriracha mayo", price: 12.99, category: "Burgers", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13030?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.5 },
  { id: "m16", vendorId: "v4", name: "Hand-Cut Fries", description: "Golden fries with sea salt and rosemary", price: 4.99, category: "Burgers", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.4 },
  { id: "m17", vendorId: "v5", name: "Caesar Salad", description: "Romaine, parmesan, croutons, house-made dressing", price: 10.99, category: "Salads", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.6 },
  { id: "m18", vendorId: "v5", name: "Mediterranean Bowl", description: "Quinoa, hummus, falafel, cucumber, tzatziki", price: 13.99, category: "Salads", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.7 },
  { id: "m19", vendorId: "v5", name: "Acai Bowl", description: "Blended acai, granola, banana, berries, honey", price: 11.99, category: "Healthy", image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.5 },
  { id: "m20", vendorId: "v5", name: "Green Smoothie", description: "Spinach, mango, banana, ginger, coconut water", price: 6.99, category: "Drinks", image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.3 },
  { id: "m21", vendorId: "v6", name: "Chocolate Lava Cake", description: "Warm chocolate cake with molten center, vanilla ice cream", price: 9.99, category: "Desserts", image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.9 },
  { id: "m22", vendorId: "v6", name: "Tiramisu", description: "Classic Italian coffee-flavored layered dessert", price: 8.99, category: "Desserts", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=300&fit=crop", popular: true, available: true, rating: 4.8 },
  { id: "m23", vendorId: "v6", name: "Artisan Ice Cream (3 scoops)", description: "Vanilla, chocolate, strawberry - house-made", price: 7.99, category: "Desserts", image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.6 },
  { id: "m24", vendorId: "v6", name: "French Macarons (box of 6)", description: "Assorted flavors: raspberry, pistachio, vanilla, chocolate", price: 14.99, category: "Desserts", image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=300&h=300&fit=crop", popular: false, available: true, rating: 4.7 },
];

export const ORDERS: Order[] = [
  {
    id: "ord1",
    customerId: "u1",
    customerName: "Alice Johnson",
    vendorId: "v1",
    vendorName: "Taste of Italy",
    items: [{ menuItemId: "m1", name: "Margherita Pizza", quantity: 2, price: 12.99 }],
    total: 25.98,
    status: "delivered",
    deliveryAddress: "123 Main St, Apt 4B",
    paymentMethod: "card",
    createdAt: "2025-01-15T18:30:00Z",
    estimatedDelivery: "2025-01-15T19:00:00Z",
    rating: 5,
  },
  {
    id: "ord2",
    customerId: "u1",
    customerName: "Alice Johnson",
    vendorId: "v2",
    vendorName: "Sakura Sushi",
    items: [{ menuItemId: "m5", name: "Salmon Sashimi", quantity: 1, price: 18.99 }],
    total: 18.99,
    status: "preparing",
    deliveryAddress: "123 Main St, Apt 4B",
    paymentMethod: "card",
    createdAt: "2025-01-18T12:00:00Z",
    estimatedDelivery: "2025-01-18T12:30:00Z",
  },
  {
    id: "ord3",
    customerId: "u2",
    customerName: "Bob Smith",
    vendorId: "v3",
    vendorName: "Spice Kings",
    items: [
      { menuItemId: "m9", name: "Chicken Biryani", quantity: 1, price: 14.99 },
      { menuItemId: "m11", name: "Garlic Naan", quantity: 2, price: 3.99 },
    ],
    total: 22.97,
    status: "pending",
    deliveryAddress: "456 Oak Ave",
    paymentMethod: "cash",
    createdAt: "2025-01-18T14:15:00Z",
    estimatedDelivery: "2025-01-18T14:45:00Z",
  },
  {
    id: "ord4",
    customerId: "u2",
    customerName: "Bob Smith",
    vendorId: "v4",
    vendorName: "Burger Bliss",
    items: [{ menuItemId: "m13", name: "Classic Cheeseburger", quantity: 2, price: 11.99 }],
    total: 23.98,
    status: "out_for_delivery",
    deliveryAddress: "456 Oak Ave",
    paymentMethod: "transfer",
    createdAt: "2025-01-18T13:00:00Z",
    estimatedDelivery: "2025-01-18T13:25:00Z",
  },
  {
    id: "ord5",
    customerId: "u1",
    customerName: "Alice Johnson",
    vendorId: "v6",
    vendorName: "Sweet Treats",
    items: [{ menuItemId: "m21", name: "Chocolate Lava Cake", quantity: 1, price: 9.99 }],
    total: 9.99,
    status: "confirmed",
    deliveryAddress: "123 Main St, Apt 4B",
    paymentMethod: "card",
    createdAt: "2025-01-18T15:00:00Z",
    estimatedDelivery: "2025-01-18T15:25:00Z",
  },
];

export const CAPSTONE_DOCS = {
  title: "3MTT Capstone Project: FoodDash - Food Ordering Application",
  student: "Student Name",
  cohort: "3MTT Cohort 3",
  date: "January 2025",
  sections: [
    {
      title: "Project Overview",
      content: "FoodDash is a comprehensive food ordering platform built as the 3MTT Capstone Project. It connects customers with local food vendors, providing a seamless ordering experience with real-time order tracking, secure payments, and an intuitive interface. The platform supports three distinct user roles: Customers who browse and order food, Vendors who manage their menus and orders, and Administrators who oversee platform operations."
    },
    {
      title: "Architecture & Tech Stack",
      content: "Built with React 19 + TypeScript for the frontend, powered by Vite for fast development. The UI leverages shadcn/ui components with Tailwind CSS v4 for styling and Framer Motion for animations. State management is handled through React Context API. The backend architecture uses Supabase for authentication, database, and real-time features."
    },
    {
      title: "Features Implemented",
      content: "Multi-role authentication (Customer, Vendor, Admin) with role-based dashboards. Customer features include browsing vendors by cuisine, searching/filtering menu items, cart management, order placement, and order history. Vendor features include menu management, order management, and sales analytics. Admin features include user management, vendor approval, and platform-wide analytics."
    },
    {
      title: "User Flow",
      content: "Users begin by selecting their role (Customer, Vendor, or Admin). Customers browse the marketplace, add items to cart, and place orders. Vendors receive orders and update their status through the workflow: pending → confirmed → preparing → out_for_delivery → delivered. Admins monitor platform health and manage users/vendors."
    },
    {
      title: "Database Schema",
      content: "The application uses a relational database with tables for users (profiles, roles, auth), vendors (details, hours, ratings), menu_items (pricing, categories, availability), orders (status, addresses, payment info), and order_items (line items per order). Row Level Security ensures data isolation between roles."
    },
    {
      title: "Challenges & Solutions",
      content: "Key challenges included implementing real-time order updates, managing cart persistence across sessions, and designing role-specific UI flows. Solutions included using Supabase real-time subscriptions, localStorage for cart state, and a modular component architecture with role-gated views."
    },
    {
      title: "Future Enhancements",
      content: "Potential future features include AI-powered restaurant recommendations, voice ordering, scheduled delivery, multi-language support, dark mode, and integration with payment gateways like Paystack or Flutterwave for the Nigerian market."
    },
    {
      title: "Conclusion",
      content: "FoodDash successfully demonstrates the practical application of modern web development technologies in solving a real-world problem. The project showcases proficiency in React, TypeScript, responsive design, database management, and user-centered design principles."
    }
  ]
};

export const STATUS_COLORS: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  confirmed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  preparing: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
  out_for_delivery: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  delivered: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
};

export const STATUS_LABELS: Record<string, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  preparing: "Preparing",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
};