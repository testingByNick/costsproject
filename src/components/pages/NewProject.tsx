import styles from "./NewProject.module.css"
import ProjectForm from "../project/ProjectForm"
import { useNavigate } from "react-router-dom"



function NewProject(){

    const navigate = useNavigate()

    function createPost(project){

        const projectData = {
        ...project,
        cost: parseFloat(project.budget) || 0,
        services: [],
    };

        fetch("http://localhost:5000/projects",{
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData),
        })
        .then((resp) => resp.json())
        .then((e) => navigate('/projects', { state: 
            { message: 'Sucessfully created project!' }, 
        }
    ))
    }
    
    return(
        <div className={styles.newProjectContainer}>
            <h1>Create Project</h1>
            <p>Create your project, then later add the services</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
        </div>
    )
}

export default NewProject