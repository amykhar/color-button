export const Checkbox = ({checked, labelText, onChange}) => {
    return (
        <>
            <input
                type='checkbox'
                onChange={onChange}
                id={'disable-button-checkbox'}
                checked={checked}
            />
            <label htmlFor='disable-button-checkbox'>{labelText}</label>
        </>
    )
}

export default Checkbox;