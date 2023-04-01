import { useEffect, useState } from "react";
import PreloaderIcon from "../PreloaderIcon/PreloaderIcon";
import "./Article.css";

export default function Article(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!data) {
      props.getCoinInfo(props.data.id).then((x) => {
        setData(x);
      });
    }
  }, [data, props]);

  return (
    <article className="article">
      {!data ? (
        <PreloaderIcon />
      ) : (
        <>
          <img className="article__img" src={props.data.image} alt="Asset" />
          <h1 className="article__title">{props.data.name}</h1>
          <div className="article__table">
            <p className="asset__symbol article__symbol">{props.data.symbol}</p>
            {props.data.price}
            <p className="asset__symbol">Usd</p>
          </div>
          <p
            className="article__text"
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></p>
        </>
      )}
    </article>
  );
}
