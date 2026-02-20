import styles from './Hitchhiker.module.scss'
import {Calendar, CarTaxiFront, Star, User, UserCircle} from "lucide-react";

const hitchhiker = () => {
    return (
        <>
            <div className={styles.rout}>
                <h2 className={styles.city}>Tashkent</h2>
                <div className={styles.lines}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
                <h2 className={styles.city}>Samarkand</h2>
            </div>
            <div className={styles.about}>
                <div className={styles.description}>
                    <div className={styles.text}>
                        <Calendar strokeWidth={2.5}/>
                        <p>25 декабря 2024 г. 08:00</p>
                    </div>
                    <div className={styles.text}>
                        <User strokeWidth={2.5}/>
                        <p>3 свободных места</p>
                    </div>
                    <div className={styles.text}>
                        <CarTaxiFront strokeWidth={2.5}/>
                        <p>Chevrolet Cobalt - Белый</p>
                    </div>
                </div>
                <div className={styles.require}>
                    <p>150000 UZS</p>
                </div>
            </div>
            <div className={styles.actions}>
                <div className={styles.driver}>
                    <div className={styles.profile}>
                        <UserCircle  size={32}/>
                        <h4>Алишер</h4>
                    </div>
                    <div className={styles.driverRating}>
                        <Star />
                        <p>4.8</p>
                    </div>
                </div>
                <div className={styles.aboutBtn}>
                    <button className={styles.btn}>Подробнее</button>
                </div>
            </div>
        </>
    )
}

export default hitchhiker