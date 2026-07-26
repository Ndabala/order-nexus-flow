import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ShoppingCart, UserIcon, Store, Shield, ChevronDown, Plus, Minus,
  X, Trash, Eye, Edit, Star, MapPin, Clock, Package, Settings, Bell,
  Menu, LogOut, ArrowLeft, ArrowRight, Check, Filter, ChefHat, Truck,
  Utensils, FileText, TrendingUp, AlertCircle, RefreshCw, ThumbsUp,
  Sparkles, Coffee, Cookie, Pizza, Wine, Salad, Leaf, Flame, BookOpen,
  Zap, Tag, Phone, Mail, GraduationCap, Smartphone, Download
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell,
} from "@/components/ui/table";
import {
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle,
  DialogDescription, DialogClose,
} from "@/components/ui/dialog";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import type { UserRole, Vendor, MenuItem, CartItem, Order, User as AppUser } from "@/types";
import {
  VENDORS, MENU_ITEMS, CATEGORIES, ORDERS, USERS, STATUS_COLORS,
  STATUS_LABELS, APP_NAME, CAPSTONE_DOCS,
} from "@/constants";

/* ─── Role Selector ─── */
function RoleSelector({ onSelect }: { onSelect: (role: UserRole) => void }) {
  const roles: { role: UserRole; icon: typeof UserIcon; label: string; desc: string; color: string }[] = [
    { role: "customer", icon: UserIcon, label: "Customer", desc: "Browse menus, order food, track deliveries", color: "from-orange-500 to-amber-600" },
    { role: "vendor", icon: ChefHat, label: "Food Vendor", desc: "Manage menu, view orders, update status", color: "from-emerald-500 to-teal-600" },
    { role: "admin", icon: Shield, label: "Admin", desc: "Platform oversight, analytics, user management", color: "from-indigo-500 to-purple-600" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 p-4">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl"
      >
        {/* Brand */}
        <div className="text-center mb-12">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center size-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white mb-4 shadow-lg"
          >
            <Utensils className="size-8" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{APP_NAME}</h1>
          <p className="text-muted-foreground mt-2 text-lg">Delicious food, delivered fast. Choose your role to get started.</p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {roles.map(({ role, icon: Icon, label, desc, color }, i) => (
            <motion.button
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" }}
              onClick={() => onSelect(role)}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 text-left transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${color}`} />
              <div className={`inline-flex size-12 rounded-xl bg-gradient-to-br ${color} text-white items-center justify-center mb-4 shadow-sm`}>
                <Icon className="size-6" />
              </div>
              <h3 className="text-lg font-semibold mb-1">{label}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
              <div className="mt-4 flex items-center text-sm font-medium text-orange-600 dark:text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Continue <ArrowRight className="size-3.5 ml-1" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* Capstone Info */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-12 text-center text-xs text-muted-foreground"
        >
          <GraduationCap className="size-4 inline-block mr-1" />
          3MTT Capstone Project • Cohort 3 • January 2025
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ─── Navbar ─── */
function Navbar({ role, user, cartCount, onBack, onCartOpen }: {
  role: UserRole; user: AppUser; cartCount: number; onBack: () => void; onCartOpen?: () => void;
}) {
  const roleColors: Record<UserRole, string> = {
    customer: "from-orange-500 to-amber-600",
    vendor: "from-emerald-500 to-teal-600",
    admin: "from-indigo-500 to-purple-600",
  };
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="shrink-0">
            <ArrowLeft className="size-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className={`size-8 rounded-lg bg-gradient-to-br ${roleColors[role]} flex items-center justify-center text-white`}>
              {role === "customer" ? <UserIcon className="size-4" /> : role === "vendor" ? <ChefHat className="size-4" /> : <Shield className="size-4" />}
            </div>
            <div>
              <span className="font-semibold text-sm">{APP_NAME}</span>
              <span className="text-xs text-muted-foreground block capitalize">{role}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {role === "customer" && (
            <Button variant="ghost" size="icon" className="relative" onClick={onCartOpen}>
              <ShoppingCart className="size-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 size-5 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
          )}
          <Avatar className="size-8 cursor-pointer">
            <AvatarFallback className="text-xs bg-muted">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

/* ─── Customer View ─── */
function CustomerView() {
  const [view, setView] = useState<"home" | "vendor" | "cart" | "orders">("home");
  const [selectedVendor, setSelectedVendor] = useState<Vendor | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showCart, setShowCart] = useState(false);

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);
  const cartTotal = cart.reduce((s, i) => s + i.menuItem.price * i.quantity, 0);

  const filteredVendors = useMemo(() => {
    let list = VENDORS;
    if (search) list = list.filter(v => v.name.toLowerCase().includes(search.toLowerCase()) || v.cuisine.toLowerCase().includes(search.toLowerCase()));
    if (activeCategory !== "all") list = list.filter(v => v.cuisine.toLowerCase() === activeCategory.toLowerCase());
    return list;
  }, [search, activeCategory]);

  const filteredMenuItems = useMemo(() => {
    if (!selectedVendor) return [];
    let items = MENU_ITEMS.filter(m => m.vendorId === selectedVendor.id && m.available);
    if (search) items = items.filter(m => m.name.toLowerCase().includes(search.toLowerCase()) || m.description.toLowerCase().includes(search.toLowerCase()));
    return items;
  }, [selectedVendor, search]);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(c => c.menuItem.id === item.id);
      if (existing) return prev.map(c => c.menuItem.id === item.id ? { ...c, quantity: c.quantity + 1 } : c);
      return [...prev, { menuItem: item, quantity: 1, vendorId: item.vendorId, vendorName: selectedVendor?.name || "" }];
    });
  };

  const updateQty = (itemId: string, delta: number) => {
    setCart(prev => prev.map(c => c.menuItem.id === itemId ? { ...c, quantity: Math.max(0, c.quantity + delta) } : c).filter(c => c.quantity > 0));
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(c => c.menuItem.id !== itemId));
  };

  const customerOrders = ORDERS.filter(o => o.customerId === "u1");

  /* Home - Vendors */
  if (view === "home") {
    return (
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
          {/* Hero Search */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl" />
            <div className="relative p-6 md:p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-1">What are you craving?</h2>
              <p className="text-muted-foreground mb-4">Discover the best food in your neighborhood</p>
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input placeholder="Search vendors or cuisines..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9 h-10" />
              </div>
            </div>
          </div>

          {/* Categories */}
          <ScrollArea className="w-full max-w-full overflow-x-auto">
            <div className="flex gap-2 pb-2">
              {["all", ...CATEGORIES.map(c => c.name)].map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat === "all" ? "all" : cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border",
                    activeCategory === (cat === "all" ? "all" : cat)
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-card hover:bg-accent border-border"
                  )}
                >
                  {cat === "all" ? "All" : cat}
                </button>
              ))}
            </div>
          </ScrollArea>

          {/* Featured Vendors */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Featured Vendors</h3>
              <Button variant="ghost" size="sm" className="text-orange-600">
                View All <ArrowRight className="size-3.5 ml-1" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredVendors.filter(v => v.featured).map(vendor => (
                <motion.button key={vendor.id} layout onClick={() => { setSelectedVendor(vendor); setView("vendor"); setSearch(""); }}
                  className="group text-left rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <div className="aspect-[2/1] overflow-hidden">
                    <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold">{vendor.name}</h4>
                      <div className="flex items-center gap-1 text-sm text-amber-500">
                        <Star className="size-3.5 fill-current" /> {vendor.rating}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{vendor.cuisine} • {vendor.deliveryTime}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="size-3" /> Min ${vendor.minOrder}</span>
                      <span className="flex items-center gap-1"><Truck className="size-3" /> ${vendor.deliveryFee} delivery</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* All Vendors */}
          <div>
            <h3 className="text-lg font-semibold mb-4">All Vendors</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredVendors.map(vendor => (
                <motion.button key={vendor.id} layout onClick={() => { setSelectedVendor(vendor); setView("vendor"); setSearch(""); }}
                  className="group text-left rounded-xl border bg-card overflow-hidden hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <div className="aspect-[2/1] overflow-hidden">
                    <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold">{vendor.name}</h4>
                      <div className="flex items-center gap-1 text-sm text-amber-500">
                        <Star className="size-3.5 fill-current" /> {vendor.rating}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{vendor.cuisine} • {vendor.deliveryTime}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="size-3" /> Min ${vendor.minOrder}</span>
                      <span className="flex items-center gap-1"><Truck className="size-3" /> ${vendor.deliveryFee} delivery</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
            {filteredVendors.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Search className="size-8 mx-auto mb-2 opacity-50" />
                <p>No vendors found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* Vendor Menu View */
  if (view === "vendor" && selectedVendor) {
    return (
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6">
          {/* Vendor Header */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="aspect-[3/1]">
              <img src={selectedVendor.image} alt={selectedVendor.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent" />
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-bold">{selectedVendor.name}</h2>
              <p className="text-sm opacity-90">{selectedVendor.cuisine} • {selectedVendor.deliveryTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Star className="size-3.5 text-amber-500" /> {selectedVendor.rating}</span>
            <span className="flex items-center gap-1"><Truck className="size-3.5" /> ${selectedVendor.deliveryFee} delivery</span>
            <span className="flex items-center gap-1"><MapPin className="size-3.5" /> Min ${selectedVendor.minOrder}</span>
          </div>

          <Separator />

          {/* Search in vendor */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <Input placeholder="Search menu..." value={search} onChange={e => setSearch(e.target.value)} className="pl-9" />
          </div>

          {/* Menu Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {filteredMenuItems.map(item => (
              <motion.div key={item.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="flex gap-4 rounded-xl border bg-card p-3 hover:shadow-md transition-shadow"
              >
                <div className="size-20 rounded-lg overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">{item.description}</p>
                    </div>
                    {item.popular && <Sparkles className="size-3.5 text-amber-500 shrink-0" />}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-orange-600 dark:text-orange-400">${item.price.toFixed(2)}</span>
                    <Button size="sm" onClick={() => addToCart(item)} className="h-8 px-3 gap-1">
                      <Plus className="size-3.5" /> Add
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {filteredMenuItems.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Search className="size-8 mx-auto mb-2 opacity-50" />
              <p>No menu items found.</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  /* Cart View */
  if (view === "cart") {
    return (
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto p-4 md:p-6 space-y-4">
          <h2 className="text-xl font-bold">Your Cart</h2>
          {cart.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <ShoppingCart className="size-12 mx-auto mb-3 opacity-30" />
              <p>Your cart is empty</p>
              <Button variant="outline" className="mt-4" onClick={() => setView("home")}>Browse Vendors</Button>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {cart.map(item => (
                  <div key={item.menuItem.id} className="flex items-center gap-4 rounded-xl border bg-card p-4">
                    <div className="size-14 rounded-lg overflow-hidden shrink-0">
                      <img src={item.menuItem.image} alt={item.menuItem.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{item.menuItem.name}</p>
                      <p className="text-xs text-muted-foreground">{item.vendorName}</p>
                      <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 mt-0.5">
                        ${(item.menuItem.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon-sm" onClick={() => updateQty(item.menuItem.id, -1)}>
                        <Minus className="size-3.5" />
                      </Button>
                      <span className="w-6 text-center font-medium text-sm">{item.quantity}</span>
                      <Button variant="outline" size="icon-sm" onClick={() => updateQty(item.menuItem.id, 1)}>
                        <Plus className="size-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon-sm" onClick={() => removeFromCart(item.menuItem.id)} className="text-destructive">
                        <Trash className="size-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <Button className="w-full h-12 text-base gap-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
                <ShoppingCart className="size-5" /> Place Order
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }

  /* Orders View */
  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-3xl mx-auto p-4 md:p-6 space-y-4">
        <h2 className="text-xl font-bold">My Orders</h2>
        {customerOrders.length === 0 ? (
          <div className="text-center py-12 text-muted-foreground">
            <Package className="size-12 mx-auto mb-3 opacity-30" />
            <p>No orders yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {customerOrders.map(order => (
              <Card key={order.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{order.vendorName}</CardTitle>
                    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium", STATUS_COLORS[order.status])}>
                      {STATUS_LABELS[order.status]}
                    </span>
                  </div>
                  <CardDescription>
                    <span className="flex items-center gap-1"><Clock className="size-3" /> {new Date(order.createdAt).toLocaleDateString()}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="space-y-1 text-sm">
                    {order.items.map((item, i) => (
                      <div key={i} className="flex justify-between text-muted-foreground">
                        <span>{item.quantity}x {item.name}</span>
                        <span>${(item.quantity * item.price).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                  {order.rating && (
                    <div className="flex items-center gap-1 mt-2 text-amber-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={cn("size-3.5", i < order.rating! ? "fill-current" : "opacity-30")} />
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Vendor View ─── */
function VendorView() {
  const [tab, setTab] = useState("orders");
  const vendorOrders = ORDERS.filter(o => o.vendorId === "v1");
  const vendorMenu = MENU_ITEMS.filter(m => m.vendorId === "v1");
  const [menuItems, setMenuItems] = useState(vendorMenu);

  const updateStatus = (orderId: string, status: Order["status"]) => {
    // In a real app, this would update the backend
  };

  const stats = {
    totalOrders: vendorOrders.length,
    pendingOrders: vendorOrders.filter(o => o.status === "pending" || o.status === "confirmed").length,
    revenue: vendorOrders.filter(o => o.status === "delivered").reduce((s, o) => s + o.total, 0),
    avgRating: vendorOrders.filter(o => o.rating).reduce((s, o) => s + (o.rating || 0), 0) / Math.max(1, vendorOrders.filter(o => o.rating).length),
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-6xl mx-auto p-4 md:p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Total Orders", value: stats.totalOrders, icon: Package, color: "text-blue-600" },
            { label: "Pending", value: stats.pendingOrders, icon: Clock, color: "text-amber-600" },
            { label: "Revenue", value: `$${stats.revenue.toFixed(0)}`, icon: TrendingUp, color: "text-emerald-600" },
            { label: "Rating", value: stats.avgRating.toFixed(1), icon: Star, color: "text-purple-600" },
          ].map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={cn("p-2 rounded-lg bg-muted", stat.color)}>
                    <stat.icon className="size-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tabs: Orders | Menu */}
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="orders"><Package className="size-4" /> Orders</TabsTrigger>
            <TabsTrigger value="menu"><Utensils className="size-4" /> Menu</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="space-y-3 mt-4">
            {vendorOrders.map(order => (
              <Card key={order.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-base">{order.customerName}</CardTitle>
                      <CardDescription>#{order.id} • {new Date(order.createdAt).toLocaleTimeString()}</CardDescription>
                    </div>
                    <span className={cn("px-2.5 py-0.5 rounded-full text-xs font-medium", STATUS_COLORS[order.status])}>
                      {STATUS_LABELS[order.status]}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="space-y-1 text-sm mb-3">
                    {order.items.map((item, i) => (
                      <div key={i} className="flex justify-between text-muted-foreground">
                        <span>{item.quantity}x {item.name}</span>
                        <span>${(item.quantity * item.price).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">${order.total.toFixed(2)}</span>
                    <div className="flex gap-1">
                      {order.status === "pending" && (
                        <Button size="sm" className="h-8" onClick={() => updateStatus(order.id, "confirmed")}>
                          <Check className="size-3.5 mr-1" /> Confirm
                        </Button>
                      )}
                      {order.status === "confirmed" && (
                        <Button size="sm" className="h-8" onClick={() => updateStatus(order.id, "preparing")}>
                          <ChefHat className="size-3.5 mr-1" /> Start Preparing
                        </Button>
                      )}
                      {order.status === "preparing" && (
                        <Button size="sm" className="h-8" onClick={() => updateStatus(order.id, "out_for_delivery")}>
                          <Truck className="size-3.5 mr-1" /> Out for Delivery
                        </Button>
                      )}
                      {order.status === "out_for_delivery" && (
                        <Button size="sm" className="h-8" onClick={() => updateStatus(order.id, "delivered")}>
                          <Check className="size-3.5 mr-1" /> Mark Delivered
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            {vendorOrders.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Package className="size-8 mx-auto mb-2 opacity-50" />
                <p>No orders yet</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="menu" className="mt-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Menu Items ({menuItems.length})</h3>
              <Button size="sm"><Plus className="size-4" /> Add Item</Button>
            </div>
            <div className="space-y-2">
              {menuItems.map(item => (
                <div key={item.id} className="flex items-center gap-4 rounded-xl border bg-card p-3">
                  <div className="size-14 rounded-lg overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-sm">{item.name}</p>
                      {item.popular && <Sparkles className="size-3 text-amber-500" />}
                    </div>
                    <p className="text-xs text-muted-foreground">{item.category} • ${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Button variant="ghost" size="icon-sm"><Eye className="size-3.5" /></Button>
                    <Button variant="ghost" size="icon-sm"><Edit className="size-3.5" /></Button>
                    <Button variant="ghost" size="icon-sm" className="text-destructive"><Trash className="size-3.5" /></Button>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

/* ─── Admin View ─── */
function AdminView() {
  const [tab, setTab] = useState("dashboard");

  const totalRevenue = ORDERS.filter(o => o.status === "delivered").reduce((s, o) => s + o.total, 0);
  const activeVendors = VENDORS.filter(v => v.isOpen).length;

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
        {/* Dashboard Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Total Orders", value: ORDERS.length, icon: Package, change: "+12%", color: "text-blue-600" },
            { label: "Revenue", value: `$${totalRevenue.toFixed(0)}`, icon: TrendingUp, change: "+8%", color: "text-emerald-600" },
            { label: "Active Vendors", value: activeVendors, icon: Store, change: `/${VENDORS.length}`, color: "text-amber-600" },
            { label: "Customers", value: USERS.filter(u => u.role === "customer").length, icon: UserIcon, change: "+3", color: "text-purple-600" },
          ].map((stat, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                  <div className={cn("p-2 rounded-lg bg-muted", stat.color)}>
                    <stat.icon className="size-5" />
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs value={tab} onValueChange={setTab}>
          <TabsList>
            <TabsTrigger value="dashboard"><TrendingUp className="size-4" /> Dashboard</TabsTrigger>
            <TabsTrigger value="vendors"><Store className="size-4" /> Vendors</TabsTrigger>
            <TabsTrigger value="users"><UserIcon className="size-4" /> Users</TabsTrigger>
            <TabsTrigger value="docs"><BookOpen className="size-4" /> Capstone Docs</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-4 space-y-4">
            {/* Recent Orders Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Orders</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Total</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ORDERS.slice(0, 5).map(order => (
                      <TableRow key={order.id}>
                        <TableCell className="font-mono text-xs">#{order.id}</TableCell>
                        <TableCell>{order.customerName}</TableCell>
                        <TableCell>{order.vendorName}</TableCell>
                        <TableCell>${order.total.toFixed(2)}</TableCell>
                        <TableCell>
                          <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium", STATUS_COLORS[order.status])}>
                            {STATUS_LABELS[order.status]}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Order Status Distribution */}
            <div className="grid sm:grid-cols-3 gap-3">
              {["pending", "preparing", "out_for_delivery"].map(status => {
                const count = ORDERS.filter(o => o.status === status).length;
                return (
                  <Card key={status}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className={cn("p-2 rounded-lg", STATUS_COLORS[status])}>
                        {status === "pending" ? <Clock className="size-5" /> : status === "preparing" ? <ChefHat className="size-5" /> : <Truck className="size-5" />}
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{count}</p>
                        <p className="text-xs text-muted-foreground capitalize">{status.replace(/_/g, " ")}</p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="vendors" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Vendor Management</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vendor</TableHead>
                      <TableHead>Cuisine</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {VENDORS.map(v => (
                      <TableRow key={v.id}>
                        <TableCell className="font-medium">{v.name}</TableCell>
                        <TableCell>{v.cuisine}</TableCell>
                        <TableCell>
                          <span className="flex items-center gap-1 text-amber-500">
                            <Star className="size-3.5 fill-current" /> {v.rating}
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium", v.isOpen ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400")}>
                            {v.isOpen ? "Open" : "Closed"}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon-sm"><Eye className="size-3.5" /></Button>
                            <Button variant="ghost" size="icon-sm"><Edit className="size-3.5" /></Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">User Management</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {USERS.map(u => (
                      <TableRow key={u.id}>
                        <TableCell className="font-medium">{u.name}</TableCell>
                        <TableCell>{u.email}</TableCell>
                        <TableCell>
                          <Badge variant={u.role === "admin" ? "destructive" : u.role === "vendor" ? "secondary" : "outline"}>
                            {u.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon-sm"><Eye className="size-3.5" /></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="docs" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{CAPSTONE_DOCS.title}</CardTitle>
                <CardDescription>{CAPSTONE_DOCS.student} • {CAPSTONE_DOCS.cohort} • {CAPSTONE_DOCS.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {CAPSTONE_DOCS.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="font-semibold text-base mb-2 flex items-center gap-2">
                        <span className="size-6 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center text-xs font-bold">
                          {i + 1}
                        </span>
                        {section.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

/* ─── Main Content ─── */
export default function MainContent({ role, user, onBack }: {
  role: UserRole; user: AppUser; onBack: () => void;
}) {
  const [showCart, setShowCart] = useState(false);

  const roleViews: Record<UserRole, React.ReactNode> = {
    customer: <CustomerView />,
    vendor: <VendorView />,
    admin: <AdminView />,
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar role={role} user={user} cartCount={0} onBack={onBack} onCartOpen={() => setShowCart(true)} />
      {roleViews[role]}
    </div>
  );
}