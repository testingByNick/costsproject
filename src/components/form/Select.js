import styles from "./Select.module.css"


function Select({ text, name, options, handleOnCHange, value }) {
    
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
                <option>Select an option</option>
                {options && options.length > 0 && options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}

                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select