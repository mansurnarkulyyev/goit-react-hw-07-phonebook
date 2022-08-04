import PropTypes from 'prop-types';
import { memo } from 'react';

const ContactsItem = ({ id, name, number, onClick }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onClick(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default memo(ContactsItem);
