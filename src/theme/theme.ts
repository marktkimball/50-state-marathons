import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

export const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    primary: blue,
    secondary: {
      light: '#FFF',
      main: '#FFF',
      dark: '#000',
      contrastText: '#FFF',
    },
  },
});
