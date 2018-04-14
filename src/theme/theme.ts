import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import amber from 'material-ui/colors/amber';

export const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    primary: blue,
    secondary: amber,
  },
});
