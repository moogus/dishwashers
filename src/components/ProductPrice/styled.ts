import styled from 'styled-components';

export const PriceText = styled.p`
  font-size: 32px;
  text-align: left;
  color: #444;
  margin: 0;
`;

export const TextMarginContainer = styled.div`
  margin-top: 30px;
  margin-left: 10px;
  @media (max-width: 768px) {
    margin-left: 5%;
    margin-right: 5%;
    margin-bottom: 40px;
  }
`;

export const RedText = styled.p`
  color: red;
  margin-bottom: 0;
  max-width: 250px;
`;
