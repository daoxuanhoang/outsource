import DashboardIcon from "@mui/icons-material/Dashboard";
import PestControlIcon from "@mui/icons-material/PestControl";
import PieChartIcon from '@mui/icons-material/PieChart';

export enum EnumNotificationType {
  success = "success",
  info = "info",
  warning = "warning",
  error = "error",
}

export const KEY_CONTEXT = {
  AUTH_TOKEN: "authToken",
  LANGUAGE: "language",
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
  { icon: <DashboardIcon />, label: "Dữ liệu lần đấu", href: "/" },
  {
    icon: <PieChartIcon />,
    label: "Dữ liệu định kỳ",
    href: "/periodicdata",
  },
  { icon: <PestControlIcon />, label: "Đối soát", href: "/control" },
];
