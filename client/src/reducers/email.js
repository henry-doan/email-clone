import React from 'react';
import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

const GET_EMAIL = 'GET_EMAIL';
const ADD_EMAIL = 'ADD_EMAIL';
const DELETE_EMAIL = 'DELETE_EMAIL';

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

export const addEmail = (email, history) => {
  return (dispatch) => {
    axios.post('/api/emails', email)
      .then(({ data, headers }) => {
        dispatch({ type: ADD_EMAIL, email: data, headers });
        history.push('/dash')
      })
      .catch(err => {
        const message = err.response.data.errors;
        dispatch(setHeaders(err.headers));
        dispatch(setFlash(message, 'red'));
      })
  }
}

export const deleteEmail = (id, history) => {
  return(dispatch) => {
    axios.delete(`/api/emails/${id}`)
      .then( res => {
        const { headers } = res;
        dispatch({ type: DELETE_EMAIL, id, headers });
        history.push('/dash')
      })
      .catch(err => {
        const message = err.response.data.errors;
        dispatch(setHeaders(err.headers));
        dispatch(setFlash(message, 'red'));
      })
  }
}

export default (state = {}, action) => {
	switch (action.type) {
		case GET_EMAIL:
			return action.emails;
		case ADD_EMAIL:
      return [action.email, ...state];
    case DELETE_EMAIL: 
      return state.filter(e => e.id !== action.id )
		default:
			return state;
	}
};
  
  