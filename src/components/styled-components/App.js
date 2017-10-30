import styled from 'styled-components';

export const Header = styled.div`
  background-color: palevioletred;
  font-family: ubuntu, helvetica, sans-serif;
  min-height: 2em;
  font-size: 2em;
  font-weight: bold;
  width: 100%;
  color: white;
  padding: 0.5em;
  box-sizing: border-box;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 767px) {
    width: 767px;
    margin: 0 auto;
  }
`;
