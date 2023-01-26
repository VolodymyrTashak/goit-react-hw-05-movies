import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const BackLink = styled(Link)`
  margin-top: 20px;
  margin-left: 10px;
  text-decoration: none;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  color: black;
  :hover {
    color: #6c1328;
  }
`;

export const Box = styled.div`
  display: flex;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
  gap: 30px;
  box-shadow: -1px 2px 15px 5px rgb(0 0 0 / 64%);
`;

export const MoviesBox = styled.div`
  width: 800px;
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  color: black;
`;
export const Options = styled.h1`
  font-size: 18px;
  line-height: 1.3;
  font-weight: 700;
  color: black;
`;
export const GenresList = styled.ul`
  display: flex;
  list-style: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const GenresItem = styled.ul`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const DescriptionList = styled.ul`
  margin-left: 50px;
  list-style: none;

`;

export const DescriptionItem = styled.li`
    width: 130px;
    height: 35px;
    margin-top: 30px;
    border-radius: 40px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    font-size: 8px;
    line-height: 45px;
    text-decoration: none;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    background: #c0ab91;
    box-shadow: rgb(0 0 0 / 10%) 0px 8px 15px;
    
  &:not(:last-child) {
    margin-bottom: 10px;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;

export const DescriptionLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  color: #6c1328;
  :hover {
    color: white;
  }
`;
