import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <NavLink exact to="/strings">
        All strings
      </NavLink>
      <NavLink exact to="/strings/new">
        Add string
      </NavLink>
    </nav>
  );
}
