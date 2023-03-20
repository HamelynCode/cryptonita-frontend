import './App.css';
import Main from '../Main/Main';
import Crypto from '../Crypto/Crypto';
import Preloader from '../Preloader/Preloader';

import { Route, Switch, useHistory, withRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  function handleViewCrypto() {
    history.push('/crypto');
  }

  return (
    <div className="App">
      {
      loading ?
      <Preloader/>
      :
      <Switch>
        <Route path='/crypto'>
          <Crypto/>
        </Route>
        <Route path='/'>
          <Main onViewCrypto={handleViewCrypto}/>
        </Route>
      </Switch>
      }
    </div>
  );
}

export default withRouter(App);
