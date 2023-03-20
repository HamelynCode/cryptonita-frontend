import './Crypto.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ListAssets from '../ListAssets/ListAssets';

export default function Crypto(){
  return(
  <main className='crypto'>
    <Header/>
    <div className='crypto__body'>
      <ListAssets list={['','','','','','','','','','','']}/>
    </div>
    <Footer/>
  </main>
  );
};