import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  & p, span {
    font-family: 'Roboto';
    font-weight: 400;
    color: #606060;
  }
`;
