import { Grid } from "@mui/material";
import React from "react";
import { MainLayout } from "../../layouts/MainLayout";

const ControlPage = () => {
  return (
    <MainLayout
      children={
        <>
          <Grid>Control</Grid>
        </>
      }
    />
  );
};

export default ControlPage;
