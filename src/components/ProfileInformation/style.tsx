import styled from "styled-components";

export const StyledProfileInformationWrapper = styled.div`
  height: 100%;
`;
export const StyledProfileInformationHeader = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 1156px) {
    font-size: 1.25rem;
  }
`;
export const StyledProfileInformationMoveType = styled.span`
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 500;
`;
export const StyledProfileInformationBody = styled.div`
  overflow: auto;
  height: calc(100% - 44px);
`;
