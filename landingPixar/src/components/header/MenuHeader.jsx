import styles from "./header.module.css";

const lista = [
                <a href="#">FILMS</a>,
                <a href="#">TECHNOLOGY</a>,
                <a href="#">CAREERS</a>,
                <a href="#">MORE</a>
]
const MenuHeader = () => {
    return (
        <nav className="Menu-header">
            <ul className={styles.MenuList}> 
                {lista.map((item, i) => (
                    <li key={i} className={styles.MenuItem}>{item}</li>
                ))}

            </ul>
        </nav>
    );
}

export default MenuHeader;