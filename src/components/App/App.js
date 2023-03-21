import "./App.css";
import Main from "../Main/Main";
import Crypto from "../Crypto/Crypto";
import api from "../../utils/api";
import ErrorBox from "../ErrorBox/ErrorBox";

import { Route, Switch, useHistory, withRouter } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const history = useHistory();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [haveError, setHaveError] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (error !== "") {
      setHaveError(true);
    }
  }, [error]);

  const _handleError = (err) => {
    setHaveError(true);
    setLoading(false);
    setError(`Error: ${err.message}`);
  };

  function getCoins() {
    setLoading(true);
    api
      .getInitialCoins()
      .then((res) => {
        const newCoins = res.map((item) => {
          return {
            id: item.id,
            image: item.image,
            name: item.name,
            price: item.current_price,
            symbol: item.symbol,
          };
        });
        setCoins(newCoins);
        setLoading(false);
        setHaveError(false);
      })
      .catch(_handleError);
  }

  function getCoinById(id) {
    return api
      .getCoinInfo(id)
      .then((res) => {
        setHaveError(false);
        return { description: res.description.en };
      })
      .catch(_handleError);
  }

  function handleViewCrypto() {
    history.push("/crypto");
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/crypto">
          {haveError && <ErrorBox text={error} />}
          <Crypto
            data={coins}
            onLoad={getCoins}
            onGetCoinInfo={getCoinById}
            loading={loading}
          />
        </Route>
        <Route path="/">
          <Main onViewCrypto={handleViewCrypto} />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
