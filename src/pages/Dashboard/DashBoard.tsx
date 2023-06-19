import React from "react";
import { Grid, Box, TextField } from "@mui/material";

import { MainLayout } from "../../layouts/MainLayout";
import createStyles from "./styles";
import { ImportData } from "../../components/ImportData";
import DataTable from "../../components/Table/Table";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useDispatch } from "react-redux";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/Modal";
import { DetailXML } from "../../components/DetailXML";
import { ButtonCus } from "components/Button";
import { Text } from "components/Text";
import moment from "moment";
import { ValidateDate } from "utils";

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const { showModal, hideModal, isOpen } = useModal();
  const [state, setState] = React.useState({
    startDate: null,
    endDate: null,
  });

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
      flex: 1,
      headerName: "Tên File",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "age",
      flex: 1,
      headerName: "Ngày tạo",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "action",
      flex: 0.5,
      headerName: "Action",
      align: "right",
      headerAlign: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        const handleClick = (e: any, row: any) => {
          e.stopPropagation();
          showModal(row);
        };
        return (
          <Box>
            <ButtonCus
              variant="contained"
              onClick={(e: any) => handleClick(e, params.row)}
            >
              Chi tiết
            </ButtonCus>
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
    { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 11, lastName: "Roxie", firstName: "Harvey", age: 65 },
    { id: 12, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];

  const handleChange = ({ target }: any) => {
    setState((s) => ({
      ...s,
      [target.name]: moment(target.value).format("YYYY-MM-DD"),
    }));
  };

  React.useEffect(() => {
    if (ValidateDate(state.startDate)) console.log("222");
  }, [state.startDate]);

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
            <ButtonCus variant="contained" onClick={handleClickOpen}>
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
              <TextField
                size="small"
                type="date"
                sx={{ marginRight: "16px", width: "20%" }}
                value={state.startDate}
                name="startDate"
                onChange={handleChange}
              />
              <TextField
                size="small"
                type="date"
                sx={{ width: "20%" }}
                value={state.endDate}
                name="endDate"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <ImportData open={open} onClose={() => handleClose()} />
          <Grid item xs={12}>
            <DataTable
              rows={rows}
              columns={columns}
              sx={style.wTable}
              hideFooterPagination={false}
              hideFooter={false}
            />
          </Grid>
          {isOpen && <DetailXML open={isOpen} onClose={() => hideModal()} />}
        </>
      }
    />
  );
};

export default Dashboard;
