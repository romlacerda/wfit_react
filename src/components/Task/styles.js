import styled from 'styled-components';

export const Container = styled.div`
  width: 352px;
  height: 32px;
  display: flex;
  align-items: center;

  margin: 8px 0;

  background: #eee;
  border-radius: 2px;

  & p {
    margin: 0 16px;
    font-size: 14px;
  }
`;