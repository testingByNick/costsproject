import styles from "../pages/ProjectCard.module.css"
import { BsPencil , BsFillTrashFill } from "react-icons/bs"
import React from "react";
import { Link } from "react-router-dom";
import { IProject } from "../../types/project"


interface ProjectCardProps extends IProject{
    handleRemove?: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, name, budget, category, handleRemove }) => {
    const remove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        }
      const categoryName = category?.name ?? "No category";
      const categoryKey = categoryName.toLowerCase().replace("/", "_");

    return (
    <div className={styles.project_card}>
      <h4>{name}</h4>
      <p>
        <span>Budget:</span> R${budget}
      </p>
      <p className={styles.category_text}>
        <span className={`${styles[categoryKey || '']}`}></span> {categoryName}
      </p>
      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsPencil /> Edit
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Delete
        </button>
      </div>
    </div>
  );
};
export default ProjectCard;