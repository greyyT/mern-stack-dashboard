import { AppBar, Toolbar, useTheme } from '@mui/material';

import LeftSide from './left-side';
import RightSide from './right-side';
import { UserProfile } from '@/types';

interface NavbarProps {
  user: UserProfile | object;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ user, setIsSidebarOpen }: NavbarProps) => {
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
        <LeftSide setIsSidebarOpen={setIsSidebarOpen} theme={theme} />
        <RightSide user={user} theme={theme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
