import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isFilter } from 'Redux/phonebook/phonebookSlice';
import { InputStyled } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Find contact by Name</h3>
      <label>
        <InputStyled
          type="text"
          onChange={event => dispatch(isFilter(event.target.value))}
        ></InputStyled>
      </label>
    </div>
  );
}

Filter.propTypes = {
  props: PropTypes.object,
};
