import { useState } from 'react';
import { Box, Button, Menu, MenuItem, Typography, useTheme } from '@mui/material';

import FlexBetween from '../flex-between';
import { profileImage } from '@/assets';
import { ArrowDropDownOutlined } from '@mui/icons-material';

const NavbarProfile = ({ user }: { user: any }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const theme = useTheme() as any;

  return (
    <FlexBetween>
      <Button
        onClick={handleClick}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          textTransform: 'none',
          gap: '1rem',
        }}
      >
        <Box
          component="img"
          alt="profile"
          src={profileImage}
          height="32px"
          width="32px"
          borderRadius="50%"
          sx={{ objectFit: 'cover' }}
        />
        <Box textAlign="left">
          <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: theme.palette.secondary[100] }}>
            {user?.name}
          </Typography>
          <Typography fontSize="0.75rem" sx={{ color: theme.palette.secondary[200] }}>
            {user?.occupation}
          </Typography>
        </Box>
        <ArrowDropDownOutlined sx={{ color: theme.palette.secondary[300], fontSize: '25px' }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <MenuItem onClick={handleClose}>Log Out</MenuItem>
      </Menu>
    </FlexBetween>
  );
};

export default NavbarProfile;
