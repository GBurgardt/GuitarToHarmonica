import React, { PropTypes as T } from 'react';
import MajorScaleToHarmonicaForm from '../components/MajorScaleToHarmonicaForm';

class MajorScaleToHarmonicaContainer extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleChangeTextFieldMajorScale = this.handleChangeTextFieldMajorScale.bind(this);
    this.onClickTransformScaleToHarmonica = this.onClickTransformScaleToHarmonica.bind(this);
    this.state = {
      inputNotesScale: ''
    };
  }

  //Change with --> handleChange = (event, index, value) => this.setState({value});
  handleChangeTextFieldMajorScale(currentTextFieldInput, eventTextField){
    let state = {};
    state[currentTextFieldInput] = eventTextField.target.value;
    this.setState(state);
  }

  onClickTransformScaleToHarmonica(){
    let collectionNotes;
    let self = this;
    collectionNotes = this.state.inputNotesScale.split(" ").map(function(note){
      return self.getTransformedNoteToArmonica(note);
    })

    console.log(collectionNotes);
  }

  // change swicht with json
  getTransformedNoteToArmonica(note){
    // this if let better perfomance?
    if(note % 2 ==! 0) {
      switch (note) {
        case '1':
          return '4';
          break;
        case '3':
          return '5';
          break;
        case '5':
          return '6';
          break;
        case '7':
          return '-7';
          break;
      }
    }else{
      switch (note) {
        case '2':
          return '-4';
          break;
        case '4':
          return '-5';
          break;
        case '6':
          return '-6';
          break;
        case `1'`:
          return '7';
          break;
      }
    }
  }

  render() {
    return (
      <div>
        <MajorScaleToHarmonicaForm
          handleChangeTextFieldMajorScale = {this.handleChangeTextFieldMajorScale}
          onClickTransformScaleToHarmonica = {this.onClickTransformScaleToHarmonica}
        />
      </div>
    );
  }
}

export default MajorScaleToHarmonicaContainer;
