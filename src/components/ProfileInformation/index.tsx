import React, { useState } from "react";
import {
  StyledProfileInformationWrapper,
  StyledProfileInformationBody,
  StyledProfileInformationHeader,
  StyledProfileInformationMoveType
} from "./style";

const ProfileInformation = ({ moves, stats }) => {
  const [activeMove, setActiveMove] = useState<string>("learnable");
  const machineMoves = moves.filter(
    mv => mv.version_group_details[0].level_learned_at === 0
  );
  const learnableMoves = moves.filter(mv => machineMoves.indexOf(mv) < 0);

  console.log({ moves });
  console.log({ stats });
  return (
    <StyledProfileInformationWrapper>
      <StyledProfileInformationHeader>
        <StyledProfileInformationMoveType
          active={activeMove === "learnable"}
          onClick={() => setActiveMove("learnable")}
        >
          Learnable Moves
        </StyledProfileInformationMoveType>
        <StyledProfileInformationMoveType
          active={activeMove === "machine"}
          onClick={() => setActiveMove("machine")}
        >
          Machine Moves
        </StyledProfileInformationMoveType>
      </StyledProfileInformationHeader>
      <StyledProfileInformationBody>
        {activeMove === "machine" &&
          machineMoves.map((mv: any) => (
            <div key={mv.move.name}>{mv.move.name}</div>
          ))}
        {activeMove === "learnable" &&
          learnableMoves.map((mv: any) => (
            <div
              key={mv.move.name}
            >{`${mv.move.name}: ${mv.version_group_details[0].level_learned_at}`}</div>
          ))}
      </StyledProfileInformationBody>
    </StyledProfileInformationWrapper>
  );
};

export default ProfileInformation;
