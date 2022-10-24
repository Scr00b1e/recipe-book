import { AppProps } from 'next/app';
import { Header } from '../component/header';
import './global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
