import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Header = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.64);
`;

export const Nav = styled('nav')`
  display: block;
  justify-content: centre;
  gap: 20px;
`;

export const NavItem = styled(NavLink)`
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  color: black;
  text-decoration: none;
  &.active {
    color: #a41234;
  }
  &:first-child {
    margin-right: 30px;
  }
`;
