import { capitalizeFirstLetter } from "../helpers/string";
import { IError, IRequest } from "../interfaces/api.service";

export default class ApiService {
  static basicOptions = {
    headers: new Headers({
      "Content-type": "application/json",
    }),
  };

  static baseUrl = "https://restcountries.com/v2/";

  static async request({ api, options }: IRequest) {
    try {
      const response = await fetch(this.baseUrl + api, {
        ...this.basicOptions,
        ...options,
      });

      if (!response.ok) {
        throw response;
      }

      const result = await response.json();
      return result;
    } catch (err: IError) {
      if (err instanceof Response) {
        const parsedError = await err.json();
        return Promise.reject(parsedError);
      }
    }
  }

  static async get({ api, options }: IRequest) {
    return this.request({ api, options: { ...options, method: "GET" } });
  }

  static createSearchParams(paramObj: {
    [key: string]: string | number | boolean;
  }) {
    const result = [];
    for (const param in paramObj) {
      if (paramObj[param] !== "") {
        result.push(
          encodeURIComponent(capitalizeFirstLetter(param)) +
            "=" +
            encodeURIComponent(paramObj[param])
        );
      }
    }
    return result.join("&");
  }
}
