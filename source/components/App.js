import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { PropTypes as T } from 'react'
import MajorScaleToHarmonicaContainer from '../containers/MajorScaleToHarmonicaContainer';
import { Link } from 'react-router';

import ExpandableTest from '../containers/ExpandableTest';


injectTapEventPlugin();

// borrar divs
class App extends React.Component {
  render() {
    return (
      <div>
        <ExpandableTest />
      </div>
    );
  }
}

export default App;
