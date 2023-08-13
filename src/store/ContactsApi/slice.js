import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { handlePanding, handleRejected } from './handlers';
import { getAllContactsThunk } from './requestFunction';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(getAllContactsThunk.pending, handlePanding )
      .addCase(getAllContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.items = payload.data;
      })
      // .addCase(getAllContactsThunk.rejected,handleRejected )
      .addMatcher(action => action.type.endsWith('./pending'), handlePanding)
      .addMatcher(action => action.type.endsWith('./rejected'), handleRejected);
  },
});

export const usersReducer = contactsSlice.reducer;
