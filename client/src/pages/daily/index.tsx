import { useState } from 'react';
import { Box } from '@mui/material';
import { Header, HeaderSubtitle, HeaderTitle } from '@/components/ui/header';

import DailyDatePicker from '@/components/daily/date-picker';
import DailyChart from '@/components/daily/daily-chart';

const Daily = () => {
  const [startDate, setStartDate] = useState(new Date('2021-02-01'));
  const [endDate, setEndDate] = useState(new Date('2021-03-01'));

  return (
    <Box m="1.5rem 2.5rem">
      <Header>
        <HeaderTitle>DAILY SALES</HeaderTitle>
        <HeaderSubtitle>Chart of daily sales</HeaderSubtitle>
      </Header>
      <Box height="75vh">
        <DailyDatePicker startDate={startDate} endDate={endDate} setStartDate={setStartDate} setEndDate={setEndDate} />
        <DailyChart startDate={startDate} endDate={endDate} />
      </Box>
    </Box>
  );
};

export default Daily;
