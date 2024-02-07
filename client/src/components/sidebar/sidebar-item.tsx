import { ChevronRightOutlined } from '@mui/icons-material';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { useNavigate } from 'react-router-dom';

type SidebarItem = {
  active: string;
  theme: any;
  text: string;
  Icon: (OverridableComponent<SvgIconTypeMap<object, 'svg'>> & { muiName: string }) | null | undefined;
};

const SidebarItem = ({ active, theme, text, Icon }: SidebarItem) => {
  const navigate = useNavigate();

  if (!Icon) {
    return (
      <Typography key={text} sx={{ m: '2.25rem 0 1rem 3rem' }}>
        {text}
      </Typography>
    );
  }

  const lowerCaseText = text.toLowerCase();

  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => navigate(`/${lowerCaseText}`)}
        sx={{
          backgroundColor: active === lowerCaseText ? theme.palette.secondary[300] : 'transparent',
          color: active === lowerCaseText ? theme.palette.primary[600] : theme.palette.secondary[100],
        }}
      >
        <ListItemIcon
          sx={{
            ml: '2rem',
            color: active === lowerCaseText ? theme.palette.primary[600] : theme.palette.secondary[200],
          }}
        >
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
        {active === lowerCaseText && <ChevronRightOutlined sx={{ ml: 'auto' }} />}
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
