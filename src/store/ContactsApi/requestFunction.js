import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "services/api";


export const getAllContactsThunk = createAsyncThunk('contact/getContacts', () =>
  fetchContacts()
);

export const createContactsThunk = createAsyncThunk('contacts/addContact', (id) =>
  addContacts(id)
);

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', (id) =>
deleteContacts(id)
);