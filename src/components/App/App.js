import './App.css';
import Main from '../Main/Main';
import Crypto from '../Crypto/Crypto';

import { Route, Switch, useHistory, withRouter } from 'react-router-dom';

function App() {
  const history = useHistory();

  function handleViewCrypto() {
    history.push('/crypto');
  }

  return (
    <div className="App">
      <Switch>
        <Route path='/crypto'>
          <Crypto/>
        </Route>
        <Route path='/'>
          <Main onViewCrypto={handleViewCrypto}/>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
