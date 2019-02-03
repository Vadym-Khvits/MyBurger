import * as React from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Checkout from './containers/Checkout/Checkout';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/chekout" component={Checkout} />
              <Route path="/" exact={true} component={BurgerBuilder} />              
            </Switch>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
