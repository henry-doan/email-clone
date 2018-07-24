import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { getEmails } from '../../reducers/email';

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
        <div>
          {emails.map( e => 
            <p>{e.header}</p>
          )}
        </div>
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