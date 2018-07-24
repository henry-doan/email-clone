import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Segment, Container, Dropdown, Header } from 'semantic-ui-react';
import { categories } from './categories';

class EmailForm extends Component {
  state = { header: '', body: '', sender: '', category: '', filter: 'Normal', time: '', user_id: 0 }

  handleChange = (e, data) => {
    const { name, value } = data;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { type, dispatch, user } = this.props;
    const today = new Date()
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.setState({ time: date, user_id: user.id })
    const { header, body, sender, category, filter, time, user_id } = this.state;
    // dispatch(addProduct(this.state));
    this.setState(this.defaults);
  }

  render() {
    const { header, body, sender, category} = this.state;

    return(
      <Container>
        <br/>
        <Segment inverted textAlign='center'>
          <Header>New Email</Header>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Input 
              fluid 
              label='Sender' 
              placeholder='Sender' 
              name='sender'
              value={sender}
              onChange={(e, data) => this.handleChange(e, data)}
            />
            <Form.Input 
              fluid 
              label='Header'
              placeholder='Header'
              name='header' 
              value={header}
              onChange={(e, data) => this.handleChange(e, data)}
            />
            <Form.TextArea 
              label='Body' 
              placeholder='Type here' 
              name='body'
              value={body}
              onChange={(e, data) => this.handleChange(e, data)}
            />
            <Dropdown 
              placeholder='categories'
              selection 
              name='category'
              options={categories} 
              onChange={(e, data) => this.handleChange(e, data)}
            />
            <Segment inverted>
            <Button inverted>Submit</Button>
            </Segment>
          </Form>
        </Segment>
      </Container>
    )
  }
}

const mapStoreToProps = (store) => ({
  user: store.user,
})
  
export default connect(mapStoreToProps)(EmailForm);