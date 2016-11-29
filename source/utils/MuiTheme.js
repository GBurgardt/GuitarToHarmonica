import {deepOrange500, deepOrange800} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const MuiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange800,
    accent1Color: deepOrange500,
  },
});

export default MuiTheme;
