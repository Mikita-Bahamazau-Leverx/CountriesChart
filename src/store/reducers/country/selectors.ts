import { createSelector } from "reselect";

import IStoreState from "../../../interfaces/store";

export const getCountryState = (state: IStoreState) => {
  return state.countryState;
};

export const currentCountry = createSelector(
  getCountryState,
  (countryState) => countryState.currentCountry
);

export const countries = createSelector(
  getCountryState,
  (countryState) => countryState.countries
);

export const isLoadingCountry = createSelector(
  getCountryState,
  (countryState) => countryState.isLoadingCountry
);
