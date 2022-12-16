export const ColorButton = ({clickHandler, disabled, buttonText, buttonColor}) => {
    return (
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
    )
}

export default ColorButton;