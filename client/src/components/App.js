import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Spinner from './spinner';
import Header from './modules/appHeader';
import routes from '../configs/routes';
// import Cart from './modules/cart';
import PrivateRoute from './privateRoute';
import { getCurrentUser } from './session/sessionOperations';

const AsyncMenuPage = lazy(() =>
  import('../pages/Menu' /* webpackChunkName: "Menu-page" */),
);
const AsyncMenuItemPage = lazy(() =>
  import('../pages/MenuItem' /* webpackChunkName: "Menu_Item-page" */),
);
const AsyncAboutPage = lazy(() =>
  import('../pages/About' /* webpackChunkName: "About-page" */),
);
const AsyncContactPage = lazy(() =>
  import('../pages/Contact' /* webpackChunkName: "Contact-page" */),
);
const AsyncDeliveryPage = lazy(() =>
  import('../pages/Delivery' /* webpackChunkName: "Delivery-page" */),
);
const AsyncAccountPage = lazy(() =>
  import('../pages/Account' /* webpackChunkName: "Account-page" */),
);
const AsyncOrderHistoryPage = lazy(() =>
  import('../pages/OrderHistory' /* webpackChunkName: "OrderHistory-page" */),
);
const AsyncPlannerPage = lazy(() =>
  import('../pages/Planner' /* webpackChunkName: "Planner-page" */),
);
const AsyncNotFoundPage = lazy(() =>
  import('../pages/NotFound' /* webpackChunkName: "NotFound-page" */),
);
const AsyncCartPage = lazy(() =>
  import('../pages/Cart' /* webpackChunkName: "Cart-page" */),
);
const AsyncHomePage = lazy(() =>
  import('../pages/Home' /* webpackChunkName: "Home-page" */),
);
const AsyncSignInPage = lazy(() =>
  import('../pages/SignIn' /* webpackChunkName: "SignIn-page" */),
);
const AsyncSignUpPage = lazy(() =>
  import('../pages/SignUp' /* webpackChunkName: "SignUp-page" */),
);
class App extends Component {
  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route
              exact
              path={routes.HOME}
              component={() => <AsyncHomePage />}
            />
            <Route
              exact
              path={routes.MENU}
              component={props => <AsyncMenuPage {...props} />}
            />
            <Route
              path={routes.MENU_ITEM}
              component={props => <AsyncMenuItemPage {...props} />}
            />
            <Route
              exact
              path={routes.ABOUT}
              component={() => <AsyncAboutPage />}
            />
            <Route
              exact
              path={routes.CONTACT}
              component={() => <AsyncContactPage />}
            />
            <Route
              exact
              path={routes.DELIVERY}
              component={() => <AsyncDeliveryPage />}
            />
            <PrivateRoute
              exact
              path={routes.ACCOUNT}
              component={() => <AsyncAccountPage />}
            />
            <PrivateRoute
              exact
              path={routes.ORDER_HISTORY}
              component={() => <AsyncOrderHistoryPage />}
            />
            <PrivateRoute
              exact
              path={routes.PLANNER}
              component={() => <AsyncPlannerPage />}
            />
            <Route
              exact
              path={routes.SIGN_IN}
              component={props => <AsyncSignInPage {...props} />}
            />
            <Route
              exact
              path={routes.SIGN_UP}
              component={props => <AsyncSignUpPage {...props} />}
            />
            <Route
              exact
              path={routes.CART}
              component={props => <AsyncCartPage {...props} />}
            />
            <Route
              exact
              path={routes.NOT_FOUND}
              component={() => <AsyncNotFoundPage />}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = {
  getUser: getCurrentUser,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
