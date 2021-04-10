import React from "react";
import Routing from "../Routing";
import { StyledContainer, StyledHeader, StyledLogo } from "./style";
import logo from "../../assets/images/pokelogo.png";

export const App = (): JSX.Element => (
  <>
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
    </StyledHeader>
    <StyledContainer>
      <Routing />
    </StyledContainer>
  </>
);

export default App;
