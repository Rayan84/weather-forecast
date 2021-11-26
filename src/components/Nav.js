import {
  BrowserRouter as Router,
  Routes,
  NavLink,
  Route,
} from 'react-router-dom';
import Details from './Details';
import Homepage from './Homepage';

const Nav = () => {
  function linkStyle(num) {
    const links = document.querySelectorAll('.nav-link');
    for (let i = 0; i < links.length; i += 1) {
      if (i !== num) {
        links[i].style.textDecoration = 'none';
      } else {
        links[i].style.textDecoration = 'underline';
      }
    }
  }

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
