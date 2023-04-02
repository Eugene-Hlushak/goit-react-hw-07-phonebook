export const getContacts = state => {
  console.log(state);
  return state.contacts;
};

export const getStatusFilter = state => state.filter;
