import './App.scss';
import { Fragment } from 'react';
import { Homepage } from './pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInOut from './pages/SignInOut/SignInOut';

function App() {
  return (
    <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInOut} />
        </Switch>
    </Fragment>
  );
}

export default App;
