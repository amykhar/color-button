import "./App.css";

import { useState } from "react";

import { Checkbox } from "./components/Checkbox";
import { ColorButton } from "./components/ColorButton";

const red = "MediumVioletRed";
const blue = "MidnightBlue";
const gray = "gray";
const checkboxLabel = "Disable button";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

export function replaceSpacesWithCamel(colorName) {
  let colorNameCamel = colorName.replace("Change to ", "");
  colorNameCamel = colorNameCamel.replace(/\s/g, "");
  return colorNameCamel;
}

function App() {
  const [buttonColor, setButtonColor] = useState(red);
  const [buttonText, setButtonText] = useState(
    `Change to ${replaceCamelWithSpaces(blue)}`
  );
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const clickHandler = () => {
    const redLabel = `Change to ${replaceCamelWithSpaces(red)}`;
    const blueLabel = `Change to ${replaceCamelWithSpaces(blue)}`;

    const newButtonColor = buttonColor === red ? blue : red;
    const newButtonText = buttonText === redLabel ? blueLabel : redLabel;
    setButtonColor(newButtonColor);
    setButtonText(newButtonText);
  };

  const checkboxClickHandler = () => {
    const newChecked = !checked;
    const newDisabled = !disabled;
    setChecked(newChecked);
    setDisabled(newDisabled);
    if (newDisabled) {
      setButtonColor(gray);
    } else {
      setButtonColor(replaceSpacesWithCamel(buttonText));
    }
  };

  return (
    <div>
      <ColorButton
        clickHandler={clickHandler}
        disabled={disabled}
        buttonColor={buttonColor}
        buttonText={buttonText}
      />
      <Checkbox
        checked={checked}
        labelText={checkboxLabel}
        onChange={checkboxClickHandler}
      />
    </div>
  );
}

export default App;
