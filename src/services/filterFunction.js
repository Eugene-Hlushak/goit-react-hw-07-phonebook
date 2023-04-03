export const getVisibleContacts = (contacts, filter) => {
  if (!filter.filterName) return contacts;
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.filterName.toLowerCase())
  );
};

export const getFilteredContacts = (contacts, filter) => {
  if (filter.filterCathegory === 'all') return contacts;
  return contacts.filter(contact =>
    contact.cathegory.includes(filter.filterCathegory)
  );
};
