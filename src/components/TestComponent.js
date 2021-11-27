import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import returnObject from '../test/mock';
import { test } from '../Redux/details/details';

export default function TestComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(test(returnObject()));
  });
  return (
    <div>
      <h1>Test page</h1>
    </div>
  );
}
