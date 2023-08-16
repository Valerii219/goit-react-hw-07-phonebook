import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchContacts } from "services/api";


export const getAllContactsThunk = createAsyncThunk('contacts/getContacts', () =>
  fetchContacts()
);

export const createContactsThunk = createAsyncThunk('contacts/addContact', () =>
  addContacts()
);

export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', (id) =>
deleteContacts(id)
);