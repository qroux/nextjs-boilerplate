import { ReactNode, useContext } from 'react';
import Navbar from './Navbar';
import { Context as AppContext } from '../globalState/context/AppContext';
import { darkTheme } from '../../styles/theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

export default function Layout({ children }: { children: ReactNode }) {
  const {
    state: { darkMode },
  } = useContext(AppContext);
  const theme = darkTheme(darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          minHeight: '100vh',
          boxSizing: 'border-box',
        }}>
        <Navbar />
        {children}
      </div>
    </ThemeProvider>
  );
}
