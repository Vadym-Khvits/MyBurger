import * as React from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder/>
          <p>Loading...</p>
        </Layout>
      </div>
    );
  }
}

export default App;
