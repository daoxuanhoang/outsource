import React from "react";
import {
  Grid,
  Button,
} from "@mui/material";

import { MainLayout } from "../../layouts/MainLayout";
import createStyles from "./styles";
import { ImportData } from "../../components/ImportData";
import DataTable from "../../components/Table/Table";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const style = createStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
            <DataTable />
          </Grid>
        </>
      }
    />
  );
};

export default Dashboard;
