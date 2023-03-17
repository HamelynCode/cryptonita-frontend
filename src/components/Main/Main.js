import './Main.css';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';

export default function Main(){
  return(
  <main className='main'>
    <Header/>
    <h1>Main</h1>
    <About/>
    <Footer/>
  </main>
  );
};