import * as types from "./actionTypes";

import CountryService from "../../../services/countries.service";

import { defaultAction } from "../../../helpers/defaultAction";

import {
  IGetCountries,
  IGetCountry,
} from "../../../interfaces/country.service";

export const getAllCountries = () => {
  return defaultAction({
    apiFunction: () => CountryService.getAllCountries(),
    types: types.getAllCountriesTypes,
  });
};

export const getCountriesByFilter = ({ search, filter }: IGetCountries) => {
  return defaultAction({
    apiFunction: () => CountryService.getCountriesByFilter({ search, filter }),
    types: types.getCountriesTypes,
  });
};

export const getCountry = (countryId: IGetCountry) => {
  return defaultAction({
    apiFunction: () => CountryService.getCountry(countryId),
    types: types.getCountryTypes,
  });
};
