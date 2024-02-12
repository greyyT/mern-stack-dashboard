// USER TYPES

export interface UserProfile {
  _id: string;
  name: string;
  email: string;
  city: string;
  state: string | null;
  country: string;
  occupation: string;
  phoneNumber: string;
  transactions: string[];
  role: string;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

// PRODUCT TYPES

interface ProductDailyStat {
  date: string;
  totalSales: number;
  totalUnits: number;
  _id: string;
}

interface ProductMonthlyStat {
  month: string;
  totalSales: number;
  totalUnits: number;
  _id: string;
}

export interface ProductStats {
  _id: string;
  productId: string;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  monthlyData: ProductMonthlyStat[];
  dailyData: ProductDailyStat[];
}

export interface ProductWithStats {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  rating: number;
  supply: string;
  _v: number;
  createdAt: string;
  updatedAt: string;
  stat: ProductStats;
}

// TRANSACTION TYPES
interface Transaction {
  _id: string;
  userId: string;
  cost: string;
  product: string[];
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export interface Transactions {
  transactions: Transaction[];
  total: number;
}

// SALES TYPES
interface Sales {
  _id: string;
  totalCustomers: number;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  year: number;
  monthlyData: ProductMonthlyStat[];
  dailyData: ProductDailyStat[];
  salesByCategory: {
    shoes: number;
    clothing: number;
    accessories: number;
    misc: number;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// PERFORMANCE TYPES

interface UserWithStats extends UserProfile {
  affiliateStats: {
    _id: string;
    userId: string;
    affiliateSales: string[];
    __v: number;
    createdAt: string;
    updatedAt: string;
  };
}
export interface UserPerformance {
  user: UserWithStats;
  sales: Transaction[];
}

// DASHBOARD TYPES
export interface Dashboard {
  totalCustomers: number;
  yearlySalesTotal: number;
  yearlyTotalSoldUnits: number;
  monthlyData: ProductMonthlyStat[];
  salesByCategory: {
    shoes: number;
    clothing: number;
    accessories: number;
    misc: number;
  };
  thisMonthStats: ProductMonthlyStat;
  todayStats: ProductDailyStat;
  transactions: Transaction[];
}
