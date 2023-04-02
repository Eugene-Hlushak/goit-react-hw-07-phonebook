import PropTypes from 'prop-types';

import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';
import { ContactItem, Contact } from './ContactList.styled';

export default function ContactListItem({
  contact: { name, phone, id, group },
}) {
  const dispatch = useDispatch();

  return (
    <ContactItem>
      <Contact>
        {name}: {phone}
        {group.length > 0 && ` - ${group.map(group => group).join(', ')}`}
      </Contact>

      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};
