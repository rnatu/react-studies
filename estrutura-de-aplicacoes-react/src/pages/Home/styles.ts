import styled from 'styled-components';

interface TitleProps {
  readonly isActive: boolean;
}

export const Title = styled.h1<TitleProps>`
  color: pink;
  //sem destructuring
  background-color: ${(props) => (props.isActive ? 'green' : 'red')};
  //com destructuring
  margin-top: ${({ isActive }) => (isActive ? '20px' : '100px')};
`;
