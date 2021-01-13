import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      {/*{code here}*/}
      <NavLink to="/"></NavLink>
        <NavLink to="/movies"></NavLink>
          <NavLink to="/directors"></NavLink>
            <NavLink to="/actors"></NavLink>
    </div>
  );
};

export default NavBar;
