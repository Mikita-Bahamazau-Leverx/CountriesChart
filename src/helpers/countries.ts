import { ICountry, ICurrency } from "../interfaces/objects";

export const formatCountry = (
  country: Record<string, any>
): ICountry | null => {
  if (!country) {
    return null;
  }
  return {
    flag: country.flags?.png || country.flags?.svg,
    countryName: country.name?.official,
    region: country.region,
    id: country.cca2,
    key: country.cca2 + country.name.official,
    population: country.population,
    languages: country.languages && Object.values(country.languages),
    currencies:
      country.currencies && (Object.values(country.currencies) as ICurrency[]),
  } as ICountry;
};

export const formatCountries = (
  countries: Record<string, any>[]
): ICountry[] => {
  return countries
    .map(formatCountry)
    .filter((country) => country) as ICountry[];
};
