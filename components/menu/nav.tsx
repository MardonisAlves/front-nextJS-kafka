import Image from 'next/image'
import styles from '../../styles/NavBar.module.css'
export default function NavBar() {
    return (
        <>
            
                <nav className={styles.nav}>
                    <div>
                        <Image 
                        src="/next.png"
                        height="50"
                        width="50"/>
                    </div>
                    <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/user">Novo cliente</a></li>
                    </ul>
                    </div>
                </nav>
           

        </>
    )
}