import React from "react";

const DEFAULT_CLASSNAME = "home-page";
const CLASSNAMES = {
  SEARCH_BAR: `${DEFAULT_CLASSNAME}__search-bar`,
};

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div className="main__wrapper wrapper">
      <main className="main">Lorem ipsum dolor sit amet.</main>
    </div>
  );
};

export default Home;
