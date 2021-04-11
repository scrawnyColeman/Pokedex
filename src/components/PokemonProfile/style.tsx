import styled from "styled-components";

interface CardHeadProps {
  colorOne: string;
  colorTwo: string;
}

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1156px) {
    flex-direction: column;
  }
`;

export const StyledProfileCard = styled.div`
  width: 35%;
  height: 75vh;
  @media (max-width: 1156px) {
    width: 100%;
  }
  @media (max-width: 1156px) {
    height: 40vh;
  }
  border: 2px solid blue;
  margin: 0 0.5rem;
  border-radius: 1rem;
  color: #eee;
  position: relative;
  border: 5px solid transparent;
  background: 
    linear-gradient(#1b1b1b,#2e2e2e) padding-box, /*this is your grey background*/
    linear-gradient(to right, ${(p: CardHeadProps) =>
      p.colorOne + ", " + p.colorTwo + ") border-box"};
`;
export const StyledInfoCard = styled.div`
  width: 65%;
  height: 75vh;
  @media (max-width: 1156px) {
    width: 100%;
  }
  @media (max-width: 1156px) {
    height: 40vh;
  }
  margin: 0.5rem;
  border-radius: 1rem;
  color: #eee;
  position: relative;
`;
export const StyledProfileDisplayImgWrapper = styled.img`
  position: absolute;
  z-index: 20;
  @media (min-width: 1156px) {
    height: 60%;
    top: -10%;
    width: 100%;
  }
  @media (max-width: 1156px) {
    height: 120%;
    top: -10%;
    left: 5px;
  }
  @media (max-width: 768px) {
    height: 88%;
    top: 6%;
    left: -6%;
  }
  @media (max-width: 568px) {
    height: 80%;
    top: 10%;
    left: -5%;
  }
`;
export const StyledProfileStatsWrapper = styled.div``;
