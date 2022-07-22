import "./country.scss";

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import CountryItem from "../../components/CountryItem";
import ProgressSpinner from "../../components/ProgressSpinner";
import ModuleHeader from "../../components/ModuleHeader";

import { ICountry } from "../../interfaces/objects";

const DEFAULT_CLASSNAME = "country-page";

interface CountryProps {
  country: ICountry | null;
  isLoadingCountry: boolean;
  getCountry: (countryId: string) => void;
}

const Country = ({ country, isLoadingCountry, getCountry }: CountryProps) => {
  const { countryId } = useParams();

  const handleCountryLoad = async () => {
    if (countryId && countryId !== country?.id) {
      getCountry(countryId);
    }
  };

  useEffect(() => {
    handleCountryLoad();
  }, [countryId]);

  const CountryDetailsElement = <CountryItem country={country} />;

  return (
    <div className={DEFAULT_CLASSNAME}>
      <ModuleHeader
        title={country?.name || "unknown country"}
        backLink={"/countries"}
      />
      {country ? CountryDetailsElement : <div>no data available</div>}
      <ProgressSpinner isLoading={isLoadingCountry} />
    </div>
  );
};

export default Country;
