import styled from "styled-components";

export const StyledCard = styled.div`
  width: calc(33.3% - 0.75rem);
  height: 20rem;
  background-color: #eee;
  box-shadow: 0 0 5px 0 #1b1b23;
  margin-top: 1rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
`;
export const StyledImg = styled.img`
  position: absolute;
  top: calc(50% - 3.75rem);
  left: calc(50% - 3.75rem);
  height: 7.5rem;
  z-index: 10;
`;
export const StyledPokeball = styled.img`
  position: absolute;
  top: 0;
  left: 40%;
  width: 250px;
  transform: rotate(10deg);
`;
export const StyledCardHead = styled.div`
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-item: flex-end;
  overflow: hidden;
  position: relative;
`;
export const StyledCardBody = styled.div``;
