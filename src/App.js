
import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import ROUTES from "./constants/routes";
import SuspenseFallback from "./components/SuspenseFallback/SuspenseFallback";

const Home = lazy(() => import("./pages/Home"));
const History = lazy(() => import("./pages/History"));
const Page404 = lazy(() => import("./pages/404"));

const App = () => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Switch>
        <Route
          exact
          path={[ROUTES.HOME]}
          component={Home}
        />
        <Route exact path={ROUTES.HISTORY} component={History} />
        <Route component={Page404} />
      </Switch>
    </Suspense>
  );
};

export default App;
