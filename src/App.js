import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Greetings from './components/Greetings';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Greetings />} />
      </Routes>
    </Router>
  </>
);

export default App;
