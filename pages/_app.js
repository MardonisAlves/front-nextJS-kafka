import Layout from '../components/layout'
import '../styles/globals.css';
import AuthProvider from './../src/context/AuthContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}