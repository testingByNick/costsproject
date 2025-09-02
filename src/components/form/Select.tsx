import styles from "./Select.module.css"
import React from "react"

interface Option{
    id: string | number;
    name: string;
}

interface SelectProps{
    text: string;
    name: string;
    options: Option[];
    handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string | number;
}


const Select: React.FC<SelectProps> = ({text, name, options, handleOnChange, value}) => {
    
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <select 
            name={name} 
            id={name} 
            onChange={handleOnChange} 
            value={value || ""}
            >
                <option>Select an option</option>
                {options && options.length > 0 && options.map((option) => (
                    <option value={option.id} key={option.id}>
                        {option.name}

                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;