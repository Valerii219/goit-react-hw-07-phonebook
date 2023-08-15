export const handlePanding = state => {
    state.contacts.isLoading = true;
    state.contacts.error = '';
  };
  
  export const handleRejected =
    state =>
    (state, { error }) => {
      state.contacts.isLoading = false;
      state.contacts.error = error.message;
    };

    export const handleCreateContacts = (state, {payload}) => {
      state.contacts.items.unshift(payload)
    };

 
    export const handleDeleteContacts = (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload.contactId);
    };