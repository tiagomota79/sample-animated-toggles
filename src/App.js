import React, { useState } from "react";
import { Moon, Sun } from "@styled-icons/evaicons-solid";

import {
  MainContainer,
  ToggleGroup,
  ToggleContainer,
  ToggleButton,
  IconsToggleContainer,
  MultiStepLabelContainer,
  MultiStepToggleContainer,
  MultiStepButton,
  ToggleButtonOn,
  ToggleButtonOff
} from "./styles";

export default function App() {
  const [toggle, setToggle] = useState(false);
  const [step, setStep] = useState(0);

  const handleStep = () => {
    if (step === 2) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <MainContainer>
      <h1>Sample animated toggles with styled-components</h1>
      <ToggleGroup>
        <h2>Simple toggle</h2>
        <ToggleContainer on={toggle} onClick={() => setToggle(!toggle)}>
          <ToggleButton on={toggle}></ToggleButton>
        </ToggleContainer>
      </ToggleGroup>
      <ToggleGroup>
        <h2>Toggle with changeable icon</h2>
        <ToggleContainer on={toggle} onClick={() => setToggle(!toggle)}>
          <ToggleButton on={toggle}>
            {toggle ? <Sun size="40" /> : <Moon size="40" />}
          </ToggleButton>
        </ToggleContainer>
      </ToggleGroup>
      <ToggleGroup>
        <h2>Toggle with disappearing/appearing button</h2>
        <ToggleContainer on={toggle} onClick={() => setToggle(!toggle)}>
          <ToggleButtonOn on={toggle}></ToggleButtonOn>
          <ToggleButtonOff on={toggle}></ToggleButtonOff>
        </ToggleContainer>
      </ToggleGroup>
      <ToggleGroup>
        <h2>Toggle with animated background</h2>
        <IconsToggleContainer on={toggle} onClick={() => setToggle(!toggle)}>
          <Sun size="40" />
          <Moon size="40" />
        </IconsToggleContainer>
      </ToggleGroup>
      <ToggleGroup>
        <h2>Multiple Step Toggle</h2>
        <MultiStepLabelContainer>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </MultiStepLabelContainer>
        <MultiStepToggleContainer onClick={handleStep}>
          <MultiStepButton position={step}>{step}</MultiStepButton>
        </MultiStepToggleContainer>
      </ToggleGroup>
    </MainContainer>
  );
}
