import styles from './Header.module.css'

function Header(){
    return(
        <header className={styles.cabecalho}>
            <h1> PFLOW </h1>

            <nav>
            <ul>
                <li><a href="/">HOME</a></li>
                <li><a href="/">HOME</a></li>
                <li><a href="/">HOME</a></li>
                <li><a href="/">HOME</a></li>
                <li><a href="/">HOME</a></li>
                <li><a href="/">HOME</a></li>
                <li><a href="/">HOME</a></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header