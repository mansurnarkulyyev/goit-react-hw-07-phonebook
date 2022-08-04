
import { memo } from 'react';
import PropTypes from "prop-types";

const SearchContact = ({ onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        onChange={onChange}
        placeholder="enter name"
        type="text"
        name="filter"
      />
    </label>
  );
};

SearchContact.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default memo(SearchContact);
