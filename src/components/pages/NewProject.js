import styles from "./NewProject.module.css"
import ProjectForm from "../project/ProjectForm"


function NewProject(){
    return(
        <div className={styles.newProjectContainer}>
            <h1>Create Project</h1>
            <p>Create your project, then later add the services</p>
            <ProjectForm btnText="Create Project"/>
        </div>
    )
}

export default NewProject