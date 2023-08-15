import { combineReducers } from 'redux';

import { usersReducer } from './ContactsApi/slice';

export const reducer = combineReducers({
  // contacts: contactsReducer,
  // filter: filterReducer,
  contact: usersReducer,
});
