import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const MovieList = styled.ul`
  display: block;
  text-decoration: none;
`;

export const MovieItem = styled('nav')`
  list-style: none;
  margin-left: 10px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const MovieLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
  color: black;

  :hover {
    color: orange;
  }
`;
