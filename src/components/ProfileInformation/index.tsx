import React from "react";
import {
  StyledProfileInformationWrapper,
  StyledProfileInformationBody,
  StyledProfileInformationHeader,
  StyledProfileInformationMoveType
} from "./style";
import Move from "../Move";

const ProfileInformation = ({ moves }) => {
  const learnableMoves = moves.filter(
    mv => mv.version_group_details[0].level_learned_at !== 0
  );
  const sortedMoves = learnableMoves.sort(
    (a, b) =>
      a.version_group_details[0].level_learned_at -
      b.version_group_details[0].level_learned_at
  );
  return (
    <StyledProfileInformationWrapper>
      <StyledProfileInformationHeader>
        <StyledProfileInformationMoveType>
          Learnable Moves
        </StyledProfileInformationMoveType>
      </StyledProfileInformationHeader>
      <StyledProfileInformationBody>
        {sortedMoves.map((mv: any) => (
          <Move
            keyName={mv.move.name}
            move={mv.move.name}
            level={mv.version_group_details[0].level_learned_at}
          />
        ))}
      </StyledProfileInformationBody>
    </StyledProfileInformationWrapper>
  );
};

export default ProfileInformation;
