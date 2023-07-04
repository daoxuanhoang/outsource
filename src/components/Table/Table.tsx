import * as React from "react";
import { DataGrid, GridPagination } from "@mui/x-data-grid";
import { Grid } from "@mui/material";
import MuiPagination from "@mui/material/Pagination";
import createStyles from "./styles";
import { IDataTable, IPagination, ISXTheme } from "types/component";
import LinearProgress from "@mui/material/LinearProgress";

function Pagination(props: Pick<IPagination, any>) {
  const { total, page, perPage, onPaginationModelChange } = props;

  const pageCount = Math.ceil(total / perPage); /*useGridSelector(apiRef, gridPageCountSelector);*/
  const [currentPage, setCurrentPage] = React.useState(page);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    onPaginationModelChange({ page: value - 1, pageSize: perPage });
  };

  return <MuiPagination color="primary" className="MuiTablePagination-actions" count={pageCount || 0} page={currentPage + 1} onChange={handleChange} />;
}

function CustomPagination(props: any) {
  const { total } = props;
  return <GridPagination count={total ? total : 0} ActionsComponent={() => Pagination(props)} {...props} />;
}

const DataTable = React.forwardRef<any, IDataTable>(function Table(
  {
    containerStyle,
    sx,
    columns,
    rows = [],
    page,
    perPage,
    total,
    loading,
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
  const overfolowHidden = !rows.length ? styles.overflow : {};

  return (
    <Grid sx={[styles.wrapTableContent, containerStyle || {}] as ISXTheme}>
      <DataGrid
        ref={ref}
        sx={{ ...styles.defaultStyles, ...styleOverrides, ...overfolowHidden }}
        rows={rows?.map((item: any, idx: number) => ({ ...item, id: idx + 1 }))}
        slots={{
          pagination: () => CustomPagination({ total, page, perPage, onPaginationModelChange }),
          loadingOverlay: LinearProgress,
        }}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pageSize: perPage },
          },
        }}
        pagination
        loading={loading}
        pageSizeOptions={[10, 20, 50, 100]}
        checkboxSelection={checkboxSelection}
        hideFooterPagination={hideFooterPagination}
        hideFooterSelectedRowCount={hideFooterSelectedRowCount}
        hideFooter={hideFooter}
        onPaginationModelChange={onPaginationModelChange}
        {...props}
        {...GridPagination}
      />
    </Grid>
  );
});

export default React.memo(DataTable);
