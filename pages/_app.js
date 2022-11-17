import '../styles/globals.css'
import Layout from '../components/Layout'
import { createClient } from 'contentful'


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp