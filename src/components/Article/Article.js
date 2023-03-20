import './Article.css';

export default function Article(props){
  return(
    <article className='article'>
      <img className='article__img' src='' alt='Asset'/>
      <h1 className='article__title'>Titulo</h1>
      <div className='article__table'>
        <p className='asset__symbol article__symbol'>Btc</p>
        50.000
        <p className='asset__symbol'>Usd</p>
      </div>
      <p className='article__text'>Descriptcion</p>
    </article>
  );
};