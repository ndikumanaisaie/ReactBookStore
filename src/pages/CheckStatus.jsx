import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categorySlice';

const CheckStatus = () => {
  const { data } = useSelector((state) => (state.categories));

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <>
      <button type="button" className="check-status" onClick={handleClick}>Check Status</button>
      <h1 className="h1">{data}</h1>
    </>
  );
};

export default CheckStatus;
