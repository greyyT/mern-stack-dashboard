import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutline,
  PointOfSaleOutlined,
  PublicOutlined,
  ReceiptLongOutlined,
  ShoppingCartOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from '@mui/icons-material';

const navItems = [
  {
    text: 'Dashboard',
    Icon: HomeOutlined,
  },
  {
    text: 'Client Facing',
    Icon: null,
  },
  {
    text: 'Products',
    Icon: ShoppingCartOutlined,
  },
  {
    text: 'Customers',
    Icon: Groups2Outlined,
  },
  {
    text: 'Transactions',
    Icon: ReceiptLongOutlined,
  },
  {
    text: 'Geography',
    Icon: PublicOutlined,
  },
  {
    text: 'Sales',
    Icon: null,
  },
  {
    text: 'Overview',
    Icon: PointOfSaleOutlined,
  },
  {
    text: 'Daily',
    Icon: TodayOutlined,
  },
  {
    text: 'Monthly',
    Icon: CalendarMonthOutlined,
  },
  {
    text: 'Breakdown',
    Icon: PieChartOutline,
  },
  {
    text: 'Management',
    Icon: null,
  },
  {
    text: 'Admin',
    Icon: AdminPanelSettingsOutlined,
  },
  {
    text: 'Performance',
    Icon: TrendingUpOutlined,
  },
];

export { navItems };
