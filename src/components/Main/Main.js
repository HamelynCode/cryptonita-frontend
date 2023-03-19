import './Main.css';
import About from '../About/About';
import Footer from '../Footer/Footer';
import MainButton from '../MainButton/MainButton';

export default function Main(props){
  return(
  <main className='main'>
    <section className='main__body'>
      <h1 className='main__title'>CryptoNita</h1>
      <p className='main__text'>Visualiza los precios de las Crypto divisas más populares del mercado.</p>
      <h3 className='main__text'>¡Comienza aquí tu aventura Crypto!</h3>
      <MainButton class='main__button' text='Iniciar' onClick={props.onViewCrypto}/>
    </section>
    <About/>
    <Footer/>
  </main>
  );
};