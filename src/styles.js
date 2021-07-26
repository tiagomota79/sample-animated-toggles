import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  font-family: Helvetica, sans-serif;
`;

export const ToggleGroup = styled.div`
  display: grid;
  place-items: center;
  border: solid 1px black;
  border-radius: 6px;
  width: 50%;
  height: 150px;
  margin: 10px;
  padding: 10px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 50px;
  border: solid 1px ${({ on }) => (on ? "black" : "lightgrey")};
  border-radius: 50px;
  background-color: ${({ on }) => (on ? "black" : "lightgrey")};
  transition: all 0.25s ease-in-out;
`;

export const ToggleButton = styled.div`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: ${({ on }) => (on ? "dodgerblue" : "gold")};
  margin: 1px;
  transform: translate(${({ on }) => (on ? "50px" : "0")});
  transition: all 0.25s ease-in-out;
  overflow-x: hidden;
`;

export const IconsToggleContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  width: 100px;
  height: 50px;
  /* border: solid 1px ${({ on }) => (on ? "lightgrey" : "black")}; */
  border-radius: 8px;
  background-color: ${({ on }) => (on ? "lightgrey" : "black")};
  transition: all 0.25s ease-in-out;
  overflow: hidden;
  
  svg {
    transition: all 0.25s ease-in-out;
    
    // sun icon
    &:first-child {
      transform: ${({ on }) => (on ? "translateY(0)" : "translateY(50px)")};
      color: black;
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ on }) => (on ? "translateY(-50px)" : "translateY(0)")};
      color: white;
    }
  }
`;

export const MultiStepLabelContainer = styled.div`
  width: 85px;
  display: flex;
  justify-content: space-between;
`;

export const MultiStepToggleContainer = styled.div`
  width: 100px;
  height: 30px;
  background-color: lightgrey;
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

export const MultiStepButton = styled.div`
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  background-color: dodgerblue;
  border-radius: 14px;
  margin: 1px;
  transform: translate(${({ position }) => `${0 + position * 35}px`});
  transition: all 0.25s ease-in-out;
`;

export const disappear = keyframes`
    0% {transform: scale(1)}
    20% {transform: scale(1.2)}
    100% {transform: scale(0)}
  }
`;

export const appear = keyframes`
    0% {transform: scale(0)}
    80% {transform: scale(1.2)}
    100% {transform: scale(1)}
  }
`;

export const ToggleButtonOn = styled.div`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: gold;
  margin: 1px;
  animation: 0.5s ease-in-out 1 ${({ on }) => (on ? disappear : appear)}
    forwards;
`;

export const ToggleButtonOff = styled.div`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background-color: dodgerblue;
  margin: 1px;
  animation: 0.5s ease-in-out 1 ${({ on }) => (on ? appear : disappear)}
    forwards;
`;
