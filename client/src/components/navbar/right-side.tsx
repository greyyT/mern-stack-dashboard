import { useDispatch } from 'react-redux';
import FlexBetween from '../flex-between';
import { IconButton } from '@mui/material';
import { setMode } from '@/state';
import { DarkModeOutlined, LightModeOutlined, SettingsOutlined } from '@mui/icons-material';
import NavbarProfile from './navbar-profile';

const RightSide = ({ user, theme }: { user: any; theme: any }) => {
  const dispatch = useDispatch();

  return (
    <FlexBetween gap="1.5rem">
      <IconButton onClick={() => dispatch(setMode())}>
        {theme.palette.mode === 'dark' ? (
          <DarkModeOutlined sx={{ fontSize: '25px' }} />
        ) : (
          <LightModeOutlined sx={{ fontSize: '25px' }} />
        )}
      </IconButton>
      <IconButton>
        <SettingsOutlined sx={{ fontSize: '25px' }} />
      </IconButton>
      <NavbarProfile user={user} />
    </FlexBetween>
  );
};

export default RightSide;
