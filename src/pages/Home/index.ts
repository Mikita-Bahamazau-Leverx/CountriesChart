import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ActionCreators, selectors } from "../../store/reducers/country";

import Home from "./Home";

const selector = createStructuredSelector({
  countries: selectors.countries,
  isLoadingCountries: selectors.isLoadingCountry,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllCountries: () => ActionCreators.getAllCountries()(dispatch),
});

export default connect(selector, mapDispatchToProps)(Home);
