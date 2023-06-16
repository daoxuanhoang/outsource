import DashboardIcon from "@mui/icons-material/Dashboard";
import PestControlIcon from "@mui/icons-material/PestControl";

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

export const Menu = [
  { icon: <DashboardIcon />, label: "Dashboard", href: "/" },
  { icon: <PestControlIcon />, label: "Đối soát", href: "/control" },
];
