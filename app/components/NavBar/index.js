/**
 * NavBar component
 *
 * Generates a NavBar with links from information passed
 * in as props
 *
 * Props:
 *  links:
 *  [
 *    {
 *      id,
 *      path,
 *      name,
 *    }, ...
 *  ];
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import NavBarItem from '../NavBarItem';

const NavBar = props => {
  const links = props.links.map(link => (
    <NavBarItem key={link.id} exact to={link.path}>
      {link.name}
    </NavBarItem>
  ));

  return <Wrapper>{links}</Wrapper>;
};

NavBar.propTypes = {
  links: PropTypes.array,
};

export default NavBar;
