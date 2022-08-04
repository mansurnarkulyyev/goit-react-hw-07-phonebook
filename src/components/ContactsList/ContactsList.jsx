import ContactsItem from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
import { memo } from 'react';

const ContactsList = ({ items, onClick }) => {
  const elements = items.map((el) => {
    const { number, name, id } = el;
    return (
      <ContactsItem
        key={id}
        id={id}
        onClick={onClick}
        number={number}
        name={name}
      />
    );
  });
  return <ul>{elements}</ul>;
}
ContactsList.defaultProps = {
  items: [],
};

ContactsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
export default memo(ContactsList);