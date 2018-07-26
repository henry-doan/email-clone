import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Table, Container, Button } from 'semantic-ui-react';
import { getEmails } from '../../reducers/email';
import Email from './Email';

class EmailList extends Component {
  state = { loaded: false }

  setLoaded = () => this.setState ({ loaded: true });

  componentDidMount() {
    this.props.dispatch(getEmails(this.setLoaded));
  }

  render() {
    const { emails } = this.props;
    if(this.state.loaded) {
      return(
        <Table inverted selectable>
          <Table.Body>
            {emails.map( e => 
              <Email key={e.id} header={e.header} body={e.body} sender={e.sender} category={e.category} filter={e.filter} time={e.time} user_id={e.user_id}  />
            )}
          </Table.Body>
        </Table>
      )
    }
    return(
      <div>
        <br />
        <Dimmer active inverted>
          <Loader inverted size='large'>Loading</Loader>
        </Dimmer>
      </div>
    )
  }
}

const mapStoreToProps = (store) => ({
    emails: store.email,
})

export default connect(mapStoreToProps)(EmailList);