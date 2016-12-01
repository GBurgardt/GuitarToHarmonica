import React, { PropTypes as T } from 'react';
import MajorScaleToHarmonicaForm from '../components/MajorScaleToHarmonicaForm';
import _ from 'lodash';
import {writeUserData} from '../utils/Firebase';


class MajorScaleToHarmonicaContainer extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleChangeTextFieldMajorScale = this.handleChangeTextFieldMajorScale.bind(this);
    this.onClickTransformScaleToHarmonica = this.onClickTransformScaleToHarmonica.bind(this);
    this.state = {
      inputNotesScale: '',
      notesHarmonica: []
    };
  }

  handleChangeTextFieldMajorScale(currentTextFieldInput, eventTextField){
    let state = {};
    state[currentTextFieldInput] = eventTextField.target.value;
    this.setState(state);
  }

  onClickTransformScaleToHarmonica(){
    let state = {};
    state['notesHarmonica'] = this.transformMajorScaleToHarmonica(this.state.inputNotesScale.split(" "));
    this.setState(state);

    writeUserData('1', 'Pedro', 'pedro@pedro.com');

  }

  getTransformedNoteOctaveLow(note1){
    let auxNote;
    switch (note1) {
      case '4':
        return '-2bb';
        break;
      case '6':
        return '-3b';
        break;
      case '7':
        return '-3';
        break;
    }
    auxNote = this.getTransformedNoteToArmonica(note1);
    return (Math.abs(parseInt(auxNote)) - 3)*Math.sign(parseInt(auxNote));
  }

  getTransformedNoteOctaveHigh(note1){
    let auxNote;
    if (note1 === '7') return '10b';
    auxNote = this.getTransformedNoteToArmonica(note1);
    return ((note1 % 2 ==! 0) ? (parseInt(auxNote) + 3).toString() : (parseInt(auxNote) - 4).toString());
  }

  getTransformedNoteToArmonica(note){
    let auxNote, returnNote;
    returnNote = 0;
    let changeOctave = false;
    note.split("").forEach(function(partialNote){
      if(partialNote === '\''){
        changeOctave = true;
      }
    });

    if(changeOctave){
      if (note[0] === '\''){
          returnNote = this.getTransformedNoteOctaveLow(note[1]);
      }else if (note[1] === '\''){
          returnNote = this.getTransformedNoteOctaveHigh(note[0]);
      }
    }

    // this if let better perfomance?
    if(note % 2 ==! 0) {
      switch (note) {
        case '1':
          returnNote = '4';
          break;
        case '3':
          returnNote = '5';
          break;
        case '5':
          returnNote = '6';
          break;
        case '7':
          returnNote = '-7';
          break;
      }
    }else{
      switch (note) {
        case '2':
          returnNote = '-4';
          break;
        case '4':
          returnNote = '-5';
          break;
        case '6':
          returnNote = '-6';
          break;
      }
    }


    return returnNote;
  }


  transformMajorScaleToHarmonica(majorScale){
    let self = this;
    // change function to arrowFunction
    return majorScale.map(function(note){
      return self.getTransformedNoteToArmonica(note);
    });
  }

  render() {
    return (
      <div>
        <MajorScaleToHarmonicaForm
          handleChangeTextFieldMajorScale = {this.handleChangeTextFieldMajorScale}
          onClickTransformScaleToHarmonica = {this.onClickTransformScaleToHarmonica}
          notesHarmonica = {this.state.notesHarmonica}
        />
      </div>
    );
  }
}

export default MajorScaleToHarmonicaContainer;

/*
let Paragraph = () => {
  return <div className="MySuperTable">
    <Text name="Dodo" startDate={ (new Date()).toString() } />
  </div>
};
*/
