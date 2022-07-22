import "./progressSpinner.scss";

import React from "react";

import { CircularProgress } from "@mui/material";

const DEFAULT_CLASSNAME = "spinner-component";
const CLASSNAMES = {
  SPINNER_WRAPPER: `${DEFAULT_CLASSNAME}__wrapper`,
};

const ProgressSpinner = ({ isLoading = false }: { isLoading: boolean }) => {
  return isLoading ? (
    <div className={CLASSNAMES.SPINNER_WRAPPER}>
      <CircularProgress className={DEFAULT_CLASSNAME} />
    </div>
  ) : null;
};

export default ProgressSpinner;
