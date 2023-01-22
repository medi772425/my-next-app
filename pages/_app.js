import Head from 'next/head'
import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  pageProps.appname = "My Next App"
  pageProps.author = "SYODA-Tuyano"
  const getPage = Component.getPage || ((page) => page) //☆
  return getPage(<div>
    <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"/>
    </Head>
    <Header appname={pageProps.appname} />
    <Component {...pageProps} />
    <Footer author={pageProps.author}/>
  </div>)
}


export default MyApp

