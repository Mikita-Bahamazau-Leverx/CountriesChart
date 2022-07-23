import "./moduleHeader.scss";

import React from "react";

import { Link } from "react-router-dom";
import classnames from "classnames";
import { ArrowBack } from "@mui/icons-material";

interface IModuleHeader {
  title?: string | null;
  headClass?: string;
  headNavClass?: string;
  titleClass?: string;
  backLink?: string | null;
  children?: React.ReactNode;
}

const DEFAULT_CLASSNAME = "module-header";
const CLASSNAMES = {
  HEAD: `${DEFAULT_CLASSNAME}__head`,
  NAV: `${DEFAULT_CLASSNAME}__nav`,
  TITLE: `${DEFAULT_CLASSNAME}__title`,
};

const ModuleHeader = ({
  title,
  children,
  headClass = "",
  headNavClass = "",
  titleClass = "",
  backLink = null,
}: IModuleHeader) => {
  return (
    <div className={classnames(CLASSNAMES.HEAD, headClass)}>
      <nav className={classnames(CLASSNAMES.NAV, headNavClass)}>
        {backLink ? (
          <Link to={backLink}>
            <ArrowBack />
          </Link>
        ) : null}
        {title ? (
          <h3 className={classnames(CLASSNAMES.TITLE, titleClass)}>{title}</h3>
        ) : null}
      </nav>
      {children}
    </div>
  );
};

export default ModuleHeader;
