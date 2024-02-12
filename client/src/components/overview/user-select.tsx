import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface UserInputProps {
  view: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const UserSelect = ({ view, setView }: UserInputProps) => {
  return (
    <FormControl sx={{ mt: '1rem' }}>
      <InputLabel>View</InputLabel>
      <Select value={view} label="View" onChange={(e) => setView(e.target.value)}>
        <MenuItem value="sales">Sales</MenuItem>
        <MenuItem value="units">Units</MenuItem>
      </Select>
    </FormControl>
  );
};

export default UserSelect;
