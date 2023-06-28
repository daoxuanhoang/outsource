import React from "react";
import { DataTable } from "components/Table";
import { GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "a",
    flex: 1,
    headerName: "Tên File",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "MST",
    flex: 1,
    headerName: "Mã số thuế",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "MA_LOAI_GT",
    flex: 1,
    headerName: "Loại giao dịch",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "SO_GIAY_TO",
    flex: 1,
    headerName: "Số giấy tờ",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "TEN_KH",
    flex: 1,
    headerName: "Tên khách hàng",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "SO_TK",
    flex: 1,
    headerName: "Số tài khoản",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "NGAY_MO",
    flex: 1,
    headerName: "Ngày mở",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "NGAY_DONG",
    flex: 1,
    headerName: "Ngày đóng",
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "MA_LOAI_KH",
    flex: 1,
    headerName: "Loại khách hàng",
    sortable: false,
    disableColumnMenu: true,
  },
//   {
//     field: "NGAY_MO",
//     flex: 1,
//     headerName: "Ngày mở",
//     sortable: false,
//     disableColumnMenu: true,
//   },
];

const DetailXMLDataFirst = (content: any) => {  
  return <DataTable rows={[]} columns={columns} page={0} perPage={10} />;
};

export default React.memo(DetailXMLDataFirst);
