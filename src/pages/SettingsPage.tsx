import React, { useState } from "react";
import { User, CreditCard, Clock, Lock, LogOut, Trash2, ChevronRight, Plus, Check, AlertTriangle } from "lucide-react";
import { useData } from "../context/DataContext";
import { motion } from "framer-motion";
export function SettingsPage() {
  const {
    profile,
    paymentMethods,
    paymentHistory,
    addPaymentMethod,
    removePaymentMethod,
    setDefaultPaymentMethod,
    logout,
    deleteAccount,
    changePassword
  } = useData();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [passwordData, setPasswordData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const handlePasswordChange = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      return; // Show error
    }
    await changePassword(passwordData.oldPassword, passwordData.newPassword);
    setShowPasswordChange(false);
  };
  return <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Payment Methods
          </h2>
          <div className="space-y-4">
            {paymentMethods.map(method => <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <CreditCard className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium">{method.cardNumber}</p>
                    <p className="text-sm text-gray-500">
                      Expires {method.expiryDate}
                    </p>
                  </div>
                  {method.default && <span className="text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
                      Default
                    </span>}
                </div>
                <div className="flex items-center gap-2">
                  {!method.default && <button onClick={() => setDefaultPaymentMethod(method.id)} className="text-sm text-purple-600 hover:text-purple-700">
                      Make Default
                    </button>}
                  <button onClick={() => removePaymentMethod(method.id)} className="text-gray-400 hover:text-red-600">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>)}
            <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700">
              <Plus className="w-4 h-4" />
              <span>Add Payment Method</span>
            </button>
          </div>
        </div>
        {/* Payment History */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Payment History
          </h2>
          <div className="space-y-4">
            {paymentHistory.map(payment => <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">${payment.amount.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">{payment.date}</p>
                </div>
                <span className={`text-sm px-2 py-1 rounded-full ${payment.status === "completed" ? "bg-green-100 text-green-600" : payment.status === "pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-red-600"}`}>
                  {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                </span>
              </div>)}
          </div>
        </div>
        {/* Security */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Security</h2>
          <div className="space-y-4">
            <button onClick={() => setShowPasswordChange(true)} className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <Lock className="w-5 h-5 text-gray-400" />
                <span>Change Password</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button onClick={() => logout()} className="w-full flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <LogOut className="w-5 h-5 text-gray-400" />
                <span>Logout</span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
            <button onClick={() => setShowDeleteConfirm(true)} className="w-full flex items-center justify-between p-4 border border-red-200 rounded-lg hover:bg-red-50">
              <div className="flex items-center gap-4">
                <Trash2 className="w-5 h-5 text-red-500" />
                <span className="text-red-500">Delete Account</span>
              </div>
              <ChevronRight className="w-5 h-5 text-red-500" />
            </button>
          </div>
        </div>
        {/* Password Change Modal */}
        {showPasswordChange && <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input type="password" value={passwordData.oldPassword} onChange={e => setPasswordData(prev => ({
                ...prev,
                oldPassword: e.target.value
              }))} className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input type="password" value={passwordData.newPassword} onChange={e => setPasswordData(prev => ({
                ...prev,
                newPassword: e.target.value
              }))} className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input type="password" value={passwordData.confirmPassword} onChange={e => setPasswordData(prev => ({
                ...prev,
                confirmPassword: e.target.value
              }))} className="w-full p-2 border rounded-lg" />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <button onClick={() => setShowPasswordChange(false)} className="px-4 py-2 border rounded-lg">
                  Cancel
                </button>
                <button onClick={handlePasswordChange} className="px-4 py-2 bg-purple-600 text-white rounded-lg">
                  Change Password
                </button>
              </div>
            </div>
          </div>}
        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-6 w-full max-w-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-red-100 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold">Delete Account</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete your account? This action cannot
                be undone.
              </p>
              <div className="flex justify-end gap-2">
                <button onClick={() => setShowDeleteConfirm(false)} className="px-4 py-2 border rounded-lg">
                  Cancel
                </button>
                <button onClick={() => {
              deleteAccount();
              setShowDeleteConfirm(false);
            }} className="px-4 py-2 bg-red-600 text-white rounded-lg">
                  Delete Account
                </button>
              </div>
            </div>
          </div>}
      </div>
    </div>;
}