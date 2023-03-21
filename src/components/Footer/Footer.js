import './Footer.css';

import coingeckoIcon from '../../images/coingecko-logo.png';

export default function Footer(){
  return(
    <footer className="footer">
      <div className='footer__vendor'>
        <p>Powered by:</p>
        <a href='https://www.coingecko.com/en/api' target='_blank' rel='noreferrer'>
          <img className='footer__link-img' src={coingeckoIcon} alt='Icono de Coingecko' />
        </a>
      </div>
      <p className="footer__text">© {new Date().getFullYear()} CryptoNita</p>
    </footer>
  );
};