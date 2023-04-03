export const getVisibleContacts = (contacts, filter) => {
  if (!filter) return contacts;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.filterName.toLowerCase())
  );
};

export const getFilteredContacts = (contacts, filter) => {
  if (filter === 'all') return contacts;
  return contacts.filter(contact => contact.cathegory.includes(filter));
};
