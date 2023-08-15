import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { handleCreateContacts, handleDeleteContacts, handlePanding, handleRejected } from './handlers';
import { createContactsThunk, deleteContactsThunk, getAllContactsThunk } from './requestFunction';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    }},
    
  extraReducers: builder => {
    builder
      
      .addCase(getAllContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload.data;
      })
      .addCase(createContactsThunk.fulfilled, handleCreateContacts )
      .addCase(deleteContactsThunk.fulfilled, handleDeleteContacts )
      .addMatcher(action => action.type.endsWith('pending'), handlePanding)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const usersReducer = contactsSlice.reducer;
