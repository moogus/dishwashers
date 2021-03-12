import styled from 'styled-components';

export const FluidImage = styled.img`
  width: auto;
  height: 500px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    margin-top:  -50px;
  }
`;

export const FluidImageContainer = styled.div`
width: 100%;
height: 500px;
  @media (max-width: 768px) {
    margin-top: 20px;
    height: 375px;
    overflow: hidden;
  }
`;

export const ActiveDotButton = styled.button`
  color: #000;
  font-size: 30px;
  border: none;
  background-color: #fff;
  padding: 0 5px 0 5px;
  margin: 0;
  &:focus {
      outline: 0 !important;
    }
`;

export const NotActiveDotButton = styled.button`
  color: #bbb;
  font-size: 30px;
  border: none;
  background-color: #fff;
  padding: 0 5px 0 5px;
  margin: 0;
  &:focus {
      outline: 0 !important;
    }
`;
