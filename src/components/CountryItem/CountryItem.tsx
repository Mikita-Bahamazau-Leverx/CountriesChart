import "./countryItem.scss";

import React from "react";

import { Card, Typography, CardContent, List, ListItem } from "@mui/material";

import { ICountry } from "interfaces/objects";

const DEFAULT_CLASSNAME = "country-item";
const CLASSNAMES = {
  COUNTRY_WRAPPER: `${DEFAULT_CLASSNAME}__wrapper`,
  COUNTRY_DETAILS: `${DEFAULT_CLASSNAME}__details`,
  COUNTRY_FLAG: `${DEFAULT_CLASSNAME}__flag`,
  COUNTRY_FIELDS: `${DEFAULT_CLASSNAME}__fields`,
  MAIN_DETAILS: `${DEFAULT_CLASSNAME}__main-details`,
  ADDITION: `${DEFAULT_CLASSNAME}__addition`,
  TEXT: `${DEFAULT_CLASSNAME}__text`,
};

interface CountryItemProps {
  country: ICountry | null;
}

const CountryItem = ({ country }: CountryItemProps) => {
  return (
    <div className={CLASSNAMES.COUNTRY_WRAPPER}>
      <img
        src={country?.flag}
        alt="country flag"
        className={CLASSNAMES.COUNTRY_FLAG}
      />
      <div className={CLASSNAMES.COUNTRY_DETAILS}>
        <Card className={CLASSNAMES.MAIN_DETAILS}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Capital: ${country?.capital || "-"}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Region: ${country?.region}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Continents: ${country?.continents?.join(", ")}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {`Status: ${country?.status}`}
            </Typography>
          </CardContent>
        </Card>
        <Card className={CLASSNAMES.ADDITION}>
          <CardContent>
            <List>
              <ListItem>
                <Typography variant="body2" color="text.secondary">
                  {`Population: ${country?.population}`}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography variant="body2" color="text.secondary">
                  {`Languages: ${country?.languages.join(", ")}`}
                </Typography>
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Card className={CLASSNAMES.ADDITION}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <p className={CLASSNAMES.TEXT}>{`Currencies: `}</p>
              <List>
                {country?.currencies?.map((currency) => {
                  return (
                    <ListItem>
                      {" "}
                      {`${currency.symbol}${currency.symbol && ": "}${
                        currency.name
                      }`}
                    </ListItem>
                  );
                }) || <ListItem>{"-"}</ListItem>}
              </List>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CountryItem;
