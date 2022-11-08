import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header, Nav, NavItem } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <Nav>
        <Header>
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/movies">Movies</NavItem>
        </Header>
      </Nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
