import { Dispatch } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ActionCreators, selectors } from "../../store/reducers/country";
import { IGetCountry } from "../../interfaces/country.service";

import Country from "./Country";

const selector = createStructuredSelector({
  country: selectors.currentCountry,
  isLoadingCountry: selectors.isLoadingCountry,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getCountry: (args: IGetCountry) => ActionCreators.getCountry(args)(dispatch),
});

export default connect(selector, mapDispatchToProps)(Country);
