import { useDispatch } from 'react-redux';
import FlexBetween from '../flex-between';
import { IconButton, Theme } from '@mui/material';
import { setMode } from '@/state';
import { DarkModeOutlined, LightModeOutlined, SettingsOutlined } from '@mui/icons-material';

const RightSide = ({ theme }: { theme: Theme }) => {
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
    </FlexBetween>
  );
};

export default RightSide;
