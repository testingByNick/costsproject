import styles from "./SubmitButton.module.css"
import React from "react"

interface SubmitButtonProps {
    text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({text}) => {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    );
};

export default SubmitButton;