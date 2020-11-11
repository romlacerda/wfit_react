import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 400px;

  background-color: #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  & input {
    margin-right: 16px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

`;
