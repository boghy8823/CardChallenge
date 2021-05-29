import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";
import ROUTES from "./constants/routes";
import SuspenseFallback from "./components/SuspenseFallback/SuspenseFallback";

const Cards = lazy(() => import("./pages/Cards"));
const Page404 = lazy(() => import("./pages/404"));


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<SuspenseFallback />}>
        <Switch>
          <Route exact path={ROUTES.DEFAULT} component={Cards} />
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
