import * as allContactActions from './allContactsAction';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} = allContactActions;

export const getAllContacts = () => dispatch => {
  dispatch(getAllContactsRequest());
  axios
    .get('/contacts')
    .then(response => {
      //   console.log(response.data);
      return dispatch(getAllContactsSuccess(response.data));
    })
    .catch(error => {
      return dispatch(getAllContactsError(error));
    });
};

export const addContact = contact => dispatch => {
  console.log(contact);
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      console.log(data);
      return dispatch(addContactSuccess(data));
    })
    .catch(error => {
      console.log(error);
      return dispatch(addContactError(error));
    });
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      // console.log(response);
      return dispatch(deleteContactSuccess(id));
    })
    .catch(error => {
      console.log(error);
      return dispatch(deleteContactError(error));
    });
};
