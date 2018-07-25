import React from 'react';
import { Icon, Table } from 'semantic-ui-react';


const Email = ({header, body, sender, category, filter, time, user_id }) => (
  <Table.Row onClick={console.log(header)}>
    <Table.Cell collapsing>
      <Icon name='checkmark box' />
      <Icon name='bookmark' />
      <Icon name='star' />
    </Table.Cell>
    <Table.Cell collapsing>{sender}</Table.Cell>
    <Table.Cell>{header}</Table.Cell>
    <Table.Cell collapsing textAlign='right'>
      {time}
    </Table.Cell>
  </Table.Row>
)

export default Email;