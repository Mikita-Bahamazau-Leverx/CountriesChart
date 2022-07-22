import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ActionCreators, selectors } from "../../store/reducers/country";

import { IGetCountries } from "../../interfaces/country.service";

import Countries from "./Countries";

const selector = createStructuredSelector({
  countries: selectors.countries,
  isLoadingCountries: selectors.isLoadingCountry,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllCountries: () => ActionCreators.getAllCountries()(dispatch),
  getCountriesByFilter: (args: IGetCountries) =>
    ActionCreators.getCountriesByFilter(args)(dispatch),
});

export default connect(selector, mapDispatchToProps)(Countries);
