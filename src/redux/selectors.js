export const selectContacts = state => state.contacts.items;
export const selectItemsIsLoading = state => state.contacts.itemsIsLoading;
export const selectContactInfo = state => state.contacts.contact;
export const selectContactIsLoading = state => state.contacts.contactIsLoading;
export const selectCathegoryFilter = state => state.filter.filterCathegory;
export const selectFilterName = state => state.filter.filterName;

export const selectVisibleContacts = state => {
  const contacts = selectContacts(state);
  const cathegory = selectCathegoryFilter(state);
  const filter = selectFilterName(state);

  if (cathegory === 'all') return filteredContacts(contacts, filter);

  const visibleContacts = contacts.filter(contact =>
    contact.cathegory.includes(cathegory)
  );

  return filteredContacts(visibleContacts, filter);
};

const filteredContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
