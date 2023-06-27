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
import { useHome } from "hooks";

const DataFirst = () => {
  const { showModal, hideModal, isOpen } = useModal();
  const { onGetData, data, isLoading } = useHome();
  const [startDate, setStartDate] = React.useState<Date | null>(null);

  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const style = createStyles();

  const columns: GridColDef[] = [
    {
      field: "id",
      flex: 1,
      headerName: "Tên File",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "LLL",
      flex: 1,
      headerName: "Ngày Upload",
      sortable: false,
      disableColumnMenu: true,
    },
    // {
    //   field: "userId",
    //   flex: 1,
    //   headerName: "Mã loại giấy tờ",
    //   sortable: false,
    //   disableColumnMenu: true,
    //   renderCell: (params: GridRenderCellParams) => {
    //     return <>{EnumMaKH[params.row.userId]}</>;
    //   },
    // },
    {
      field: "action",
      flex: 0.2,
      headerName: "Action",
      align: "center",
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
    if (name === "startDate") {
      setStartDate(newValue?.$d);
    } else {
      setEndDate(newValue?.$d);
    }
  };

  React.useEffect(() => {
    onGetData({ startDate, endDate });
  }, []);

  React.useEffect(() => {
    if (startDate && endDate && moment(moment(startDate).format("YYYY-MM-DD")).isSameOrBefore(moment(endDate).format("YYYY-MM-DD"))) {
      onGetData({ startDate, endDate });
    }
  }, [startDate, endDate]);

  return (
    <MainLayout
      children={
        <>
          <Grid sx={style.container}>
            <Grid sx={style.container.item}>
              <Box sx={{ marginRight: "16px", flex: 0.2, position: "relative" }}>
                <DatePicker value={startDate} onChange={handleChange("startDate")}>
                  {!!startDate && !!endDate && !moment(moment(startDate).format("YYYY-MM-DD")).isSameOrBefore(moment(endDate).format("YYYY-MM-DD")) && (
                    <Text color="red" sx={{ position: "absolute", zIndex: 999 }}>
                      Ngày bắt đầu phải nhỏ hơn ngày kết thúc
                    </Text>
                  )}
                  {(!!!startDate && !!endDate) ||
                    (!!startDate && !!!endDate && (
                      <Text color="red" sx={{ position: "absolute", zIndex: 999 }}>
                        Bạn phải chọn ngày bắt đầu và ngày kết thúc
                      </Text>
                    ))}
                </DatePicker>
              </Box>
              <Box sx={{ flex: 0.2 }}>
                <DatePicker value={endDate} onChange={handleChange("endDate")} />
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {isLoading && !data?.length && <LoadingSkeleton />}
            {!isLoading && !data?.length && <Text>Data Empty</Text>}
            {data?.length > 0 && <DataTable rows={data} columns={columns} sx={style.wTable} />}
          </Grid>
          {isOpen && <DetailXML open={isOpen} onClose={() => hideModal()} />}
        </>
      }
    />
  );
};

export default DataFirst;
