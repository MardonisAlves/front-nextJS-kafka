import Footer from "./footer/footer";
import NavBar from "./menu/nav";
import styles from './../styles/MainContainer.module.css';
import { LayoutProps } from "../src/interfaces/auth.interface";


export default function Layout({ children }: LayoutProps) {
  
  return (
    <>
          <NavBar  />
          <main className={styles.main_container}>
            {children}
          </main>
           
    </>
  )
}