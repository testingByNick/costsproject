import { useLocation } from "react-router-dom"
import Container from "../layout/Container"
import LinkButton from "../layout/LinkButton"
import Message from "../layout/Message"
import { useState, useEffect } from "react"
import ProjectCard from "./ProjectCard"
import styles from "../pages/Projects.module.css"


function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
             })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.projectContainer}>
            <div className={styles.titleContainer}>
                <h1>My Projects</h1>
                <LinkButton to="/newproject" text="Create new Project"></LinkButton>
            </div>
            
            {message && <Message type="success" msg={message} />}

            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => <ProjectCard 
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category?.name}
                        key={project.id}
                    />)}
       </Container>
        </div>
    )
}

export default Projects