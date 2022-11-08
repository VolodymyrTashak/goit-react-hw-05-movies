import { Header, Nav, NavItem } from './Layout.styled';

import { Outlet } from 'react-router-dom';

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
        <Outlet />
      </Nav>
    </div>
  );
};
