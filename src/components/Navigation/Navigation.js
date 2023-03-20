import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigation(){
  return(
    <nav className='nav'>
      <Link className='nav__link' to='/'>Inicio</Link>
    </nav>
  );
};