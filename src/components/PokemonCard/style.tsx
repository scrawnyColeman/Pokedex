import styled from "styled-components";

interface CardHeadProps {
  colorOne: string;
  colorTwo: string;
}

export const StyledCard = styled.div`
  width: calc(33.3% - 0.75rem);
  @media (max-width: 1156px) {
    width: calc(50% - 0.75rem);
  }
  @media (max-width: 768px) {
    width: calc(100% - 0.75rem);
  }
  height: 50vh;
  background-color: #eee;
  box-shadow: 0 0 5px 0 #1b1b23;
  margin-top: 1rem;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  color: #eee;
`;
export const StyledImg = styled.img`
  position: absolute;
  top: calc(40% - 7.5rem);
  left: calc(50% - 7.5rem);
  height: 15rem;
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
  height: 40%;
  display: flex;
  justify-content: flex-end;
  align-item: flex-end;
  overflow: hidden;
  position: relative;
  background: linear-gradient(to right, ${(p: CardHeadProps) =>
    p.colorOne + ", " + p.colorTwo + ");"}
`;
export const StyledCardBody = styled.div`
  height: 60%;
  background-color: #1e1e1e;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const StyledCardBodyHeader = styled.div`
  display: flex;
  width: 100%;
  height: 2rem;
  letter-spacing: 1px;
  padding: 0.5rem;
  position: relative;
  top: calc(100% - 2rem - 1rem);
`;
export const StyledCardBodyHeaderName = styled.div`
  width: 50%;
  font-size: 1.5rem;
  font-weight: 500;
`;
export const StyledCardBodyHeaderType = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const StyledCardBodyBottom = styled.div``;
