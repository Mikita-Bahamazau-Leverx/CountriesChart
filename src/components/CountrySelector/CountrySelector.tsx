import "./countrySelector.scss";

import React from "react";

import { Button, Typography, MenuItem, Select, Divider } from "@mui/material";

import { ICountryList, ISelectedItem } from "../../interfaces/objects";

import useDebounce from "../../hooks/useDebounce";

import regionOptions from "../../constants/regions";

const DEFAULT_CLASSNAME = "country-selector";
const CLASSNAMES = {
  WRAPPER: `${DEFAULT_CLASSNAME}__wrapper`,
  SELECTED_ITEM: `${DEFAULT_CLASSNAME}__selected-item`,
  SELECT_FIELD: `${DEFAULT_CLASSNAME}__select-field`,
};

interface CountrySelectorProps {
  countries: ICountryList;
  items: ISelectedItem[];
  handleChangeItem: (itemId: number, newProps: Record<string, any>[]) => void;
  handleDeleteItem: (itemId: number) => void;
  handleAddButtonClick: () => void;
}

const CountrySelector = ({
  countries,
  items,
  handleChangeItem,
  handleDeleteItem,
  handleAddButtonClick,
}: CountrySelectorProps) => {
  return (
    <div className={CLASSNAMES.WRAPPER}>
      <Typography gutterBottom variant="h5" component="div">
        Bar Chart
      </Typography>
      <Divider
        sx={{
          marginBlock: 1,
        }}
      />
      {items.map((item) => (
        <div
          key={`country-selector:${item.id}`}
          className={CLASSNAMES.SELECTED_ITEM}
        >
          <Select
            className={CLASSNAMES.SELECT_FIELD}
            onChange={(e) =>
              handleChangeItem(item.id, [
                {
                  key: "region",
                  value: e.target.value,
                },
              ])
            }
          >
            {regionOptions.map((option) => {
              return (
                <MenuItem
                  key={`country-selector-region-option:${option + item.id}`}
                  value={option}
                >
                  {option}
                </MenuItem>
              );
            })}
          </Select>
          <Select
            className={CLASSNAMES.SELECT_FIELD}
            onChange={(e) =>
              handleChangeItem(item.id, [
                {
                  key: "name",
                  value: e.target.value,
                },
                {
                  key: "isSelected",
                  value: true,
                },
              ])
            }
          >
            {countries.data
              ?.filter((country) =>
                item.region ? country.region === item.region : true
              )
              .map((country) => {
                return (
                  <MenuItem
                    key={`country-selector-countries-option:${
                      country.name + item.id
                    }`}
                    value={country.name}
                    disabled={items.some(
                      (searchItem) => searchItem.name === country.name
                    )}
                  >
                    {country.name}
                  </MenuItem>
                );
              })}
          </Select>
          <Button
            size="small"
            color="error"
            sx={{
              color: "#fff",
              fontSize: 12,
              paddingInline: 4,
              backgroundColor: "#e53838",
              "&:hover": {
                backgroundColor: "#eb6161",
              },
            }}
            onClick={() => handleDeleteItem(item.id)}
          >
            Remove
          </Button>
        </div>
      ))}
      {!!items.length && (
        <Divider
          sx={{
            marginBlock: 1,
          }}
        />
      )}
      <Button
        size="small"
        sx={{
          height: 40,
          color: "#fff",
          fontSize: 12,
          paddingInline: 4,
          backgroundColor: "#8884d8",
          "&:hover": {
            backgroundColor: "#aface7",
          },
        }}
        onClick={handleAddButtonClick}
      >
        Add More
      </Button>
    </div>
  );
};

export default CountrySelector;
