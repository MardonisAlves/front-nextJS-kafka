import Layout from '../components/layout'
import SideBarLeft from '../components/menu/sidebar-left';
import '../styles/globals.css';


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}