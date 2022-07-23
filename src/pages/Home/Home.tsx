import "./home.scss";

import React, { useEffect, useState } from "react";

import classnames from "classnames";

import DataChart from "../../components/BarChart";
import CountrySelector from "../../components/CountrySelector";
import ProgressSpinner from "../../components/ProgressSpinner";

import useDebounce from "../../hooks/useDebounce";

import {
  ICountry,
  ICountryList,
  ISelectedItem,
} from "../../interfaces/objects";

const DEFAULT_CLASSNAME = "home-page";
const CLASSNAMES = {
  WRAPPER: `${DEFAULT_CLASSNAME}__wrapper`,
};

interface HomeProps {
  countries: ICountryList;
  isLoadingCountries: boolean;
  getAllCountries: () => void;
}

const Home = ({
  countries,
  isLoadingCountries,
  getAllCountries,
}: HomeProps) => {
  const [idCounter, setIdCounter] = useState(0);

  const [items, setItems] = useState([{ id: 1 }] as ISelectedItem[]);

  const debouncedItems = useDebounce(items, 100);

  const [chartItems, setChartItems] = useState([] as ICountry[]);

  const handleAddButtonClick = () => {
    const newId = idCounter + 1;
    const newItem = {
      id: newId,
    };

    const newItems = [...items, newItem];

    setIdCounter(newId);

    setItems(newItems);
  };

  const handleDeleteItem = (itemId: number) => {
    const newItems = items.filter((item) => item.id !== itemId);

    setItems(newItems);
  };

  const handleChangeItem = (
    itemId: number,
    newProps: Record<string, any>[]
  ) => {
    const changedItem = items.find((item) => item.id === itemId) as Record<
      string,
      any
    >;
    const restItems = items.filter((item) => item.id !== itemId);

    newProps.forEach((prop) => {
      changedItem[prop.key] = prop.value;
    });

    const newItems = [...restItems, changedItem as ISelectedItem].sort(
      (item) => item.id
    );

    setItems(newItems);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    const newChartItems = countries.data.filter((country) =>
      debouncedItems.find((item) => item.name === country.name)
    );
    setChartItems(newChartItems);
  }, [debouncedItems]);

  return (
    <div className={classnames(CLASSNAMES.WRAPPER, "wrapper")}>
      <CountrySelector
        countries={countries}
        items={debouncedItems}
        handleChangeItem={handleChangeItem}
        handleDeleteItem={handleDeleteItem}
        handleAddButtonClick={handleAddButtonClick}
      />
      <DataChart data={chartItems} axisDefs={{ x: "name", y: "population" }} />
      <ProgressSpinner isLoading={isLoadingCountries} />
    </div>
  );
};

export default Home;
