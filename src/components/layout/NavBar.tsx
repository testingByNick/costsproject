import { Link } from "react-router-dom"
import Container from "./Container"
import styles from "./NavBar.module.css"



function NavBar(){
    return(
        <nav className={styles.navBar}>
            <Container>
                        <Link to="/"><img src={"a"} alt="Costs" /></Link>
                <ul className={styles.list}>
                    <li className ={styles.item}>
                    <Link to="/">Home</Link>
                    </li>
                    <li className ={styles.item}>
                    <Link to="/company">Company</Link>
                    </li>
                    <li className ={styles.item}>
                    <Link to="/projects">Projects</Link>
                    </li>
                    <li className ={styles.item}>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar