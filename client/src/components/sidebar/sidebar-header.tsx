import { Box, IconButton, Typography } from '@mui/material';
import FlexBetween from '../flex-between';
import { ChevronLeft } from '@mui/icons-material';

interface SidebarHeaderProps {
  theme: any;
  isNonMobile: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarHeader = ({ theme, isNonMobile, setIsSidebarOpen }: SidebarHeaderProps) => {
  return (
    <Box m="1.5rem 2rem 2rem 3rem">
      <FlexBetween color={theme.palette.secondary.main}>
        <Box display="flex" alignItems="center" gap="0.5rem">
          <Typography variant="h4" fontWeight="bold">
            ECOMVISION
          </Typography>
        </Box>
        {!isNonMobile && (
          <IconButton onClick={() => setIsSidebarOpen((state) => !state)}>
            <ChevronLeft />
          </IconButton>
        )}
      </FlexBetween>
    </Box>
  );
};

export default SidebarHeader;
