import { Box, Drawer, List, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SidebarHeader from './sidebar-header';
import { navItems } from '@/utils/constants';
import SidebarItem from './sidebar-item';
import SidebarProfile from './sidebar-profile';

interface SidebarProps {
  user: any;
  isNonMobile: boolean;
  drawerWidth: string;
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ user, isNonMobile, drawerWidth, isSidebarOpen, setIsSidebarOpen }: SidebarProps) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('');
  const theme = useTheme() as any;

  // Anytime url changes, set active to the approriate pathname
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              width: drawerWidth,
            },
          }}
        >
          <Box width="100%">
            <SidebarHeader isNonMobile={isNonMobile} setIsSidebarOpen={setIsSidebarOpen} theme={theme} />
            <List>
              {navItems.map(({ text, Icon }, idx: number) => (
                <SidebarItem key={idx} active={active} theme={theme} text={text} Icon={Icon} />
              ))}
            </List>
          </Box>
          <SidebarProfile user={user} theme={theme} />
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
