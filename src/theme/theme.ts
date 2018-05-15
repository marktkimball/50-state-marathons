import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import amber from '@material-ui/core/colors/amber';

export const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    primary: blue,
    secondary: amber,
  },
});
