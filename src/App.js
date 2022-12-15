import './App.css';
import {useState} from 'react';

function App() {
    const [buttonColor, setButtonColor] = useState('red');
    const [buttonText, setButtonText] = useState('Change to blue');

    const clickHandler = () => {
        const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
        const newButtonText = buttonText === 'Change to blue' ? 'Change to red' : 'Change to blue';
        setButtonColor(newButtonColor);
        setButtonText(newButtonText);
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
            >
                {buttonText}
            </button>
        </div>
    );
}

export default App;
