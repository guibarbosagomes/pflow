import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import { VscGitCompare } from 'react-icons/vsc'


function Header(){
    return(
        <header className={styles.cabecalho}>
                <ul className={styles.logo_list}>
                    <li><VscGitCompare /></li>
                    <li><h1> P.FLOW </h1></li>
                </ul>
                <nav>
                    <ul className={styles.nav_list}>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/novoapontamento">NOVO APONTAMENTO</Link></li>
                        <li><Link to="/concluidos">CONCLUÍDOS</Link></li>
                        <li><Link to="/relatorios">RELATÓRIOS</Link></li>
                        <li><Link to="/ajuda">AJUDA</Link></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header