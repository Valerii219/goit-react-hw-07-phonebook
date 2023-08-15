import { combineReducers } from 'redux';
import { contactsReducer } from './contactsSlice/contactsSlice';
import { filterReducer } from './filterSlice/filterSlice';
import { usersReducer } from './ContactsApi/slice';

export const reducer = combineReducers({
  // contacts: contactsReducer,
  // filter: filterReducer,
  contact: usersReducer,
});
