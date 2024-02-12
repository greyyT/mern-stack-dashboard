import { Box, Button, useMediaQuery, useTheme } from '@mui/material';
import { DownloadOutlined } from '@mui/icons-material';

import FlexBetween from '@/components/ui/flex-between';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/ui/header';
import { useGetDashboardQuery } from '@/state/api';
import StatWidget from '@/components/dashboard/stat-widget';
import StatTable from '@/components/dashboard/stat-table';
import StatLineChart from '@/components/dashboard/stat-line-chart';
import StatPieChart from '@/components/dashboard/stat-pie-chart';

const Dashboard = () => {
  const theme = useTheme() as any;
  const { data, isLoading } = useGetDashboardQuery(null);
  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');

  return (
    <Box m="1.5rem 2rem">
      <FlexBetween>
        <Header>
          <HeaderTitle>DASHBOARD</HeaderTitle>
          <HeaderSubtitle>Welcome to your dashboard</HeaderSubtitle>
        </Header>
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
          >
            <DownloadOutlined sx={{ mr: '10px' }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          '& > div': { gridColumn: isNonMediumScreens ? undefined : 'span 12' },
        }}
      >
        <StatWidget data={data} isNonMediumScreens={isNonMediumScreens} />
        <StatLineChart />
        <StatTable data={data} isLoading={isLoading} />
        <StatPieChart />
      </Box>
    </Box>
  );
};

export default Dashboard;
