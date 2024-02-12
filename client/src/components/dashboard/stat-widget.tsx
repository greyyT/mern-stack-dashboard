import { Dashboard } from '@/types';
import StatBox from './stat-box';
import { useTheme } from '@mui/material';
import { Email, PersonAdd, PointOfSale, Traffic } from '@mui/icons-material';

const StatWidget = ({ data, isNonMediumScreens }: { data: Dashboard | undefined; isNonMediumScreens: boolean }) => {
  const theme = useTheme() as any;
  return (
    <>
      <StatBox
        title="Total Customers"
        value={data && data.totalCustomers}
        increase="+14%"
        description="Since last month"
        icon={<Email sx={{ color: theme.palette.secondary[300], fontSize: '26px' }} />}
      />
      <StatBox
        title="Sales Today"
        value={data && data.todayStats.totalSales}
        increase="+21%"
        description="Since last month"
        icon={<PointOfSale sx={{ color: theme.palette.secondary[300], fontSize: '26px' }} />}
      />
      <StatBox
        title="Monthly Sales"
        value={data && data.thisMonthStats.totalSales}
        increase="+5%"
        description="Since last month"
        icon={<PersonAdd sx={{ color: theme.palette.secondary[300], fontSize: '26px' }} />}
        rowStart={isNonMediumScreens ? '2' : undefined}
      />
      <StatBox
        title="Yearly Sales"
        value={data && data.yearlySalesTotal}
        increase="+43%"
        description="Since last month"
        icon={<Traffic sx={{ color: theme.palette.secondary[300], fontSize: '26px' }} />}
        rowStart={isNonMediumScreens ? '2' : undefined}
      />
    </>
  );
};

export default StatWidget;
