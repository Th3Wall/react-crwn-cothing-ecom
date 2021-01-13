import './App.scss';
import { Fragment } from 'react';
import { Homepage } from './pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';

function App() {
  return (
    <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
    </Fragment>
  );
}

export default App;
