import React from "react";
import { Route } from 'react-router-dom';

import Layout from "./containers/Layout/Layout";
import GuitarBuilder from "./containers/GuitarBuilder/GuitarBuilder";
import Checkout from './containers/Checkout/Checkout';
import Party from './containers/Party/Party';

function App() {
  return (
    <div>
      <Layout>
        <Route path="/checkout" component={ Checkout } />
        <Route path="/party" component={ Party } />
        <Route path="/" exact component={ GuitarBuilder } />
      </Layout>
    </div>
  );
}

export default App;
