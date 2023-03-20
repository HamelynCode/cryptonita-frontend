import './Asset.css';
import Article from '../Article/Article';
import arrowIcon from '../../images/arrow-icon.svg';
import { useState } from 'react';

export default function Asset(props){
  const [isClicked, setIsClicked] = useState(false);

  function handleIsClicked() {
    setIsClicked(!isClicked);
  }

  return(
  <>
    <button onClick={handleIsClicked} className={`asset ${isClicked? 'asset_active':''}`}>
      <div className='asset__column'>
        <img className={`asset__arrow ${isClicked? 'asset__arrow_active':''}`} src={arrowIcon} alt='arrow icon'/>
        <img className='asset__img' src={props.data.image} alt='icon'/>
        <p className='asset__name'>{props.data.name}</p>
        <p className='asset__symbol'>{props.data.symbol}</p>
      </div>
      <div className='asset__column'>
        {props.data.price}
        <p className='asset__symbol'>Usd</p>
      </div>
    </button>
    {isClicked && <Article data={props.data} getCoinInfo={props.onGetCoinInfo}/>}
  </>
  );
};