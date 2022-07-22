import { ICountry } from "../interfaces/objects";

export const formatCountry = (country: Record<string, any>): ICountry => ({
  flag: country.flag,
  countryName: country.name,
  region: country.region,
  id: country.numericCode,
  key: country.numericCode,
  population: country.population,
  languages: country.languages.map(
    (language: Record<string, any>) => language.name
  ),
  currencies: country.currencies,
});

export const formatCountries = (
  countries: Record<string, any>[]
): ICountry[] => {
  return countries.map(formatCountry);
};
