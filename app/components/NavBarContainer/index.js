import React from 'react';
import NavBar from '../NavBar';

export default function NavBarContainer() {
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

  return <NavBar links={links} />;
}
