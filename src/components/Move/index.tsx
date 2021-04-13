import React from "react";
import { StyledMoveWrapper } from "./style";
import { capitalizeFirstLetter } from "../../utils";

const Move = ({ keyName, move, level }) => {
  return (
    <StyledMoveWrapper key={keyName}>
      <div>{capitalizeFirstLetter(move)}</div>
      <div>{`Level ${level}`}</div>
    </StyledMoveWrapper>
  );
};

export default Move;
