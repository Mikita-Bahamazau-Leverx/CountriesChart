import ApiService from "./api.service";

import { IGetCountry } from "../interfaces/country.service";

export default class CountryService extends ApiService {
  static async getAllCountries() {
    const data = await super.get({ api: "all", options: {} });
    return { data: data, totalCount: data.length };
  }

  static async getCountry(countryId: IGetCountry) {
    return super.get({ api: `country/${countryId}`, options: {} });
  }
}
