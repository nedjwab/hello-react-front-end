import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetingData);
  console.log(greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);

  return (
    <div>
      <h1>
        Greeting:
        {greeting.message}
      </h1>
    </div>
  );
};

export default Greeting;
