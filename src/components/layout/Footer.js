import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import styles from "./Footer.module.css"



function Footer(){
    return(
        <footer className={styles.footer}>
            <ul className={styles.socialList}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaGithub />
                </li>
            </ul>
            <p className={styles.copyRight}><span>Costs</span> &copy; 2025</p>
        </footer>
    )
}

export default Footer