import styles from "./header.module.css";
import { useState } from "react";

const lista = [
    <a href="#">FILMS</a>,
    <a href="#">TECHNOLOGY</a>,
    <a href="#">CAREERS</a>,
    <a href="#">MORE</a>
]
const filmsOpen = [
    <a href="#">Features Films</a>,
    <a href="#">Shorts Films</a>,
    <a href="#">Series</a>,
    <a href="#">SparkShorts</a>,
    <a href="#">Documentaries</a>
]

const MenuHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
    const abrirCerrarMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="Menu-header">
            <ul className={styles.MenuList}>
                {lista.map((item, i) => (
                    <li key={i} className={styles.MenuItem}
                        onMouseEnter={() => item === "FILMS" && setIsOpen(true)}
                        onMouseLeave={() => item === "FILMS" && setIsOpen(false)}
                    >{item}</li>
                    
                    

                ))}

            </ul>
        </nav>
    );
}

export default MenuHeader;