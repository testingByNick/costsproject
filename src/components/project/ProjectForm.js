import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import { useEffect, useState } from "react"


import styles from "./ProjectForm.module.css"



function ProjectForm({btnText}){

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
        method:"GET",
        headers:{
            'Content-Type': 'application/json',
        }
    })
    .then((resp) => resp.json())
    .then(data => {
        setCategories(data)
    })
    .catch((err) => console.log(err))
    },[])

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
            <Select 
            name="categoryId" 
            text="Select a category" 
            options={categories}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}


export default ProjectForm