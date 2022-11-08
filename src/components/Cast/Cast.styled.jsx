import styled from 'styled-components';

export const CastItem = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
  list-style: none;
`;

export const CastList = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const CastText = styled.p`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 500;
  color: black;
`;
