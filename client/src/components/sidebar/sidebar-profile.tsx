import { Box, Divider, Typography } from '@mui/material';

import FlexBetween from '@/components/flex-between';
import { profileImage } from '@/assets';
import { SettingsOutlined } from '@mui/icons-material';

interface SidebarProfileProps {
  user: any;
  theme: any;
}

const SidebarProfile = ({ user, theme }: SidebarProfileProps) => {
  return (
    <Box position="absolute" bottom="2rem">
      <Divider />
      <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0rem 3rem">
        <Box
          component="img"
          alt="profile"
          src={profileImage}
          height="40px"
          width="40px"
          borderRadius="50%"
          sx={{ objectFit: 'cover' }}
        />
        <Box textAlign="left">
          <Typography fontWeight="bold" fontSize="0.9rem" sx={{ color: theme.palette.secondary[100] }}>
            {user?.name}
          </Typography>
          <Typography fontSize="0.8rem" sx={{ color: theme.palette.secondary[200] }}>
            {user?.occupation}
          </Typography>
        </Box>
        <SettingsOutlined sx={{ color: theme.palette.secondary[300], fontSize: '25px' }} />
      </FlexBetween>
    </Box>
  );
};

export default SidebarProfile;
