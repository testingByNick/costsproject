import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"



function ProjectForm({btnText}){
    return (
        <form className={styles.form}>
            <Input 
            type="text" 
            text="Project Name" 
            name="name" 
            placeholder="Insert the name of project"
            />
            <Input 
            type="number" 
            text="Project Budget" 
            name="budget" 
            placeholder="Insert the total budget"
            />
            <Select name="categoryId" text="Select a category"/>
            <SubmitButton text={btnText}/>
        </form>
    )
}


export default ProjectForm