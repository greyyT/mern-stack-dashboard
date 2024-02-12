import { Box, useTheme } from '@mui/material';

import OverviewChart from '@/components/overview/overview-chart';

const StatLineChart = () => {
  const theme = useTheme() as any;

  return (
    <Box
      gridColumn="span 8"
      gridRow="span 2"
      p="1rem"
      borderRadius="0.55rem"
      sx={{
        backgroundColor: theme.palette.background.alt,
      }}
    >
      <OverviewChart view="sales" isDashboard />
    </Box>
  );
};

export default StatLineChart;
