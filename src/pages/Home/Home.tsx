import React from "react";

import CountryTable from "../../components/CountryTable";

import { ICountry } from "../../interfaces/objects";
import { rows } from "../../constants/mockedData";

const Home = () => {
  const mappedRows = rows.map((row) => ({
    flag: row.flag,
    countryName: row.name,
    region: row.region,
    id: row.numericCode,
    key: row.numericCode,
    population: row.population,
    languages: row.languages.map((language) => language.name),
    currencies: row.currencies,
  })) as ICountry[];

  return (
    <div className="main__wrapper wrapper">
      <main className="main">
        <CountryTable rows={mappedRows} />
        Lorem ipsum dolor sit amet.
      </main>
    </div>
  );
};

export default Home;
