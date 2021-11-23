import React from 'react';

const Nav = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/details"><Details /></Route>
          <Route path="/"><Homepage /></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Nav;
