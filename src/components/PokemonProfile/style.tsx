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
  align-items: center;
`;

export const StyledProfileCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: 70vh;
  @media (max-width: 1156px) {
    width: 80%;
    height: 40vh;
  }
  border-radius: 1rem;
  color: #eee;
  border: 1rem solid #ffcb05;
  background: linear-gradient(
      to right,
      ${(p: CardHeadProps) => p.colorOne + ", " + p.colorTwo}
    )
    border-box;
  box-shadow: 5px 5px 5px -4px #1e1e1e;
`;
export const StyledInfoCard = styled.div`
  border-radius: 1rem;
  color: #eee;
`;
export const StyledProfileDisplayImgWrapper = styled.img`
  border-radius: 0.25rem;
  height: 75%;
`;
export const StyledProfileName = styled.div`
  letter-spacing: 2px;
  font-size: 5rem;
  font-weight: 600;
  color: #1e1e1e;
`;

export const StyledProfileStatsWrapper = styled.div``;
