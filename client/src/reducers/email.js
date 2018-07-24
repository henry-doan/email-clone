import React from 'react';
import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

const GET_EMAIL = 'GET_EMAIL';
// const ADD_EMAIL = 'ADD_EMAIL';

export const getEmails = (cb) => {
  return (dispatch) => {
    axios.get('/api/emails')
    .then( ({data, headers}) => {
			dispatch({ type: GET_EMAIL, emails: data, headers});
			cb();
    })
    .catch( res => {
      const messages =
        res.response.data.errors.map(message =>
          <div>{message}</div>);
        const { headers } = res;
        dispatch(setHeaders(headers));
        dispatch(setFlash(messages, 'red'));
    })
  }
}

export default (state = {}, action) => {
	switch (action.type) {
		case GET_EMAIL:
			return action.emails;
		case 'ADD_EMAIL':
      return [action.email, ...state];
		default:
			return state;
	}
};
  
  