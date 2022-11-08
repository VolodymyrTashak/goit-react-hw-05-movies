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
    color: orange;
  }
`;

export const Box = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 20px;
  gap: 30px;
  padding-bottom: 15px;
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 64%);
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
  margin-left: 10px;
  list-style: none;
`;

export const DescriptionItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DescriptionLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  color: black;
  :hover {
    color: orange;
  }
`;
