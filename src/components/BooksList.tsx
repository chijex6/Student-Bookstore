import React from "react";
import { BookOpen, ShoppingCart, Heart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
export function BooksList() {
  const {
    items,
    addToCart,
    updateQuantity,
    wishlistItems,
    toggleWishlist
  } = useCart();
  const books = [{
    id: "1",
    code: "ENG101",
    title: "Academic Writing",
    department: "English",
    price: 59.99,
    available: true,
    level: "Year 1"
  }, {
    id: "2",
    code: "BIO201",
    title: "Human Anatomy",
    department: "Biology",
    price: 129.99,
    available: true,
    level: "Year 2"
  }];
  return <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold mb-4">Recommended Books</h3>
      <div className="grid grid-cols-1 gap-4">
        {books.map(book => <div key={book.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <div className="bg-purple-100 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <span className={`text-sm ${book.available ? "text-green-600" : "text-red-600"}`}>
                {book.available ? "Available" : "Out of Stock"}
              </span>
            </div>
            <h4 className="font-medium line-clamp-1">{book.title}</h4>
            <p className="text-sm text-gray-600 mb-2">
              {book.code} - {book.department}
            </p>
            <p className="text-lg font-semibold text-purple-600 mb-3">
              ${book.price}
            </p>
            <div className="flex gap-2">
              {items[book.id] ? <div className="flex-1 flex items-center justify-between bg-purple-50 rounded-lg border-2 border-purple-600">
                  <button onClick={() => updateQuantity(book.id, -1)} className="p-2 hover:bg-purple-100 rounded-l-lg">
                    -
                  </button>
                  <span className="text-purple-600 font-medium">
                    {items[book.id].quantity}
                  </span>
                  <button onClick={() => updateQuantity(book.id, 1)} className="p-2 hover:bg-purple-100 rounded-r-lg">
                    +
                  </button>
                </div> : <button onClick={() => addToCart(book)} className="flex-1 bg-purple-600 text-white px-3 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700 transition-colors">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>}
              <button onClick={() => toggleWishlist(book.id)} className={`p-2 border rounded-lg transition-colors ${wishlistItems.has(book.id) ? "bg-pink-50 border-pink-200" : "hover:bg-gray-50"}`}>
                <Heart className={`w-4 h-4 ${wishlistItems.has(book.id) ? "text-pink-500 fill-pink-500" : "text-gray-600"}`} />
              </button>
            </div>
          </div>)}
      </div>
    </div>;
}