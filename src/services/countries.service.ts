import ApiService from "./api.service";

import { IGetCountry, IGetCountries } from "../interfaces/country.service";

export default class CountryService extends ApiService {
  static async getAllCountries() {
    const data = await super.get({ api: "all", options: {} });
    return { data: data, totalCount: data.length };
  }

  static async getCountriesByFilter({ search, filter }: IGetCountries) {
    const data = await super.get({ api: `${filter}/${search}`, options: {} });
    return { data: data, totalCount: data.length };
  }

  static async getCountry(countryId: IGetCountry) {
    return super.get({ api: `alpha/${countryId}`, options: {} });
  }
}
