import "./countries.scss";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import classnames from "classnames";

import CountriesSearch from "../../components/CountriesSearch";
import CountryTable from "../../components/CountryTable";

import useDebounce from "../../hooks/useDebounce";

import { ICountryList } from "../../interfaces/objects";
import { IGetCountries } from "../../interfaces/country.service";

import { countryFilterOptions } from "../../constants/countries";

const DEFAULT_CLASSNAME = "countries-page";
const CLASSNAMES = {
  WRAPPER: `${DEFAULT_CLASSNAME}__wrapper`,
  SEARCH_BAR: `${DEFAULT_CLASSNAME}__search-bar`,
};

interface CountriesProps {
  countries: ICountryList;
  isLoadingCountries: boolean;
  getAllCountries: () => void;
  getCountriesByFilter: (args: IGetCountries) => void;
}

const Countries = ({
  countries,
  isLoadingCountries,
  getAllCountries,
  getCountriesByFilter,
}: CountriesProps) => {
  const navigate = useNavigate();

  const navigateToCountry = (countryId: string) =>
    navigate(`/country/${countryId}`);

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
    <div className={classnames(CLASSNAMES.WRAPPER, "wrapper")}>
      <CountriesSearch
        className={CLASSNAMES.SEARCH_BAR}
        selectedOption={selectedOption}
        options={countryFilterOptions}
        setSelectedOption={setSelectedOption}
        search={search}
        setSearchQuery={setSearchQuery}
      />
      <CountryTable
        tableData={countries}
        isLoading={isLoadingCountries}
        onRowClick={navigateToCountry}
      />
    </div>
  );
};

export default Countries;
