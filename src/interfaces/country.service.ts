import { ICountry } from "./objects";

export type IGetCountry = ICountry["id"];

export interface IGetCountries {
  search: string;
  filter: string;
}
