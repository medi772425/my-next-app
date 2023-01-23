import '../styles/globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.css' //☆

function MyApp({ Component, pageProps }) {
  pageProps.appname = "My Next App"
  pageProps.author = "SYODA-Tuyano"
  const getPage = Component.getPage || ((page) => page)
  return getPage(<div>
    <Header appname={pageProps.appname} />
    <Component {...pageProps} />
    <Footer author={pageProps.author}/>
  </div>)
}

export default MyApp
