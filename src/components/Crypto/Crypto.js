import "./Crypto.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ListAssets from "../ListAssets/ListAssets";
import Preloader from "../Preloader/Preloader";
import { useEffect } from "react";

export default function Crypto(props) {
  useEffect(() => {
    props.onLoad();
    // eslint-disable-next-line
  }, []);

  return (
    <main className="crypto">
      {props.loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <div className="crypto__body">
            <ListAssets list={props.data} onGetCoinInfo={props.onGetCoinInfo} />
          </div>
          <Footer />
        </>
      )}
    </main>
  );
}
