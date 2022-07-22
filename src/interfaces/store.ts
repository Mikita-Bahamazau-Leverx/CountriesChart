import { ICountry } from "./objects";

export interface ICountryState {
  currentCountry: ICountry;
  countries: {
    data: ICountry[];
    totalCount: number;
    [key: string]: unknown;
  };
  isLoadingCountry: boolean;
}

export default interface IStoreState {
  countryState: ICountryState;
}
