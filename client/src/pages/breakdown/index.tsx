import { Box } from '@mui/material';

import { Header, HeaderSubtitle, HeaderTitle } from '@/components/ui/header';
import BreakdownChart from '@/components/breakdown-chart';

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header>
        <HeaderTitle>BREAKDOWN</HeaderTitle>
        <HeaderSubtitle>Breakdown of Sales By Category</HeaderSubtitle>
      </Header>
      <Box mt="40px" height="75vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
};

export default Breakdown;
