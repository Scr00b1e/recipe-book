import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Footer } from '../component/footer';
import { Header } from '../component/header';
import './global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
      </Provider>
    </>
  )
}

export default MyApp
