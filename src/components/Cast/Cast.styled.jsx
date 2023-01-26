import styled from 'styled-components';

export const CastItem = styled.ul`
  display: grid;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  grid-template-columns: repeat(5,1fr);
  margin-left: 50px;
  margin-right: 50px;
  list-style: none;
`;

export const CastList = styled.li`
  width: 100%;
`;

export const CastText = styled.p`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;
  color: black;
`;
