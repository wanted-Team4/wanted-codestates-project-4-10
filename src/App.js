import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/configure";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./Page/Home";

const persistor = persistStore(store);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
