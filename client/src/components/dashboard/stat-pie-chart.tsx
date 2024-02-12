import { Box, Typography, useTheme } from '@mui/material';
import BreakdownChart from '../breakdown-chart';

const StatPieChart = () => {
  const theme = useTheme() as any;
  return (
    <Box
      gridColumn="span 4"
      gridRow="span 3"
      p="1.5rem"
      borderRadius="0.55rem"
      sx={{
        backgroundColor: theme.palette.background.alt,
      }}
    >
      <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
        Sales By Category
      </Typography>
      <BreakdownChart isDashboard />
      <Typography p="0 0.6rem" fontSize="0.8rem" sx={{ color: theme.palette.secondary[200] }}>
        Breakdown of real states and information via category for revenue made for this year and total sales.
      </Typography>
    </Box>
  );
};

export default StatPieChart;
