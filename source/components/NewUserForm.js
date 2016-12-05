import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../utils/Styles';
// pasar a container
import muiTheme from '../utils/MuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';

class NewUserForm extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h2> Registration Information </h2>
          <TextField
            onChange={this.props.handleChangeTextFieldNewUser.bind(this, 'inputUser')}
            hintText='User Name'
          />
          <TextField
            onChange={this.props.handleChangeTextFieldNewUser.bind(this, 'inputPassword')}
            hintText='Password'
          />
          <RaisedButton
            label="Register"
            primary={true}
            onClick = {this.props.onClickRegister}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default NewUserForm;
