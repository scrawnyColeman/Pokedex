import React from "react";
import { StyledMoveWrapper } from "./style";

const Move = ({ keyName, move, level }) => {
  return (
    <StyledMoveWrapper key={keyName}>
      <div>{move.charAt(0).toUpperCase() + move.slice(1)}</div>
      <div>{`Level ${level}`}</div>
    </StyledMoveWrapper>
  );
};

export default Move;
