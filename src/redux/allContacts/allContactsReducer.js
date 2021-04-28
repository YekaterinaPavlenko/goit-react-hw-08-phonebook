import { createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './allContactsAction';

const allContactsReducer = createReducer([], {
  [contactsActions.getAllContactsSuccess]: (state, action) => [
    ...action.payload,
  ],
  [contactsActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [contactsActions.deleteContactSuccess]: (state, action) =>
    state.filter(elem => elem.id !== action.payload),
});

export default allContactsReducer;
