import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Button } from 'semantic-ui-react';
import EmailList from './EmailList';

class Dashboard extends Component {

  render() {
    return(
      <Grid columns='equal'>
        <Grid.Column>
          <Segment inverted>
            <Link to="/form">
              <Button inverted>Create</Button>
            </Link>
          </Segment>
        </Grid.Column>
        <Grid.Column width={14}>
          <EmailList />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Dashboard;