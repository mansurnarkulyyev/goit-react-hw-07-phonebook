import PropTypes from 'prop-types';
import { memo } from 'react';

const ContactsItem = ({ id, name, phone, onClick }) => {
  return (
    <li>
      {name}: {phone}
      <button onClick={() => onClick(id)} type="button">
        Delete
      </button>
    </li>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(ContactsItem);
