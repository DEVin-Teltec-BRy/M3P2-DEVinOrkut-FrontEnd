import React from 'react';
import { useSelector } from 'react-redux';

const Final = () => {
  const state = useSelector((state) => state);

  const staleOutput = `JSON DATA Form-Completed: ${JSON.stringify(
    state,
    null,
    2
  )}`;
  console.log(staleOutput);
  return <pre>{staleOutput}</pre>;
};

export default Final;
