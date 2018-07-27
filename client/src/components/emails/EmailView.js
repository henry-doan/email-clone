import React, { Component } from 'react';
import { Segment, Container, Divider, Header, Grid, Button, Icon } from 'semantic-ui-react';

class EmailView extends Component {

  render() {
    const { header, sender, time, body, filter, category } = this.props.location.state;

    return(
      <Container>
        <br/>
        <Segment raised color='black'>
          <b>Subject:</b> {header}
          <Divider />
          <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Header as='h5'>from: {sender}</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h5' textAlign='right'>{time}</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as='h5'>{filter}</Header>
            </Grid.Column>
            <Grid.Column>
              <Header as='h5' textAlign='right'>{category}</Header>
            </Grid.Column>
          </Grid.Row>
          </Grid>
          <Segment padded='very'>{body}</Segment>
          <Divider />
            <Button animated='vertical' compact color='yellow' >
              <Button.Content hidden>Edit</Button.Content>
              <Button.Content visible>
                <Icon name='edit' />
              </Button.Content>
            </Button> 
            <Button animated='vertical' compact floated='right' color='red'>
              <Button.Content hidden>Delete</Button.Content>
              <Button.Content visible>
                <Icon name='delete' />
              </Button.Content>
            </Button>
        </Segment>  
      </Container> 
    )
  }
}

export default EmailView;