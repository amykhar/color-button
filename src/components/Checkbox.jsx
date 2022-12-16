export const Checkbox = ({checkboxClickHandler, checked, labelText}) => {
    return (
        <>
            <input
                type='checkbox'
                onClick={checkboxClickHandler}
                id={'disable-button-checkbox'}
                checked={checked}
            />
            <label htmlFor='disable-button-checkbox'>{labelText}</label>
        </>
    )
}

export default Checkbox;