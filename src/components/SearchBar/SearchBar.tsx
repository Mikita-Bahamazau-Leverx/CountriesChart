import "./searchBar.scss";

import React from "react";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

interface SearchBarProps {
  search: string;
  setSearchQuery: (value: string) => void;
}

const SearchBar = ({ search, setSearchQuery }: SearchBarProps) => {
  return (
    <form>
      <TextField
        id="search-bar"
        className="text"
        value={search}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter your request"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );
};

export default SearchBar;
