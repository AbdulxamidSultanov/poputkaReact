import Header from "../../../widgets/header/ui/Header.tsx";
import Hitchhikers from "../../../widgets/hitchhikers/ui/Hitchhikers.tsx";
import styles from "./HomePage.module.scss"
import SearchForm from "../../../shared/ui/Inputs/SearchForm/SearchForm.tsx";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <Header/>
            <section className={styles.hero}>
                <div className={styles.description}>
                    <h1 className={styles.mainContent}>
                        Для тех,
                        <span>
                                <img className={styles.duckImage} src="/images/duckDrive.png" alt="Duck drive a taxi"/>
                        </span>
                        кому по пути
                    </h1>
                </div>
                <SearchForm/>
            </section>
            <Hitchhikers/>
        </div>
    )
}

export default HomePage