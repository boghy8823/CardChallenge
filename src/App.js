import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";
import GlobalStyle from  "./styles/globalStyles";
import ROUTES from "./constants/routes";
import SuspenseFallback from "./components/SuspenseFallback/SuspenseFallback";

const PaymentMethods = lazy(() => import("./pages/PaymentMethods"));
const Page404 = lazy(() => import("./pages/404"));


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<SuspenseFallback />}>
        <Switch>
          <Route exact path={ROUTES.DEFAULT} component={PaymentMethods} />
          <Route component={Page404} />
        </Switch>
      </Suspense>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
