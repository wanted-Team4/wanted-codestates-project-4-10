import { BrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import { Provider } from "react-redux";
import React from "react";
import store from "./store/store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Home />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
