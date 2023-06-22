import React from "react";
import { Grid, Box } from "@mui/material";

import { MainLayout } from "../../layouts/MainLayout";
import createStyles from "./styles";
import DataTable from "../../components/Table/Table";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useModal } from "../../hooks/useModal";
import { DetailXML } from "../../components/DetailXML";
import { ButtonCus } from "components/Button";
import moment from "moment";
import { ValidateDate } from "utils";
import { Text } from "components/Text";
import { DatePicker } from "components/DatePicker";

const Periodicdata = () => {
  const { showModal, hideModal, isOpen } = useModal();
  const [state, setState] = React.useState({
    startDate: null,
    endDate: null,
  });

  const style = createStyles();

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

  const handleChange = (name: string) => (newValue: any) => {
    setState((s) => ({ ...s, [name]: newValue?.$d }));
  };

  React.useEffect(() => {
    if (
      ValidateDate(state.startDate) &&
      ValidateDate(state.endDate) &&
      moment(state.startDate).isBefore(state.endDate)
    )
      console.log("222");
  }, [state.startDate, state.endDate]);

  

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
            <Grid
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{ marginRight: "16px", flex: 0.2, position: "relative" }}
              >
                <DatePicker
                  value={state.startDate}
                  onChange={handleChange("startDate")}
                />
                {state.startDate &&
                  state.endDate &&
                  !moment(
                    moment(state.startDate).format("YYYY-MM-DD")
                  ).isSameOrBefore(moment(state.endDate).format("YYYY-MM-DD")) && (
                    <Text
                      color="red"
                      sx={{ position: "absolute", zIndex: 999 }}
                    >
                      Ngày bắt đầu phải nhỏ hơn ngày kết thúc
                    </Text>
                  )}
                {(!state.startDate && state.endDate) ||
                  (state.startDate && !state.endDate && (
                    <Text
                      color="red"
                      sx={{ position: "absolute", zIndex: 999 }}
                    >
                      Bạn phải chọn ngày bắt đầu và ngày kết thúc
                    </Text>
                  ))}
              </Box>
              <Box sx={{ flex: 0.2 }}>
                <DatePicker
                  value={state.endDate}
                  onChange={handleChange("endDate")}
                />
              </Box>
            </Grid>
          </Grid>
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

export default Periodicdata;
