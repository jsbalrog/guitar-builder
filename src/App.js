import React from "react";

import Layout from "./containers/Layout/Layout";
import GuitarBuilder from "./containers/GuitarBuilder/GuitarBuilder";

function App() {
  return (
    <div>
      <Layout>
        <GuitarBuilder />
      </Layout>
    </div>
  );
}

export default App;
