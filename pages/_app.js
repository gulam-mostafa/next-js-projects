import '../styles/globals.css'
import Nav from './nav'
import Footer from './footer1'

export default function App({ Component, pageProps }) {

 return <div className=''>
<div className=''>
<Nav/>
</div>
<div className='min-h-screen'>
<Component {...pageProps} />
</div>
<Footer/>
</div>

}
