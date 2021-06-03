import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import reducers from "./store/PaymentMethods";
import App from "./App";
import { PUBLIC_URL } from "./constants/globalConstants";

const store = createStore(reducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <Router basename={PUBLIC_URL}>
          <App />
        </Router>
    </Provider>,
  document.getElementById("root")
);
