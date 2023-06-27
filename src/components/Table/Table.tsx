import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import createStyles from "./styles";

const DataTable = React.forwardRef<any, any>(function Table(
  {
    containerStyle,
    sx,
    columns,
    rows,
    page = 0,
    perPage = 10,
    loading = false,
    hideFooterPagination = false,
    checkboxSelection = false,
    hideFooter = false,
    hideFooterSelectedRowCount = true,
    ...props
  },
  ref
) {
  const styles = createStyles();
  const styleOverrides = sx || {};
  const handlePaginationModelChange = (newModel: any) => {
    const { pageSize, page } = newModel;
  };

  return (
    <Grid sx={[styles.wrapTableContent, containerStyle || {}]}>
      <DataGrid
        ref={ref}
        sx={{ ...styles.defaultStyles, ...styleOverrides }}
        rows={rows?.map((item: any, idx: string) => ({ ...item, id: idx + 1 }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: page, pageSize: perPage },
          },
        }}
        pageSizeOptions={[10, 20, 50, 100]}
        checkboxSelection={checkboxSelection}
        hideFooterPagination={hideFooterPagination}
        hideFooterSelectedRowCount={hideFooterSelectedRowCount}
        hideFooter={hideFooter}
        loading={loading}
        onPaginationModelChange={handlePaginationModelChange}
        {...props}
      />
    </Grid>
  );
});

export default React.memo(DataTable);
