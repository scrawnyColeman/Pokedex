import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1156px) {
    flex-direction: column;
  }
  align-items: center;
  position: relative;
`;
export const StyledBackBtn = styled.img`
  position: absolute;
  top: 40px;
  left: 40px;
  font-size: 2rem;
  width: 80px;
  &:hover {
    cursor: pointer;
  }
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
  background: #00000061;
  box-shadow: 5px 5px 5px -4px #1e1e1e;
`;
export const StyledInfoCard = styled.div`
  width: 50%;
  height: 70vh;
  border-radius: 1rem;
  color: #eee;
  border: 1rem solid #ffcb05;
  background: #00000061;
  box-shadow: 5px 5px 5px -4px #1e1e1e;
  overflow: hidden;
  @media (max-width: 1156px) {
    width: 80%;
    height: 40vh;
    margin-top: 1rem;
  }
`;
export const StyledProfileDisplayImgWrapper = styled.img`
  border-radius: 0.25rem;
  @media (max-width: 1156px) {
    height: 75%;
  }
`;
export const StyledProfileName = styled.div`
  letter-spacing: 2px;
  font-size: 1.5rem;
  @media (min-width: 1156px) {
    font-size: 2.5rem;
  }
  font-weight: 600;
`;

export const StyledProfileStatsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: 0 auto;
  @media (max-width: 1156px) {
    display: none;
  }
  > div {
    flex: 50%;
    font-size: 1.25rem;
    &:nth-child(even) {
      text-align: right;
    }
  }
`;
