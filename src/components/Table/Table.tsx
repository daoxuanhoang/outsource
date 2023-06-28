import * as React from "react";
import { DataGrid, GridPagination, gridPageCountSelector, useGridApiContext, useGridSelector } from "@mui/x-data-grid";
import { Grid, TablePaginationProps } from "@mui/material";
import MuiPagination from "@mui/material/Pagination";
import createStyles from "./styles";
import { IDataTable, ISXTheme } from "types/component";

function Pagination({ page, onPageChange, className }: Pick<TablePaginationProps, "page" | "onPageChange" | "className">) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
}

function CustomPagination(props: any) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}

const DataTable = React.forwardRef<any, IDataTable>(function Table(
  {
    containerStyle,
    sx,
    columns,
    rows = [],
    page = 0,
    perPage = 10,
    hideFooterPagination = false,
    checkboxSelection = false,
    hideFooter = false,
    hideFooterSelectedRowCount = true,
    onPaginationModelChange,
    ...props
  },
  ref
) {
  const styles = createStyles();
  const styleOverrides = sx || {};

  return (
    <Grid sx={[styles.wrapTableContent, containerStyle || {}] as ISXTheme}>
      <DataGrid
        ref={ref}
        sx={{ ...styles.defaultStyles, ...styleOverrides }}
        rows={rows?.map((item: any, idx: number) => ({ ...item, id: idx + 1 }))}
        slots={{
          pagination: CustomPagination,
        }}
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
        onPaginationModelChange={onPaginationModelChange}
        {...props}
      />
    </Grid>
  );
});

export default React.memo(DataTable);
