import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Header = React.lazy(() => import("../components/Header"));
const Footer = React.lazy(() => import("../components/Footer"));
const Home = React.lazy(() => import("../pages/Home"));
const Countries = React.lazy(() => import("../pages/Countries"));
const Country = React.lazy(() => import("../pages/Country"));

const Router = () => {
  return (
    <Suspense fallback={<div className="loading">Loading</div>}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/countries">
            <Countries />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
