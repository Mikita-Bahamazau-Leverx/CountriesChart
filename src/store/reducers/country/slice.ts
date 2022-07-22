import { createSlice } from "@reduxjs/toolkit";

import { getCountryTypes, getAllCountriesTypes } from "./actionTypes";

import { isAnyOfMatch } from "../../../helpers/objects";
import { formatCountries, formatCountry } from "../../../helpers/countries";

import { ICountryState } from "../../../interfaces/store";

const CountrySlice = createSlice({
  name: "countryState",
  initialState: {
    currentCountry: {},
    countries: {
      data: [],
      totalCount: 0,
    },
    isLoadingCountry: false,
  } as unknown as ICountryState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOfMatch(getCountryTypes.start, getAllCountriesTypes.start),
        (state) => {
          state.isLoadingCountry = true;
        }
      )
      .addMatcher(isAnyOfMatch(getCountryTypes.success), (state, { data }) => {
        state.currentCountry = formatCountry(data);
      })
      .addMatcher(
        isAnyOfMatch(getAllCountriesTypes.success),
        (state, { data }) => {
          const formattedList = formatCountries(data.data);
          state.countries = {
            data: formattedList,
            totalCount: formattedList.length,
          };
        }
      )
      .addMatcher(
        isAnyOfMatch(getCountryTypes.success, getAllCountriesTypes.success),
        (state) => {
          state.isLoadingCountry = false;
        }
      )
      .addMatcher(
        isAnyOfMatch(getCountryTypes.error, getAllCountriesTypes.error),
        (state) => {
          state.isLoadingCountry = false;
        }
      );
  },
});

export default CountrySlice.reducer;
