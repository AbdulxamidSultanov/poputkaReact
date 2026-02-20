import styles from "./Hitchhikers.module.scss"
import Hitchhiker from "../../../shared/ui/Hitchhiker/Hitchhiker.tsx";


const Hitchhikers = () => {

    return (
        <section className={styles.container}>
            <div className={styles.hitchhikers}>
                {Array(20).fill(null).map((_, i: number) => (
                    <div key={i} className={styles.hitchhiker}>
                        <Hitchhiker/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Hitchhikers