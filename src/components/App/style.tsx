import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 90%;
  margin: 1.5rem auto;
`;
export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;
export const StyledLogo = styled.img`
  height: 144px;
  @media (max-width: 1156px) {
    height: 96px;
  }
  @media (max-width: 768px) {
    height: 64px;
  }
`;
