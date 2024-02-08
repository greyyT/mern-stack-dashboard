import { Box, Typography, useTheme } from '@mui/material';

export const Header = ({ children }: { children: React.ReactNode }) => {
  return <Box>{children}</Box>;
};

export const HeaderTitle = ({ children }: { children: string }) => {
  const theme = useTheme() as any;

  return (
    <Typography variant="h2" color={theme.palette.secondary[100]} fontWeight="bold" sx={{ mb: '5px' }}>
      {children}
    </Typography>
  );
};

export const HeaderSubtitle = ({ children }: { children: string }) => {
  const theme = useTheme() as any;

  return (
    <Typography variant="h5" color={theme.palette.secondary[300]}>
      {children}
    </Typography>
  );
};
