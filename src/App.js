import React from "react";

import Layout from "./components/Layout/Layout";
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
