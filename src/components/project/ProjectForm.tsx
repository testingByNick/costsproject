import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import { useEffect, useState } from "react"
import styles from "./ProjectForm.module.css"
import React from "react"
import { IProject } from "../../types/project"



interface Category {
    id: string;
    name: string;
}

interface ProjectData {
    name: string;
    budget: number;
    category: Category;
    cost: number;
    services: any;
}

interface ProjectFormProps {
    handleSubmit: (project: ProjectData) => void;
    btnText: string;
    projectData?: ProjectData;
}


const ProjectForm: React.FC<ProjectFormProps> = ({ handleSubmit, btnText, projectData }) => {

    const [categories, setCategories] = useState<Category[]>([])
    const [project, setProject] = useState<Partial<IProject>>(projectData || {});

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then(data => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, []);

    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!project.name || !project.budget || !project.category) {
            alert("Please, write all the necessart fields");
            return;
        };
    };

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setProject({ ...project, [e.target.name]: e.target.value })
    };

    function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },

        });
    };

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Project Name"
                name="name"
                placeholder="Insert the name of project"
                handleOnChange={handleChange}
                value={project.name ? project.name : ""}
            />
            <Input
                type="number"
                text="Project Budget"
                name="budget"
                placeholder="Insert the total budget"
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ""}
            />
            <Select
                name="categoryId"
                text="Select a category"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ""}
            />
            <SubmitButton text={btnText} />
        </form>
    );
};

export default ProjectForm