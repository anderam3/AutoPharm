import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Account from './Account';
import Checkout from './Checkout';
import Form from './Form';
import Order from './Order';
import NotFound from './NotFound'
import PaymentOptions from './PaymentOptions';
import PaymentReceived from './PaymentReceived';
import Welcome from './Welcome';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact={true} path="/" component={Welcome} />
          <Route exact={true} path="/Account" component={Account} />
          <Route exact={true} path="/Checkout" component={Checkout} />
          <Route exact={true} path="/Order" component={Order} />
          <Route exact={true} path="/PaymentOptions" component={PaymentOptions} />
          <Route exact={true} path="/PaymentReceived" component={PaymentReceived} />
          <Route exact={true} path="/Welcome" component={Welcome} />
          <Route exact={true} path="/Form/:id" component={Form} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter