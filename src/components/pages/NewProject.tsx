import styles from "./NewProject.module.css"
import ProjectForm from "../project/ProjectForm"
import { useNavigate } from "react-router-dom"
import { IProject } from "../../types/project"
import React from "react"


const NewProject: React.FC = () => {

    const navigate = useNavigate()

    function createPost(project: Omit<IProject, "id">): void{

        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate('/projects', {
          state: { message: 'Sucessfully created project' },
        });
      })
      .catch((err) => console.log(err));
    }

    return(
        <div className={styles.newProjectContainer}>
            <h1>Create Project</h1>
            <p>Create your project, then later add the services</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
        </div>
    );
  };

export default NewProject