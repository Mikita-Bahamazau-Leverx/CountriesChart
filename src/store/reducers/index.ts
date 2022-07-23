import { combineReducers } from "redux";

import { reducer as countryState } from "./country";

export default () => combineReducers({ countryState });
