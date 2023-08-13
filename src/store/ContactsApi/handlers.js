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