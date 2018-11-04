import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: '#ffcd38',
      main: '#ffc107',
      dark: '#b28704',
      contrastText: '#fff',
    },
    secondary: {
      light: '#cddcf4',
      main: '#cddcdd',
      dark: '#aaaccc',
      contrastText: '#000',
    },
  },
});

export default theme