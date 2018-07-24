import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import EmailList from './EmailList';

class Dashboard extends Component {

  render() {
    return(
      <Grid columns='equal'>
        <Grid.Column>
          <Segment>1</Segment>
        </Grid.Column>
        <Grid.Column width={14}>
          <EmailList />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Dashboard;