import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Email = ({ email }) => (
  <Table.Row>
    <Table.Cell collapsing>
      <Icon name='checkmark box' />
      <Icon name='bookmark' />
      <Icon name='star' />
    </Table.Cell>
    <Table.Cell collapsing>{email.sender}</Table.Cell>
      <Table.Cell>
      <Link 
        to={{
          pathname: `/emails/${email.id}`,
          state: { 
            id: email.id,
            header: email.header, 
            sender: email.sender, 
            time: email.time,
            body: email.body,
            filter: email.filter,
            category: email.category,
          }
        }} 
        className='emailHeads'
      >
        {email.header}
        </Link>
      </Table.Cell>
    <Table.Cell collapsing textAlign='right'>
      {email.time}
    </Table.Cell>
  </Table.Row>
)

export default Email;