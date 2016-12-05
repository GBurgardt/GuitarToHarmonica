import _ from 'lodash';
import React, { PropTypes as T } from 'react';
import NewUserForm from '../components/NewUserForm';
//import {writeNewUser, writeNewFavoriteSong} from '../utils/Firebase';

class MajorScaleToHarmonicaContainer extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handleChangeTextFieldMajorScale = this.handleChangeTextFieldMajorScale.bind(this);
    this.onClickTransformScaleToHarmonica = this.onClickTransformScaleToHarmonica.bind(this);
    
  }

  render() {
    return (
      <div>
        <NewUserForm
          handleChangeTextFieldNewUser = {this.props.handleChangeTextFieldNewUser}
          onClickTransformScaleToHarmonica = {this.onClickTransformScaleToHarmonica}
          notesHarmonica = {this.state.notesHarmonica}
        />
      </div>
    );
  }
}

export default MajorScaleToHarmonicaContainer;
