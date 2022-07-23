export interface ICurrency {
  name: string;
  symbol: string;
}

export interface ICountry {
  flag: string;
  name: string;
  region: string;
  id: string | number;
  key: string | number;
  population: number;
  languages: string[];
  currencies: ICurrency[];
  capital?: string;
  continents?: string[];
  status?: string;
}

export interface ICountryList {
  data: ICountry[];
  totalCount: number;
}

export type ISelectedItem = {
  id: number;
  name?: string;
  region?: string;
};
