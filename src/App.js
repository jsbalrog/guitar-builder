import React from "react";

import Layout from "./containers/Layout/Layout";
import GuitarBuilder from "./containers/GuitarBuilder/GuitarBuilder";
import Checkout from './containers/Checkout/Checkout';

function App() {
  return (
    <div>
      <Layout>
        <GuitarBuilder />
        <Checkout />
      </Layout>
    </div>
  );
}

export default App;
