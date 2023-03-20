import { useEffect, useState } from 'react';
import Asset from '../Asset/Asset';
import './ListAssets.css';

export default function ListAssets(props){
  const STEP = 5;
  const [limitOfAssets, setLimitOfAssets] = useState(STEP);

  useEffect(()=>{
  }, []);

  function handleVerMasAssets() {
    //incrementar el limite de assets en pantalla
    setLimitOfAssets(limitOfAssets + STEP);
  }

  function handleVerMenosAssets() {
    //disminuir el limite de assets en pantalla
    setLimitOfAssets(limitOfAssets - STEP);
  }

  return(
    <ul className='assets'>
      {props.list.map((data, key) => (
        key < limitOfAssets && <li className='assets__item' key={key}>
          <Asset />
        </li>
      ))}
      <li>
        {limitOfAssets > STEP && <button onClick={handleVerMenosAssets}>ver menos</button>}
        {props.list.length > limitOfAssets && <button onClick={handleVerMasAssets}>ver más...</button>}
      </li>
    </ul>
  );
};