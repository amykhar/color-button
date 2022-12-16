import './App.css';
import {useState} from 'react';

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
    }

    return (
        <div>
            <button
                style={
                    {
                        'backgroundColor': `${buttonColor}`,
                        'color': 'white',
                        'padding': '10px 20px',
                    }
                }
                onClick={clickHandler}
                disabled={disabled}
            >
                {buttonText}
            </button>
            <input
                type='checkbox'
                onClick={checkboxClickHandler}
                id={'disable-button-checkbox'}
                checked={checked}
            />
            <label htmlFor='disable-button-checkbox'>Disable button</label>
        </div>
    );
}

export default App;
