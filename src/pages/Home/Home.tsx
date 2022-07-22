import React, { useEffect, useState } from "react";

import CountriesSearch from "../../components/CountriesSearch";
import CountryTable from "../../components/CountryTable";

import useDebounce from "../../hooks/useDebounce";

import { ICountryList } from "../../interfaces/objects";
import { IGetCountries } from "../../interfaces/country.service";

import { countryFilterOptions } from "../../constants/countries";

const DEFAULT_CLASSNAME = "home-page";
const CLASSNAMES = {
  SEARCH_BAR: `${DEFAULT_CLASSNAME}__search-bar`,
};

interface HomeProps {
  countries: ICountryList;
  isLoadingCountries: boolean;
  getAllCountries: () => void;
  getCountriesByFilter: (args: IGetCountries) => void;
}

const Home = ({
  countries,
  isLoadingCountries,
  getAllCountries,
  getCountriesByFilter,
}: HomeProps) => {
  const [selectedOption, setSelectedOption] = useState(countryFilterOptions[0]);

  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 200);

  const setSearchQuery = (value: string) => {
    setSearch(value);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    if (debouncedSearch) {
      getCountriesByFilter({ search: debouncedSearch, filter: selectedOption });
    } else {
      getAllCountries();
    }
  }, [selectedOption, debouncedSearch]);

  return (
    <div className="main__wrapper wrapper">
      <main className="main">
        Lorem ipsum dolor sit amet.
        <CountriesSearch
          className={CLASSNAMES.SEARCH_BAR}
          selectedOption={selectedOption}
          options={countryFilterOptions}
          setSelectedOption={setSelectedOption}
          search={search}
          setSearchQuery={setSearchQuery}
        />
        <CountryTable tableData={countries} isLoading={isLoadingCountries} />
      </main>
    </div>
  );
};

export default Home;
