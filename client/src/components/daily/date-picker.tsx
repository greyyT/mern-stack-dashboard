import { Box } from '@mui/material';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface DailyDatePickerProps {
  startDate: Date;
  setStartDate: React.Dispatch<React.SetStateAction<Date>>;
  endDate: Date;
  setEndDate: React.Dispatch<React.SetStateAction<Date>>;
}

const DailyDatePicker = ({ startDate, endDate, setStartDate, setEndDate }: DailyDatePickerProps) => {
  return (
    <Box display="flex" justifyContent="flex-end">
      <Box>
        <DatePicker
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
      </Box>
      <Box>
        <DatePicker
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </Box>
    </Box>
  );
};

export default DailyDatePicker;
