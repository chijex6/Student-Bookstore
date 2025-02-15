import React from "react";
import { Book, BookOpen, ShoppingCart, Heart, TrendingUp, Bell, BarChart3, BookMarked } from "lucide-react";
import { UserInfo } from "./UserInfo";
import { StatisticsCard } from "./StatisticsCard";
import { RecentOrders } from "./RecentOrders";
import { BooksList } from "./BooksList";
import { OffersSection } from "./OffersSection";
import { motion } from "framer-motion";
import { useData } from "../context/DataContext";
export function UserDashboard() {
  const {
    profile
  } = useData();
  return <main className="min-h-screen bg-gray-50">
      <div className="max-w-[1600px] mx-auto p-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {profile.fullName.split(" ")[0]}! 👋
            </h1>
            <p className="text-gray-600 mt-1">
              Here's what's happening with your studies
            </p>
          </div>
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              3
            </span>
          </button>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }}>
              <StatisticsCard title="Monthly Spent" value="$245.50" change="+12.5%" icon={<TrendingUp className="w-6 h-6 text-purple-600" />} chart={[35, 60, 25, 65, 45, 75, 55]} />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }}>
              <StatisticsCard title="Books Bought" value="12" change="+3" icon={<Book className="w-6 h-6 text-blue-600" />} chart={[45, 30, 60, 25, 45, 65, 45]} />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }}>
              <StatisticsCard title="Wishlist" value="5" change="+2" icon={<Heart className="w-6 h-6 text-pink-600" />} chart={[25, 45, 55, 35, 55, 45, 65]} />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }}>
              <StatisticsCard title="Active Orders" value="2" change="0" icon={<ShoppingCart className="w-6 h-6 text-green-600" />} chart={[55, 45, 35, 55, 35, 45, 25]} />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-8">
              <RecentOrders />
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <BarChart3 className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold">Reading Progress</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        Introduction to Programming
                      </span>
                      <span className="text-sm font-medium text-purple-600">
                        75%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{
                      width: "75%"
                    }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        Data Structures
                      </span>
                      <span className="text-sm font-medium text-purple-600">
                        45%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-600 rounded-full" style={{
                      width: "45%"
                    }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg shadow p-6 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <BookMarked className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">Study Goals</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Reading Goal</p>
                      <p className="text-sm text-purple-100">
                        3 of 5 chapters this week
                      </p>
                    </div>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white rounded-full" style={{
                    width: "60%"
                  }} />
                  </div>
                </div>
              </div>
              <BooksList />
            </div>
          </div>
          <OffersSection />
        </div>
      </div>
    </main>;
}