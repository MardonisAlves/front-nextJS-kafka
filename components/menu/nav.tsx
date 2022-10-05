import Image from 'next/image'
import styles from '../../styles/NavBar.module.css';

export default function NavBar() {
    return (
        <>
            <nav className={styles.nav}>
                <div>
                    <Image
                        src="/next.png"
                        height="50"
                        width="50" />
                </div>
                <div>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/cliente">Novo cliente</a></li>
                        <li><a href="#">Sair</a></li>
                    </ul>

                </div>
            </nav>


        </>
    )
}