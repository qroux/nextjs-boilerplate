import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';

export const paletteColorsDark = {
  primary: '#003952',
  secondary: '#01638D',
  error: '#FB9F89',
  background: '#1b262c',
  text: '#EADEDA',
};

export const paletteColorsLight = {
  primary: '#6886c5',
  secondary: '#ffbf99',
  error: '#E44C65',
  background: '#f9f9f9',
  text: '#050505',
};

export const darkTheme = (dark: boolean): ThemeOptions => {
  const paletteColors = dark ? paletteColorsDark : paletteColorsLight;

  return createMuiTheme({
    palette: {
      type: dark ? 'dark' : 'light',
      primary: {
        main: paletteColors.primary,
      },
      secondary: {
        main: paletteColors.secondary,
      },
      error: {
        main: paletteColors.error,
      },
      background: {
        default: paletteColors.background,
      },
      text: {
        primary: paletteColors.text,
      },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          body: {
            transition: 'all 0.3s linear',
          },
        },
      },
    },
  });
};
