import { createMuiTheme } from 'material-ui/styles';
import green from 'material-ui/colors/green';
import yellow from 'material-ui/colors/yellow';

export const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  },
  palette: {
    primary: green,
    secondary: yellow,
  },
});
