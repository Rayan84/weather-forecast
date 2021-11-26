import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Details from './Details';
import Homepage from './Homepage';

const Nav = () => {
  return (
    <Router>
      <div className="display-flex justify-content-space-between nav-container">
        {/* <ul className="navbar">
          <li>
            <NavLink
              to="/details"
              className="nav-link"
              onClick={() => {
                linkStyle(0);
              }}
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="nav-link"
              onClick={() => {
                linkStyle(1);
              }}
            >
              Homepage
            </NavLink>
          </li>
        </ul> */}
      </div>
      <Routes>
        <Route path="/details" element={<Details />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
};

export default Nav;
