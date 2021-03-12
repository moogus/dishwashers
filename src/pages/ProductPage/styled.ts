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

export const Loader = styled.div`
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  color: #333;
  margin-top: 45vh;
`;

export const PageContainer = styled.div`
  padding: 0;
  margin-bottom: 5px;
  margin-left: 0;
  margin-right:0;
`;

export const NavigateBackButton = styled.button`
  color: #999;
  border: none;
  width: 5px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: -8px;
  font-size: 48px;
  font-weight: 100;
  &:focus {
      outline: 0 !important;
    }
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;
