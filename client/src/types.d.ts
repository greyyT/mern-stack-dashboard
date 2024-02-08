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
