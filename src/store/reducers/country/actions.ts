import * as types from "./actionTypes";

import CountryService from "../../../services/countries.service";

import { defaultAction } from "../../../helpers/defaultAction";

import { IGetCountry } from "interfaces/country.service";

export const getAllCountries = () => {
  return defaultAction({
    apiFunction: () => CountryService.getAllCountries(),
    types: types.getAllCountriesTypes,
  });
};

export const getCountry = (countryId: IGetCountry) => {
  return defaultAction({
    apiFunction: () => CountryService.getCountry(countryId),
    types: types.getCountryTypes,
  });
};
