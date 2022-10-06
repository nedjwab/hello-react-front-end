import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Greetings from './components/Greetings';

function App() {
  return (
    <Routes>
    <Route exact path="/books" element={<Greetings />} />
    </Routes>
  );
}

export default App;
