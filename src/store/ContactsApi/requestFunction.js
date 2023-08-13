import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts } from "services/api";


export const getAllContactsThunk = createAsyncThunk('contact/getContacts', () =>
  fetchContacts()
);