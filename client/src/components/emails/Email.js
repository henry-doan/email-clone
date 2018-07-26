import React from 'react';
import { Icon, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const Email = ({header, body, sender, category, filter, time, user_id }) => (
  <Table.Row>
    <Table.Cell collapsing>
      <Icon name='checkmark box' />
      <Icon name='bookmark' />
      <Icon name='star' />
    </Table.Cell>
      <Table.Cell collapsing>{sender}</Table.Cell>
    <Link to='/toeachemail' className=''>
      <Table.Cell>{header}</Table.Cell>
    </Link>
    <Table.Cell collapsing textAlign='right'>
      {time}
    </Table.Cell>
  </Table.Row>
)

export default Email;