import React from "react";
import { Grid, Box } from "@mui/material";

import { MainLayout } from "../../layouts/MainLayout";
import createStyles from "./styles";
import DataTable from "../../components/Table/Table";
import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useModal } from "../../hooks/useModal";
import { DetailXML } from "../../components/DetailXML";
import { ButtonCus } from "components/Button";
import { Text } from "components/Text";
import moment from "moment";
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
    {
      field: "action",
      flex: 0.2,
      headerName: "Action",
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
      sortable: false,
      renderCell: (params: GridRenderCellParams) => {
        const handleClick = (row: any) => {
          showModal(row);
        };
        return (
          <Box>
            <ButtonCus variant="contained" onClick={() => handleClick(params.row)}>
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
  }, [startDate, endDate, onGetData]);

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
            {isLoading && <LoadingSkeleton />}
            {!isLoading && !data?.length && <Text>Data Empty</Text>}
            {!isLoading && data?.length > 0 && <DataTable rows={data} columns={columns} page={0} perPage={10} sx={style.wTable} />}
          </Grid>
          {isOpen && <DetailXML type={"dataFirst"} open={isOpen} onClose={() => hideModal()} />}
        </>
      }
    />
  );
};

export default DataFirst;
