import React from "react";
import { Grid, Button, Box } from "@mui/material";

import { MainLayout } from "../../layouts/MainLayout";
import createStyles from "./styles";
import { ImportData } from "../../components/ImportData";
import DataTable from "../../components/Table/Table";
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/Modal";
import { DetailXML } from "../../components/DetailXML";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const { showModal, hideModal, isOpen } = useModal();

  const style = createStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const columns: GridColDef[] = [
    {
      field: "firstName",
      headerName: "Tên File",
      minWidth: 190,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "age",
      headerName: "Ngày tạo",
      minWidth: 190,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "action",
      headerName: "Action",
      minWidth: 190,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        const handleClick = (e: any, row: any) => {
          e.stopPropagation();
          showModal(row);
        };
        return (
          <Box>
            <Button
              variant="contained"
              size="small"
              onClick={(e: any) => handleClick(e, params.row)}
            >
              Chi tiết
            </Button>
          </Box>
        );
      },
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  return (
    <MainLayout
      children={
        <>
          <Grid sx={{ marginBottom: "8px" }}>
            <Button variant="contained" onClick={handleClickOpen}>
              Import
            </Button>
          </Grid>
          <ImportData open={open} onClose={() => handleClose()} />
          <Grid item xs={12}>
            <DataTable rows={rows} columns={columns} sx={style.wTable} />
          </Grid>
          {isOpen && (
              <DetailXML open={isOpen} onClose={() => hideModal()} />
            )}
        </>
      }
    />
  );
};

export default Dashboard;
