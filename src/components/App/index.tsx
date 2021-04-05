import React from "react";
import Routing from "../Routing";
import { StyledContainer, StyledHeader } from "./style";

export const App = (): JSX.Element => (
  <>
    <StyledHeader>Gotta Catch 'Em All</StyledHeader>
    <StyledContainer>
      <Routing />
    </StyledContainer>
  </>
);

export default App;
