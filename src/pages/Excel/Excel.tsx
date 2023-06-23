import { MainLayout } from "layouts/MainLayout";
import React, { memo, useCallback } from "react";
import { Spreadsheet } from "react-spreadsheet";
import { Box, Grid } from "@mui/material";
import Button from "components/Button/Button";
import { Text } from "components/Text";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";

const data1 = [
  [{ value: "Flavors" }, { value: "hi" }],
  [{ value: "Vanilla" }, { value: "Chocolate" }],
  [{ value: "Strawberry" }, { value: "Cookies" }],
  [
    { value: "How much do you like ice cream?" },
    //   { value: 100, DataViewer: RangeView, DataEditor: RangeEdit }
  ],
];

const Excel = () => {
  const [data, setData] = React.useState([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryStr = reader.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        setData(sheetData as any);
      };
      reader.readAsBinaryString(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
    },
  });

  const sheetRenderer = (props: any) => {
    const { cells, columns, rows } = props;
    console.log("cells", cells);
    console.log("columns", columns);
    console.log("rows", rows);
    return (
      <table>
        <thead>
          <tr>
            {columns?.map((column: any, columnIndex: number) => (
              <th key={columnIndex}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map((row: any, rowIndex: number) => (
            <tr key={rowIndex}>
              {cells?.map((cell: any, cellIndex: number) => (
                <td key={cellIndex}>{cell.value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <MainLayout
      children={
        <Box>
          <Box className="container">
            <Grid {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <Button variant="contained" sx={{ marginRight: "8px" }}>
                Chọn files
              </Button>
              <Text>(Only *.xml will be accepted)</Text>
            </Grid>
          </Box>
          {data.length > 0 && <Spreadsheet data={data} Table={sheetRenderer}/>}
        </Box>
      }
    />
  );
};

export default memo(Excel);
