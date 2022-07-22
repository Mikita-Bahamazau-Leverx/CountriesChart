import { ICountry } from "./objects";

export interface ICountryState {
  currentCountry: ICountry | null;
  countries: {
    data: ICountry[];
    totalCount: number;
    [key: string]: unknown;
  };
  isLoadingCountry: boolean;
  isLoadingCountries: boolean;
}

export default interface IStoreState {
  countryState: ICountryState;
}
