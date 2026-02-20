import styles from "./Header.module.scss"
import {Link} from "react-router";
import {CircleX, Menu} from "lucide-react";
import {useState} from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    console.log("header render")
    return (
        <header className={styles.container}>
            <Link to={"/"} className={styles.logo}>
                <img className={styles.logoImg} src="/images/poputka-logo.png" alt="PopUtka Logo"/>
                <h1 className={styles.logoText}>PopUtka</h1>
            </Link>
            <div className={styles.menu}>
                <ul className={styles.list}>
                    <li><Link to={"#"}>Home</Link></li>
                    <li><Link to={"#"}>Trips</Link></li>
                    <li><Link to={"#"}>Drivers</Link></li>
                    <li><Link to={"#"}>About us</Link></li>
                    <li><Link to={"#"}>Contacts</Link></li>
                </ul>
            </div>
            <div className={styles.actions}>
                <button className={styles.logInBtn}>Log in</button>
            </div>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.burgerMenu}>
                <Menu/>
            </div>
            <div className={styles.menuList} data-visible={`${isMenuOpen}`}>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.burgerMenu}>
                    <CircleX/>
                </div>
                <ul className={styles.list}>
                    <li><Link to={"#"}>Home</Link></li>
                    <li><Link to={"#"}>Trips</Link></li>
                    <li><Link to={"#"}>Drivers</Link></li>
                    <li><Link to={"#"}>About us</Link></li>
                    <li><Link to={"#"}>Contacts</Link></li>
                </ul>
                <button className={styles.logInBtn}>Log in</button>
            </div>
        </header>
    )
}

export default Header