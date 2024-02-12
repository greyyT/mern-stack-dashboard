import { Box } from '@mui/material';
import { useState } from 'react';

import OverviewChart from '@/components/overview/overview-chart';
import UserSelect from '@/components/overview/user-select';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/ui/header';

const Overview = () => {
  const [view, setView] = useState('units');

  return (
    <Box m="1.5rem 2.5rem">
      <Header>
        <HeaderTitle>OVERVIEW</HeaderTitle>
        <HeaderSubtitle>Overview of general revenue and profit</HeaderSubtitle>
      </Header>
      <Box height="75vh">
        <UserSelect view={view} setView={setView} />
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
