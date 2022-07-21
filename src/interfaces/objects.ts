export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface ICountry {
  flag: string;
  countryName: string;
  region: string;
  id: string | number;
  key: string | number;
  population: number;
  languages: string[];
  currencies: ICurrency[];
}
