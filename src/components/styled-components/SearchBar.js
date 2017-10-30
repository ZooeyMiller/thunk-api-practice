import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0.5em 0.5em 0 0.5em;
`;
export const SearchInput = styled.input`
  border-radius: 5px;
  margin-bottom: 0.5em;
  border-style: solid;
  font-size: 1.5em;
  font-family: ubuntu, helvetica, sans-serif;
  padding: 0.25em;
`;

export const SearchButton = styled.button`
  background-color: palevioletred;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: ubuntu, helvetica, sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.15em 0.25em 0.25em 0.25em;
`;
