import { AppBar, Toolbar, useTheme } from '@mui/material';

import LeftSide from './left-side';
import RightSide from './right-side';

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <LeftSide theme={theme} />
        <RightSide theme={theme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
