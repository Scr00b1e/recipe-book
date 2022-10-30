import { AppProps } from 'next/app';
import { Footer } from '../component/footer';
import { Header } from '../component/header';
import './global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}

export default MyApp
