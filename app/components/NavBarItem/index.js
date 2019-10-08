import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBarItem = styled(NavLink)`
  color: white;
  padding: 0 5px;

  &:link {
    text-decoration: none;
    color: white;
  }

  &:visited {
    text-decoration: none;
    color: white;
  }
`;

export default NavBarItem;
