import "./App.scss";
import { GlobalStyles } from './global.styles';
import React, { Fragment, useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from './components/Header/Header';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import Spinner from "./components/Spinner/Spinner";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const Homepage = lazy(() => import('./pages/Homepage/Homepage'));
const ShopPage = lazy(() => import('./pages/Shop/Shop'));
const Checkout = lazy(() => import('./pages/Checkout/Checkout'));
const ContactsPage = lazy(() => import('./pages/Contacts/Contacts'));
const SignInOut = lazy(() => import('./pages/SignInOut/SignInOut'));

const App = ({ checkUserSession, currentUser }) => {
  
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <Fragment>
      <GlobalStyles />
      <Header />
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={ShopPage} />
              <Route path="/contacts" component={ContactsPage} />
              <Route exact path="/checkout" component={Checkout} />
              <Route path="/login" render={() => currentUser ? <Redirect to="/"/> : <SignInOut />} />
            </Switch>
          </Suspense>
        </ErrorBoundary>
    </Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);