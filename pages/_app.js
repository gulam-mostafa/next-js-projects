import '../styles/globals.css'
import Nav from './nav'
import Footer from './footer1'

export default function App({ Component, pageProps }) {

 return <div className=''>
 <Nav/>
<Component {...pageProps} />
<Footer/>
</div>

}
