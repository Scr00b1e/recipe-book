import Layout from '../component/layout/Layout'
import './global.scss'

function MyApp({ Component, pageProps }) {
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
}

export default MyApp
