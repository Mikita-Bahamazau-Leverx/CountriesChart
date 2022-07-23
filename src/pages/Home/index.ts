import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ActionCreators, selectors } from "../../store/reducers/country";

const selector = createStructuredSelector({
  countries: selectors.countries,
  isLoadingCountries: selectors.isLoadingCountries,
});

import Home from "./Home";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getAllCountries: () => ActionCreators.getAllCountries()(dispatch),
});

export default connect(selector, mapDispatchToProps)(Home);
