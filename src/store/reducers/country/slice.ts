import { createSlice } from "@reduxjs/toolkit";

import {
  getCountryTypes,
  getAllCountriesTypes,
  getCountriesTypes,
} from "./actionTypes";

import { isAnyOfMatch } from "../../../helpers/objects";
import { formatCountries, formatCountry } from "../../../helpers/countries";

import { ICountryState } from "../../../interfaces/store";

const CountrySlice = createSlice({
  name: "countryState",
  initialState: {
    currentCountry: null,
    countries: {
      data: [],
      totalCount: 0,
    },
    isLoadingCountries: false,
    isLoadingCountry: false,
  } as unknown as ICountryState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOfMatch(getAllCountriesTypes.start, getCountriesTypes.start),
        (state) => {
          state.isLoadingCountries = true;
        }
      )
      .addMatcher(isAnyOfMatch(getCountryTypes.start), (state) => {
        state.isLoadingCountry = true;
      })
      .addMatcher(isAnyOfMatch(getCountryTypes.success), (state, { data }) => {
        state.currentCountry = formatCountry(data[0]);
      })
      .addMatcher(
        isAnyOfMatch(getAllCountriesTypes.success, getCountriesTypes.success),
        (state, { data }) => {
          const formattedList = formatCountries(data.data);
          state.countries = {
            data: formattedList,
            totalCount: formattedList.length,
          };
        }
      )
      .addMatcher(
        isAnyOfMatch(getAllCountriesTypes.success, getCountriesTypes.success),
        (state) => {
          state.isLoadingCountries = false;
        }
      )
      .addMatcher(isAnyOfMatch(getCountryTypes.success), (state) => {
        state.isLoadingCountry = false;
      })
      .addMatcher(
        isAnyOfMatch(getAllCountriesTypes.error, getCountriesTypes.error),
        (state) => {
          state.countries = {
            data: [],
            totalCount: 0,
          };
        }
      )
      .addMatcher(
        isAnyOfMatch(getAllCountriesTypes.error, getCountriesTypes.error),
        (state) => {
          state.isLoadingCountries = false;
        }
      )
      .addMatcher(isAnyOfMatch(getCountryTypes.error), (state) => {
        state.isLoadingCountry = false;
      });
  },
});

export default CountrySlice.reducer;
