import styles from '../../styles/MainContainer.module.css';
import Link from 'next/link'
import SideBarLeft from '../menu/sidebar-left';

export default function Main() {
    return (
        <>
            
            <Link href="/user">
                <a>
                    <div className={styles.card1}>
                        <h1>New Client</h1>
                    </div>
                </a>
            </Link>
            <Link href="/listar">
                <a>
                    <div className={styles.card2}>
                        <h1>Lista Clients</h1>
                    </div>

                </a>
            </Link>
            <Link href="/">
                <a>
                    <div className={styles.card3}>
                        <h1>Perfil</h1>
                    </div>

                </a>

            </Link>



        </>
    )
}