import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Details from './Details';
import Homepage from './Homepage';

const Nav = () => (
  <Router>
    <Routes>
      <Route path="/details" element={<Details />} />
      <Route path="/" element={<Homepage />} />
    </Routes>
  </Router>
);

export default Nav;
