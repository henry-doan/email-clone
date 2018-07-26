import React, { Component } from 'react';
import { Segment, Container, Divider, Header } from 'semantic-ui-react';

class EmailView extends Component {

  render() {
    const { header, sender, time, body, filter, category } = this.props.location.state;

    return(
      <Container>
        <br/>
        <Segment raised color='black'>
          <b>Subject:</b> {header}
          <Divider />
          <Header as='h5'>from: {sender}</Header>
          <Header as='h5'>{time}</Header>
          <Header as='h5'>{filter}</Header>
          <Header as='h5'>{category}</Header>
          <Segment padded='very'>{body}</Segment>
        </Segment>  
      </Container> 
    )
  }
}

export default EmailView;