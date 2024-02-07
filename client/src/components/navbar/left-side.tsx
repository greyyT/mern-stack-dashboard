import { IconButton, InputBase } from '@mui/material';
import FlexBetween from '../flex-between';
import { Menu, Search } from '@mui/icons-material';

const LeftSide = ({ theme }: { theme: any }) => {
  return (
    <FlexBetween>
      <IconButton onClick={() => console.log('openSidebar')}>
        <Menu />
      </IconButton>
      <FlexBetween bgcolor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
        <InputBase placeholder="Search..." />
        <IconButton>
          <Search />
        </IconButton>
      </FlexBetween>
    </FlexBetween>
  );
};

export default LeftSide;
