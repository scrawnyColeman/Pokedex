import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledBtn = styled.button`
  margin: 0 auto;
  padding: 0.5rem;
  min-width: 15rem;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 2px 1px #2e2000;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  line-height: 22px;
  font-weight: 600;
  background: linear-gradient(to top, rgb(80, 80, 74), rgb(0, 0, 0));
  color: white;
  &:hover {
    outline: none;
  }
`;

export const lastCardWrapper = styled.div`
  height: 100%;
  width: calc(100% - 0.75rem);
  margin: 0 auto;
  width: calc(33.3% - 0.75rem);
  @media (max-width: 1156px) {
    width: calc(50% - 0.75rem);
  }
  @media (max-width: 768px) {
    width: calc(100% - 0.75rem);
  }
`;

export const StyledSpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 10px;
`;
