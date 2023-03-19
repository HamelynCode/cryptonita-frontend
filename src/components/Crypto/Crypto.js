import './Crypto.css';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';

export default function Crypto(){
  return(
  <main className='crypto'>
    <Header/>
    <h1>Crypto</h1>
    <About/>
    <Footer/>
  </main>
  );
};