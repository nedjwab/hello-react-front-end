import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetings } from './redux/greetings';

export default function Greeting() {
  const greetings = useSelector((state) => state.greetingReducer);
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchGreetings());
  }, []);

  return (
    <div>
      <h1>Greetings!</h1>
      <p>{greetings.message}</p>
    </div>
  );
}
