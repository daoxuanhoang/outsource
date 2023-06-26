import React from "react";
import { Grid, Box, Skeleton } from "@mui/material";

import { MainLayout } from "../../layouts/MainLayout";
import createStyles from "./styles";
import DataTable from "../../components/Table/Table";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useModal } from "../../hooks/useModal";
import { DetailXML } from "../../components/DetailXML";
import { ButtonCus } from "components/Button";
import { Text } from "components/Text";
import moment from "moment";
import { EnumMaKH, ValidateDate } from "utils";
import { DatePicker } from "components/DatePicker";
import { LoadingSkeleton } from "components/LoadingSkeleton";

const DataFirst = () => {
  const { showModal, hideModal, isOpen } = useModal();
  const [state, setState] = React.useState({
    startDate: null,
    endDate: null,
  });
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  console.log(loading);

  const style = createStyles();

  const columns: GridColDef[] = [
    {
      field: "mst",
      flex: 1,
      headerName: "Mã số thuế",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Ma_loai_GD",
      flex: 1,
      headerName: "Mã loại giấy tờ",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params: GridRenderCellParams) => {
        return <>{EnumMaKH[params.row.Ma_loai_GD]}</>;
      },
    },
    // {
    //   field: "",
    //   // flex: 1,
    //   headerName: "Số giấy tờ",
    //   sortable: false,
    //   disableColumnMenu: true,
    // },
    {
      field: "Ten_KH",
      flex: 1,
      headerName: "Tên khách hàng",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "So_TK",
      flex: 1,
      headerName: "Số tài khoản",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Ngay_Mo",
      flex: 1,
      headerName: "Ngày mở",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Ngay_Dong",
      flex: 1,
      headerName: "Ngày đóng",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "Ma_Loai_KH",
      flex: 1,
      headerName: "Loại tài khoản",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "id",
      flex: 1,
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
            <ButtonCus variant="contained" onClick={(e: any) => handleClick(e, params.row)}>
              Chi tiết
            </ButtonCus>
          </Box>
        );
      },
    },
  ];

  const handleChange = (name: string) => (newValue: any) => {
    setState((s) => ({ ...s, [name]: newValue?.$d }));
  };

  React.useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // React.useEffect(() => {
  //   if (ValidateDate(state.startDate) && ValidateDate(state.endDate)) console.log("222");
  // }, [state.startDate, state.endDate]);

  return (
    <MainLayout
      children={
        <>
          <Grid sx={style.container}>
            <Grid sx={style.container.item}>
              <Box sx={{ marginRight: "16px", flex: 0.2, position: "relative" }}>
                <DatePicker value={state.startDate} onChange={handleChange("startDate")} />
                {state.startDate && state.endDate && !moment(moment(state.startDate).format("YYYY-MM-DD")).isSameOrBefore(moment(state.endDate).format("YYYY-MM-DD")) && (
                  <Text color="red" sx={{ position: "absolute", zIndex: 999 }}>
                    Ngày bắt đầu phải nhỏ hơn ngày kết thúc
                  </Text>
                )}
                {(!state.startDate && state.endDate) ||
                  (state.startDate && !state.endDate && (
                    <Text color="red" sx={{ position: "absolute", zIndex: 999 }}>
                      Bạn phải chọn ngày bắt đầu và ngày kết thúc
                    </Text>
                  ))}
              </Box>
              <Box sx={{ flex: 0.2 }}>
                <DatePicker value={state.endDate} onChange={handleChange("endDate")} />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <DataTable
              rows={data}
              columns={columns}
              sx={style.wTable}
              components={{
                LoadingOverlay: LoadingSkeleton,
              }}
              loading={true}
            />
          </Grid>
          {isOpen && <DetailXML open={isOpen} onClose={() => hideModal()} />}
        </>
      }
    />
  );
};

export default DataFirst;
