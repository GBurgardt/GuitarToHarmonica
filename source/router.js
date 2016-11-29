import React from 'react';
import { Router, Route, browserHistory, IndexRedirect} from 'react-router';
import App from './components/App';
import MajorScaleToHarmonicaContainer from './containers/MajorScaleToHarmonicaContainer';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRedirect to="/majorScaleToHarmonica" />
      <Route path="/majorScaleToHarmonica" component={MajorScaleToHarmonicaContainer} />
    </Route>
  </Router>
);
