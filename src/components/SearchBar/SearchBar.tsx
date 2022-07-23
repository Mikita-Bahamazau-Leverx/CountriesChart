import "./searchBar.scss";

import React from "react";

import TextField from "@mui/material/TextField";

const DEFAULT_CLASSNAME = "search-bar";
const CLASSNAMES = {
  TEXT_FIELD: `${DEFAULT_CLASSNAME}__text-field`,
};

interface SearchBarProps {
  search: string;
  setSearchQuery: (value: string) => void;
}

const SearchBar = ({ search, setSearchQuery }: SearchBarProps) => {
  return (
    <form>
      <TextField
        id="search-bar"
        className={CLASSNAMES.TEXT_FIELD}
        value={search}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter your request"
        variant="outlined"
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBar;
