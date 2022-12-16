import './App.css';
import {useState} from 'react';
import ColorButton from './components/ColorButton';
import Checkbox from './components/Checkbox';

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
    const [buttonColor, setButtonColor] = useState('red');
    const [buttonText, setButtonText] = useState('Change to blue');
    const [checked, setChecked] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const clickHandler = () => {
        const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
        const newButtonText = buttonText === 'Change to blue' ? 'Change to red' : 'Change to blue';
        setButtonColor(newButtonColor);
        setButtonText(newButtonText);
    }

    const checkboxClickHandler = () => {
        const newChecked = !checked;
        const newDisabled = !disabled;
        setChecked(newChecked);
        setDisabled(newDisabled);
        if (newDisabled) {
            setButtonColor('gray');
        }
    }

    return (
        <div>
            <ColorButton
                clickHandler={clickHandler}
                disabled={disabled}
                buttonColor={buttonColor}
                buttonText={buttonText}
            />
            <Checkbox
                checkboxClickHandler={checkboxClickHandler}
                checked={checked}
                labelText='Disable button'
            />
        </div>
    );
}

export default App;
