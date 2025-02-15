import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, User, BookOpen, Heart, ShoppingCart, Bell, Settings } from "lucide-react";
import { useCart } from "../context/CartContext";
const navItems = [{
  icon: LayoutDashboard,
  label: "Dashboard",
  path: "/"
}, {
  icon: BookOpen,
  label: "Books",
  path: "/books"
}, {
  icon: Heart,
  label: "Wishlist",
  path: "/wishlist"
}, {
  icon: ShoppingCart,
  label: "Cart",
  path: "/cart"
}, {
  icon: Bell,
  label: "Notifications",
  path: "/notifications"
}, {
  icon: User,
  label: "Profile",
  path: "/profile"
}];
export function Navigation({
  className = ""
}) {
  const {
    items,
    wishlistItems
  } = useCart();
  const cartCount = Object.keys(items).length;
  const wishlistCount = wishlistItems.size;
  return <nav className={`w-64 bg-white border-r ${className}`}>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-purple-600">BookStore</h1>
      </div>
      <div className="px-3">
        {navItems.map(({
        icon: Icon,
        label,
        path
      }) => <NavLink key={path} to={path} className={({
        isActive
      }) => `flex items-center justify-between px-3 py-2 rounded-lg mb-1 transition-colors ${isActive ? "bg-purple-50 text-purple-600" : "text-gray-600 hover:bg-gray-50"}`}>
            <div className="flex items-center space-x-3">
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </div>
            {path === "/cart" && cartCount > 0 && <span className="bg-purple-100 text-purple-600 text-xs font-medium px-2 py-1 rounded-full">
                {cartCount}
              </span>}
            {path === "/wishlist" && wishlistCount > 0 && <span className="bg-pink-100 text-pink-600 text-xs font-medium px-2 py-1 rounded-full">
                {wishlistCount}
              </span>}
          </NavLink>)}
      </div>
      <div className="absolute bottom-0 w-64 p-6 border-t">
        <NavLink to="/settings" className="flex items-center space-x-3 text-gray-600 hover:text-gray-900">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </NavLink>
      </div>
    </nav>;
}