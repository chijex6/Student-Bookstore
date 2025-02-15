import React, { useState, createContext, useContext } from "react";
type PaymentMethod = {
  id: string;
  cardNumber: string;
  expiryDate: string;
  default: boolean;
};
type PaymentHistory = {
  id: string;
  date: string;
  amount: number;
  items: string[];
  status: "completed" | "pending" | "failed";
};
type Book = {
  id: string;
  title: string;
  code: string;
  department: string;
  price: number;
  level: string;
  available: boolean;
};
type UserProfile = {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  department: string;
  level: string;
  avatar?: string;
};
type DataContextType = {
  profile: UserProfile;
  updateProfile: (data: Partial<UserProfile>) => void;
  books: Book[];
  recommendedBooks: Book[];
  paymentMethods: PaymentMethod[];
  addPaymentMethod: (method: Omit<PaymentMethod, "id">) => void;
  removePaymentMethod: (id: string) => void;
  setDefaultPaymentMethod: (id: string) => void;
  paymentHistory: PaymentHistory[];
  logout: () => void;
  deleteAccount: () => void;
  changePassword: (oldPassword: string, newPassword: string) => Promise<void>;
};
const DataContext = createContext<DataContextType | undefined>(undefined);
export function DataProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [profile, setProfile] = useState<UserProfile>({
    fullName: "John Smith",
    email: "john.smith@university.edu",
    phone: "+1 234 567 8900",
    address: "123 Campus Street, University City, ST 12345",
    department: "Computer Science",
    level: "Year 2"
  });
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([{
    id: "1",
    cardNumber: "**** **** **** 4242",
    expiryDate: "12/24",
    default: true
  }]);
  const [paymentHistory] = useState<PaymentHistory[]>([{
    id: "1",
    date: "2024-01-15",
    amount: 79.99,
    items: ["Introduction to Programming"],
    status: "completed"
  }]);
  const [books] = useState<Book[]>([
    // Your books data here
  ]);
  const [recommendedBooks] = useState<Book[]>([
    // Your recommended books data here
  ]);
  const updateProfile = (data: Partial<UserProfile>) => {
    setProfile(prev => ({
      ...prev,
      ...data
    }));
  };
  const addPaymentMethod = (method: Omit<PaymentMethod, "id">) => {
    const newMethod = {
      ...method,
      id: Date.now().toString()
    };
    setPaymentMethods(prev => [...prev, newMethod]);
  };
  const removePaymentMethod = (id: string) => {
    setPaymentMethods(prev => prev.filter(method => method.id !== id));
  };
  const setDefaultPaymentMethod = (id: string) => {
    setPaymentMethods(prev => prev.map(method => ({
      ...method,
      default: method.id === id
    })));
  };
  const logout = () => {
    // Implement logout logic
  };
  const deleteAccount = () => {
    // Implement account deletion logic
  };
  const changePassword = async (oldPassword: string, newPassword: string) => {
    // Implement password change logic
  };
  return <DataContext.Provider value={{
    profile,
    updateProfile,
    books,
    recommendedBooks,
    paymentMethods,
    addPaymentMethod,
    removePaymentMethod,
    setDefaultPaymentMethod,
    paymentHistory,
    logout,
    deleteAccount,
    changePassword
  }}>
      {children}
    </DataContext.Provider>;
}
export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}