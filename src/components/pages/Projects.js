import { useLocation } from "react-router-dom"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Message from "../layout/Message"
import styles from "../pages/Projects.module.css"



function Projects() {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>My Projects</h1>
                <LinkButton to="/newproject" text="Create new Project"></LinkButton>
            </div>
            {message && <Message type="success" msg={message} />}
            <Container customClass="start">
                <p>Projects...</p>
            </Container>
        </div>
    )
}

export default Projects