import { CssBaseline, ThemeOptions, ThemeProvider, createTheme } from '@mui/material';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

import { themeSettings } from './theme';

const App = () => {
  const mode = useSelector((state: any) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode) as ThemeOptions), [mode]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </div>
  );
};

export default App;
