import styled from "styled-components";
import { Link } from "react-router-dom";

interface CardHeadProps {
  colorOne: string;
  colorTwo: string;
}

export const StyledCard = styled(Link)`
  width: calc(33.3% - 1.5rem);
  @media (max-width: 1156px) {
    width: calc(50% - 1.5rem);
  }
  @media (max-width: 768px) {
    width: calc(100% - 1.5rem);
  }
  height: 50vh;
  background: linear-gradient(to top, #50504a, #000);
  box-shadow: 0 0 5px 0 #1b1b23;
  margin: 0.75rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  color: #eee;
  position: relative;
  top: 0;
  text-decoration: none;
  &:hover {
    top: -4px;
    left: -4px;
    box-shadow: 4px 4px 5px 0 #1b1b23;
    cursor: pointer;
  }
`;
export const StyledIDWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  width: calc(100% - 1rem);
  font-size: 1.75rem;
  font-weight: 500;
  padding: 0.5rem;
  text-align: right;
  letter-spacing: 2px;
  color: #000;
`;
export const StyledImg = styled.img`
  position: absolute;
  top: calc(50% - 7.5rem);
  left: calc(50% - 7.5rem);
  height: 15rem;
  z-index: 10;
`;
export const StyledPokeball = styled.img`
  position: absolute;
  top: 0;
  left: -10%;
  width: 250px;
  transform: rotate(150deg);
`;
export const StyledCardHead = styled.div`
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-item: flex-end;
  overflow: hidden;
  position: relative;
  background: linear-gradient(to right, ${(p: CardHeadProps) =>
    p.colorOne + ", " + p.colorTwo + ");"}
  border-radius: 0 0 33% 33%;
`;
export const StyledCardBody = styled.div`
  height: 50%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const StyledCardBodyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 1.75rem;
  letter-spacing: 2px;
  padding: 0.5rem;
  position: relative;
  top: calc(100% - 1.75rem - 1rem);
`;
export const StyledCardBodyHeaderName = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
`;
export const StyledCardBodyHeaderType = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledCardBodyBottom = styled.div``;
