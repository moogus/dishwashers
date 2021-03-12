import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: 20px;
  font-weight: lighter;
  text-align: center;
  color: #444;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;