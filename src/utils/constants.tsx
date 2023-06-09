import DashboardIcon from "@mui/icons-material/Dashboard";
import PestControlIcon from "@mui/icons-material/PestControl";
import PieChartIcon from "@mui/icons-material/PieChart";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import ImportExportIcon from '@mui/icons-material/ImportExport';

export enum EnumNotificationType {
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}

export const KEY_CONTEXT = {
  AUTH_TOKEN: "authToken",
  LANGUAGE: "language",
  ISACTIVE: 'isactive',
  USER: "user",
};

export enum EnumValueType {
  "String" = "String",
  "Number" = "Number",
  "Boolean" = "Boolean",
  "Object" = "Object",
  "Array" = "Array",
  "Null" = "Null",
  "Undefined" = "Undefined",
  "Function" = "Function",
}


export const Menu = [
  { icon: <ImportExportIcon />, label: "Imports", href: "/" },
  { icon: <DashboardIcon />, label: "Dữ liệu lần đấu", href: "/datafirst" },
  { icon: <PieChartIcon />, label: "Dữ liệu định kỳ", href: "/datacurrent" },
  { icon: <LineAxisIcon />, label: "Excel", href: "/excel" },
  { icon: <PestControlIcon />, label: "Kết quả đối soát", href: "/controlresults" },
];
