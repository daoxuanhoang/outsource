import React from "react";
import { Grid, TextField, InputAdornment } from "@mui/material";

import { MainLayout } from "../../layouts/MainLayout";
import createStyles from "./styles";
import { ImportData } from "../../components/ImportData";
import DataTable from "../../components/Table/Table";
import { GridColDef } from "@mui/x-data-grid";
import { ButtonCus } from "components/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useHome, useModal } from "hooks";
import { LoadingSkeleton } from "components/LoadingSkeleton";
import { Input } from "components/Input";

const Dashboard = () => {
  const [search, setSearch] = React.useState<string>("");
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const { onGetData, data, isLoading } = useHome();

  const { isOpen, showModal, hideModal } = useModal();

  const style = createStyles();

  const columns: GridColDef[] = [
    {
      field: "id",
      flex: 0.9,
      headerName: "Tên File",
      sortable: false,
      disableColumnMenu: true,
    },
  ];

  React.useEffect(() => {
    onGetData({page, perPage, search});
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickSearch = React.useCallback(() => {
    onGetData(search as any);
  }, [search]);

  const handlePaginationModelChange = (newModel: any) => {
    const { pageSize, page } = newModel;
    setPerPage(pageSize);
    setPage(page);
  };

  return (
    <MainLayout
      children={
        <>
          <Grid
            sx={{
              marginBottom: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <ButtonCus variant="contained" onClick={() => showModal(null)}>
              Import
            </ButtonCus>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Input
                type="search"
                onChange={handleSearch}
                value={search}
                placeholder="Nhập thông tin..."
                variant="outlined"
                sx={{ minWidth: "300px", marginRight: "16px" }}
                icon={{ component: <SearchIcon />, position: "end" }}
              />
              {/* <TextField
                type="search"
                placeholder="Nhập thông tin..."
                size="small"
                sx={{ minWidth: "300px", marginRight: "8px" }}
                onChange={handleSearch}
                value={search}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              /> */}
              <ButtonCus variant="contained" size="small" onClick={onClickSearch}>
                Search
              </ButtonCus>
            </Grid>
          </Grid>
          <ImportData open={isOpen} onClose={() => hideModal()} />
          <Grid item xs={12}>
            {isLoading && <LoadingSkeleton />}
            {!isLoading && data?.length > 0 && <DataTable rows={data} columns={columns} sx={style.wTable} page={page} perPage={perPage} onPaginationModelChange={handlePaginationModelChange} />}
          </Grid>
        </>
      }
    />
  );
};

export default Dashboard;
