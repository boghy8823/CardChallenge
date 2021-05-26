import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/themes/default";
import ROUTES from "./constants/routes";
import SuspenseFallback from "./components/SuspenseFallback/SuspenseFallback";
import Header from  "./components/Header";

const Home = lazy(() => import("./pages/Home"));
const Cards = lazy(() => import("./pages/Cards"));
const Page404 = lazy(() => import("./pages/404"));

const routes = [
  { path: ROUTES.HOME, label: "Home" },
  { path: ROUTES.CARDS, label: "Cards" },

];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<SuspenseFallback />}>
        <Header routes={routes} />
        <Switch>
          <Route exact path={[ROUTES.HOME]} component={Home} />
          <Route exact path={ROUTES.CARDS} component={Cards} />
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
