import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
        <Routes>
          <Route path="/countries" element={<Countries />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
