import "./countriesSearch.scss";

import React from "react";

import classnames from "classnames";

import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import SearchBar from "../SearchBar";

const DEFAULT_CLASSNAME = "countries-search";
const CLASSNAMES = {
  WRAPPER: `${DEFAULT_CLASSNAME}__wrapper`,
};

interface CountriesSearchProps {
  className: string;
  selectedOption: string;
  options: string[];
  search: string;
  setSelectedOption: (value: string) => void;
  setSearchQuery: (value: string) => void;
}

const CountriesSearch = ({
  className,
  selectedOption,
  options,
  search,
  setSelectedOption,
  setSearchQuery,
}: CountriesSearchProps) => {
  return (
    <div className={classnames(className, CLASSNAMES.WRAPPER)}>
      <div>
        <InputLabel variant="standard" htmlFor="countries-select">
          Filter by:
        </InputLabel>
        <Select
          onChange={(e: SelectChangeEvent) => setSelectedOption(e.target.value)}
          value={selectedOption}
          inputProps={{
            id: "countries-select",
          }}
          sx={{
            width: 120,
          }}
        >
          {options.map((option) => {
            return <MenuItem value={option}>{option}</MenuItem>;
          })}
        </Select>
      </div>
      <SearchBar setSearchQuery={setSearchQuery} search={search} />
    </div>
  );
};

export default CountriesSearch;
