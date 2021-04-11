import styled from "styled-components";

interface HeaderProps {
  active: boolean;
}

export const StyledProfileInformationWrapper = styled.div`
  height: 100%;
`;
export const StyledProfileInformationHeader = styled.div`
  height: 44px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledProfileInformationMoveType = styled.span`
  font-size: 1.5rem;
  letter-spacing: 2px;
  font-weight: 500;
  text-decoration: ${(p: HeaderProps) => (p.active ? "underline" : "none")};
  &:hover {
    cursor: pointer;
  }
`;
export const StyledProfileInformationBody = styled.div`
  background-color: red;
  overflow: auto;
  height: calc(100% - 44px);
`;
