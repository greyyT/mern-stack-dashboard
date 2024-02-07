import { IconButton, InputBase } from '@mui/material';
import FlexBetween from '../flex-between';
import { Menu, Search } from '@mui/icons-material';

interface LeftSideProps {
  theme: any;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeftSide = ({ theme, setIsSidebarOpen }: LeftSideProps) => {
  return (
    <FlexBetween>
      <IconButton onClick={() => setIsSidebarOpen((prevState) => !prevState)}>
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
