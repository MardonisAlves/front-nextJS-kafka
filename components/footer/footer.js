import styles from '../../styles/Footer.module.css';
import Image from 'next/image'

export default function Footer(){
    return(
        <>
         <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image 
            src="/next.png" 
            alt="Vercel Logo" 
            width={20} height={20} />
          </span>
        </a>
      </footer>
        </>
    )
}