import "./countryTable.scss";

import React, { useState } from "react";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Stack } from "@mui/material";

const DEFAULT_CLASSNAME = "country-table";
const CLASSNAMES = {
  FLAG: `${DEFAULT_CLASSNAME}__flag`,
};

const columnsDefs: GridColDef[] = [
  {
    field: "flag",
    headerName: "flag",
    minWidth: 70,
    maxWidth: 150,
    flex: 0.5,
    sortable: false,
    renderCell: (params) => {
      return <img className={CLASSNAMES.FLAG} src={params.row.flag} />;
    },
  },
  {
    field: "countryName",
    headerName: "Country name",
    minWidth: 100,
    maxWidth: 450,
    flex: 0.5,
  },
  {
    field: "region",
    headerName: "Region",
    minWidth: 70,
    maxWidth: 190,
    flex: 0.4,
    sortable: false,
  },
  {
    field: "population",
    headerName: "Population",
    minWidth: 70,
    maxWidth: 190,
    flex: 0.4,
  },
  { field: "languages", headerName: "Languages", width: 130, sortable: false },
  {
    field: "currencies",
    headerName: "Currencies",
    minWidth: 90,
    flex: 1,
    sortable: false,
    renderCell: (params) => {
      return params.row.currencies?.map((currency: Record<string, any>) => {
        return (
          <p>{`${currency.symbol}${currency.symbol && ": "}{currency.name}`}</p>
        );
      });
    },
  },
];

interface CountryTableProps {
  tableData: {
    data: Record<string, any>[];
    totalCount: number;
  };
  isLoading: boolean;
}

const CountryTable = ({ tableData, isLoading }: CountryTableProps) => {
  const [pageSize, setPageSize] = useState(10);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={tableData.data}
        loading={isLoading}
        columns={columnsDefs}
        pageSize={pageSize}
        onPageSizeChange={(pageSize) => setPageSize(pageSize)}
        rowsPerPageOptions={[10, 25, 50, 100]}
        onRowClick={() => console.log("you've clicked on the row")}
        disableColumnSelector
        disableColumnMenu
        components={{
          NoRowsOverlay: () => (
            <Stack height="100%" alignItems="center" justifyContent="center">
              {"No countries found by your filter"}
            </Stack>
          ),
        }}
      />
    </div>
  );
};

export default CountryTable;
