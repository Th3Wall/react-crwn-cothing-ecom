import './App.scss';
import React, { Fragment } from 'react';
import { Homepage } from './pages/Homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import SignInOut from './pages/SignInOut/SignInOut';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
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
            <Route path="/login" component={SignInOut} />
          </Switch>
      </Fragment>
    )
  }
  
}

export default App;
