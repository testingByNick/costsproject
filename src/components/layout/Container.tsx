import styles from './Container.module.css'
import React, { ReactNode } from "react"



interface ContainerProps{
    children: ReactNode;
    customClass?: string; 
};

const Container: React.FC<ContainerProps> = ({ children, customClass }) => {
    return (
        <div className={`${styles.container} ${customClass ? styles[customClass] : ''}`}>
        {children}
    </div>    
    );
};


export default Container;