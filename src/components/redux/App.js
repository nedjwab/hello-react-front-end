import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Greeting from '../Greetings';

function App() {
  return (
    <>
      <header>
        <h1>Hello World!</h1>
        <Link to="greeting">greeting</Link>
        <Routes>
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </header>
    </>
  );
}
export default App;
