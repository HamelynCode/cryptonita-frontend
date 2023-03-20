import './App.css';
import Main from '../Main/Main';
import Crypto from '../Crypto/Crypto';
import api from '../../utils/api';

import { Route, Switch, useHistory, withRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const history = useHistory();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  function getCoins() {
    setLoading(true);
    api.getInitialCoins()
    .then((res) => {
      const newCoins = res.map( (item) => {
        return new Object({
          id: item.id,
          image: item.image,
          name: item.name,
          price: item.current_price,
          symbol: item.symbol
        });
      });
      setCoins(newCoins);
      setLoading(false);
      return;
    })
    .catch((err) => console.log(err));
  }

  function getCoinById(id) {
    return api.getCoinInfo(id).then((res) => {
      return new Object({description: res.description.en});
    }).catch((err) => console.log(err));
  }

  function handleViewCrypto() {
    history.push('/crypto');
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/crypto'>
          <Crypto data={coins} onLoad={getCoins} onGetCoinInfo={getCoinById} loading={loading}/>
        </Route>
        <Route path='/'>
          <Main onViewCrypto={handleViewCrypto}/>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
