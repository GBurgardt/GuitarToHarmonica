import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from '../utils/Styles';
// pasar a container
import muiTheme from '../utils/MuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';
import TextField from 'material-ui/TextField';

class MajorScaleToHarmonicaForm extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <h1>Guitar to Harmonica</h1>
          <h3>Ingresed notes of the major scale</h3>
          <TextField
            onChange={this.props.handleChangeTextFieldMajorScale.bind(this, 'inputNotesScale')}
            hintText='Notes of the Song'
          />
          <RaisedButton
            label="Transform"
            primary={true}
            onClick = {this.props.onClickTransformScaleToHarmonica}
          />
          <div>
            {this.props.notesHarmonica.map(function(note){
              return note + " ";
            })}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default MajorScaleToHarmonicaForm;
