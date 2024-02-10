import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from '@mui/x-data-grid';
import FlexBetween from './flex-between';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';

interface DataGridCustomToolbarProps {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const DataGridCustomToolbar = ({ searchInput, setSearchInput, setSearch }: DataGridCustomToolbarProps) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </FlexBetween>
        <TextField
          label="Search..."
          sx={{ mb: '0.5rem', width: '15rem' }}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setSearch(searchInput);
                    setSearchInput('');
                  }}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
