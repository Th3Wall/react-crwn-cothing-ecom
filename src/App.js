import './App.scss';
import React, { Fragment } from 'react';
import { Homepage } from './pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInOut from './pages/SignInOut/SignInOut';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Fragment>
          <Header currentUser={currentUser} />
          <Switch>
            <Route  exact path="/" component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInOut} />
          </Switch>
      </Fragment>
    )
  }
  
}

export default App;
