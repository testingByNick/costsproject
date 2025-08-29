import styles from "./Home.module.css"
import savings from "../../img/savings.svg"
import LinkButton from "../layout/LinkButton"



function Home(){
    return(
        <section className={styles.homeContainer}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start to manage your projects right now!</p>
            <LinkButton to="/newproject" text="Create new Project"></LinkButton>
            <img src={savings} alt="Costs"></img>
        </section>
    )
}

export default Home