import styled from 'styled-components';

export const ReviewsItem = styled.ul`
  display: grid;
  margin-left: 50px;
  margin-right: 50px;
  list-style: none;
`;

export const ReviewsList = styled.ul`
padding-left: 10px;
box-shadow: -1px 8px 15px -7px rgba(0,0,0,0.75);

&:not(:last-child) {
  margin-bottom: 10px;
}
`;

export const ReviewsTitle = styled.h2`
  font-size: 24px;
  line-height: 1.3;
  font-weight: 700;
  color: black;
`;
