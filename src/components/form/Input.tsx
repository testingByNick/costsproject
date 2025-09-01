import styles from "./Input.module.css";




interface InputProps {
    type: string;
    text: string;
    name: string;
    placeholder: string;
    handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string | number;
}


const Input: React.FC<InputProps> = ({type, text, name, placeholder, handleOnChange, value}) => {
    return (
        <div className={styles.formControl}>
            <label htmlFor={name}>{text}:</label>
            <input 
            type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            onChange={handleOnChange}
            defaultValue={value || ''}
            />
        </div>
    );
};

export default Input