import React from "react";
import { Provider } from "react-redux";
import { mount as enzymeMount } from "enzyme";
import { ThemeProvider } from "styled-components";
import { createStore } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import reducers from "../store/PaymentMethods";
import theme from "../styles/themes/default";

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const mount = (Component, config = { actions: [] }) => {
  config.actions.forEach((action) => {
    store.dispatch(action);
  });

  return {
    wrapper: enzymeMount(
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>{Component}</ThemeProvider>
        </Provider>
      </Router>
    ),
    store,
  };
};
