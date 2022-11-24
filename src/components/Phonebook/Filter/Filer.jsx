import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onFilter } from 'redux/filterSlice';
import { getFiler } from 'redux/selectors';
import { Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFiler);
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(onFilter(e.currentTarget.value));
  };
  return (
    <div className="FilterWrapper">
      Find contact by name
      <form action="">
        <label htmlFor="">
          <Input
            type="text"
            name="filter"
            value={filter}
            onChange={handleFilter}
          />
        </label>
      </form>
    </div>
  );
};
export default Filter;
