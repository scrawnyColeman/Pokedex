import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
