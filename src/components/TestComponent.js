import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import returnObject from '../test/mock';
import { test } from '../Redux/homepage/homepage';

export default function TestComponent() {
  const cityDetails = useSelector((state) => state.homepage.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(test(returnObject()));
  });
  return (
    <div>
      <h1>{cityDetails.name}</h1>
    </div>
  );
}
