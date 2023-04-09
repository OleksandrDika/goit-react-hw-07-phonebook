import { FormField } from 'components/Filter/Filter.styled';
import React from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'Redux/Contacts/Slice';
import { selectFilter } from 'Redux/Contacts/Selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const changeFilters = event => {
    const value = event.currentTarget.value;
    dispatch(changeFilter(value));
  };
  return (
    <FormField>
      Find contacts by name
      <input type="text" value={value} onChange={changeFilters} />
    </FormField>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
