import React, { useEffect } from "react";

import CountryTable from "../../components/CountryTable";

import { ICountryList } from "../../interfaces/objects";

interface HomeProps {
  countries: ICountryList;
  isLoadingCountries: boolean;
  getAllCountries: () => void;
}

const Home = ({
  countries,
  isLoadingCountries,
  getAllCountries,
}: HomeProps) => {
  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <div className="main__wrapper wrapper">
      <main className="main">
        Lorem ipsum dolor sit amet.
        <CountryTable tableData={countries} isLoading={isLoadingCountries} />
      </main>
    </div>
  );
};

export default Home;
