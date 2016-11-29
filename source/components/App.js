import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { PropTypes as T } from 'react'
import MajorScaleToHarmonicaContainer from '../containers/MajorScaleToHarmonicaContainer';
import { Link } from 'react-router';

injectTapEventPlugin();

// borrar divs
class App extends React.Component {
  render() {
    return (
      <div>
        <MajorScaleToHarmonicaContainer />
      </div>
    );
  }
}

export default App;
