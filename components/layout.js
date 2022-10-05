import Footer from "./footer/footer";
import NavBar from "./menu/nav";
import styles from './../styles/MainContainer.module.css';

export default function Layout({ children }) {
  
  return (
    <>
          <NavBar  />
          <main className={styles.main_container}>
            {children}
          </main>
          <Footer />   
    </>
  )
}