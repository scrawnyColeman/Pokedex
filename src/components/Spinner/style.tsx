import styled, { keyframes } from "styled-components";

const motion = () => keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const PokeballContainer = styled.div`
  position: relative;
  height: 48px;
  width: 100%;
  padding: 1rem;
`;
export const PokeballWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;
export const Pokeball = styled.div`
  width: 4px;
  height: 4px;
  transform-origin: 24px 24px;
  animation: ${motion} 1.5s infinite forwards;

  box-shadow: 
      //Row: 1
    16px 0 0 #000, 20px 0 0 #000, 24px 0 0 #000, 28px 0 0 #000,
    //Row: 2
    8px 4px 0 #000,
    12px 4px 0 #000, 16px 4px 0 #e20f07, 20px 4px 0 #e20f07, 24px 4px 0 #e20f07,
    28px 4px 0 #e20f07, 32px 4px 0 #000, 36px 4px 0 #000,
    //Row: 3
    4px 8px 0 #000,
    8px 8px 0 #e20f07, 12px 8px 0 #e20f07, 16px 8px 0 #fff, 20px 8px 0 #e20f07,
    24px 8px 0 #e20f07, 28px 8px 0 #e20f07, 32px 8px 0 #e20f07,
    36px 8px 0 #e20f07, 40px 8px 0 #000,
    //Row: 4
    4px 12px 0 #000,
    8px 12px 0 #e20f07, 12px 12px 0 #fff, 16px 12px 0 #fff, 20px 12px 0 #fff,
    24px 12px 0 #e20f07, 28px 12px 0 #e20f07, 32px 12px 0 #e20f07,
    36px 12px 0 #e20f07, 40px 12px 0 #000,
    //Row: 5
    0px 16px 0 #000,
    4px 16px 0 #e20f07, 8px 16px 0 #e20f07, 12px 16px 0 #e20f07,
    16px 16px 0 #fff, 20px 16px 0 #e20f07, 24px 16px 0 #e20f07,
    28px 16px 0 #e20f07, 32px 16px 0 #e20f07, 36px 16px 0 #e20f07,
    40px 16px 0 #e20f07, 44px 16px 0 #000,
    //Row: 6
    0px 20px 0 #000,
    4px 20px 0 #e20f07, 8px 20px 0 #e20f07, 12px 20px 0 #e20f07,
    16px 20px 0 #e20f07, 20px 20px 0 #000, 24px 20px 0 #000, 28px 20px 0 #e20f07,
    32px 20px 0 #e20f07, 36px 20px 0 #e20f07, 40px 20px 0 #e20f07,
    44px 20px 0 #000,
    //Row: 7
    0px 24px 0 #000,
    4px 24px 0 #000, 8px 24px 0 #e20f07, 12px 24px 0 #e20f07, 16px 24px 0 #000,
    20px 24px 0 #fff, 24px 24px 0 #a5a5a5, 28px 24px 0 #000, 32px 24px 0 #e20f07,
    36px 24px 0 #e20f07, 40px 24px 0 #000, 44px 24px 0 #000,
    //Row: 8
    0px 28px 0 #000,
    4px 28px 0 #fff, 8px 28px 0 #000, 12px 28px 0 #000, 16px 28px 0 #000,
    20px 28px 0 #a5a5a5, 24px 28px 0 #a5a5a5, 28px 28px 0 #000, 32px 28px 0 #000,
    36px 28px 0 #000, 40px 28px 0 #a5a5a5, 44px 28px 0 #000,
    //Row: 9
    4px 32px 0 #000,
    8px 32px 0 #fff, 12px 32px 0 #fff, 16px 32px 0 #fff, 20px 32px 0 #000,
    24px 32px 0 #000, 28px 32px 0 #a5a5a5, 32px 32px 0 #a5a5a5,
    36px 32px 0 #a5a5a5, 40px 32px 0 #000,
    //Row: 10
    4px 36px 0 #000,
    8px 36px 0 #a5a5a5, 12px 36px 0 #fff, 16px 36px 0 #fff, 20px 36px 0 #fff,
    24px 36px 0 #a5a5a5, 28px 36px 0 #a5a5a5, 32px 36px 0 #a5a5a5,
    36px 36px 0 #a5a5a5, 40px 36px 0 #000,
    //Row: 11
    8px 40px 0 #000,
    12px 40px 0 #000, 16px 40px 0 #a5a5a5, 20px 40px 0 #a5a5a5,
    24px 40px 0 #a5a5a5, 28px 40px 0 #a5a5a5, 32px 40px 0 #000, 36px 40px 0 #000,
    //Row: 12
    16px 44px 0 #000,
    20px 44px 0 #000, 24px 44px 0 #000, 28px 44px 0 #000;
`;
