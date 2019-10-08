import React from 'react';
import NavBarContainer from '../../components/NavBar';

export default function NavBar() {
  const links = [
    {
      id: 'link-1',
      path: '/strings',
      name: 'All strings',
    },
    {
      id: 'link-2',
      path: '/strings/new',
      name: 'Add string',
    },
  ];

  return <NavBarContainer links={links} />;
}
