import * as React from "react";
import {
  DataGrid
} from "@mui/x-data-grid";
import { Box } from "@mui/material";


export default function DataTable({columns, rows, ...props}: any) {
  return (
    <Box sx={[props?.sx || {}]}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        checkboxSelection
      />
    </Box>
  );
}
