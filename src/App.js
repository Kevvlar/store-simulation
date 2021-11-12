import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { Route, Switch } from "react-router-dom";

import ShopsPage from "./pages/ShopsPage/ShopsPage";
import ShopContent from "./pages/ShopContent/ShopContent";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ShopsPage} />
            <Route exact path="/shop" component={ShopContent} />
          </Switch>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
