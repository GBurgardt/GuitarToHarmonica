import React, { PropTypes as T } from 'react';
import _ from 'lodash';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import muiTheme from '../utils/MuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ExpandableTest extends React.Component {
  constructor(props, context){
    super(props, context);
    this.onExpandChange = this.onExpandChange.bind(this) ;
    this.state = {
      showDetails: false
    };
  }


  onExpandChange(x){
    this.setState({showDetails: x})
  }

  render() {
    var on_show_styles = {maxHeight: "2000px", transition: "max-height 1s ease-in", overflow: "hidden"};
    var on_hide_styles = {maxHeight: "0", transition: "max-height 0.5s ease-out", overflow: "hidden"};

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Card onExpandChange={this.onExpandChange}>
          <CardHeader
            title="I lost my rubber duck"
            subtitle="Click here to help me find it"
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText style={this.state.showDetails ? on_show_styles : on_hide_styles}>
            <div>
              <p><b>Description:</b></p>
              <p>Here are the details about my rubber duck</p>
            </div>
          </CardText>
        </Card>
      </MuiThemeProvider>
    )
  }

}

export default ExpandableTest;
