import { MainLayout } from "layouts/MainLayout";
import React, { memo, useCallback } from "react";
import { Spreadsheet } from "react-spreadsheet";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import Button from "components/Button/Button";
import { Text } from "components/Text";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
import { TabContext, TabPanel } from "@mui/lab";
import DataSheet from "react-datasheet";
import "react-datasheet/lib/react-datasheet.css";
import createStyles from "./styles";

const Excel = () => {
  const [data, setData] = React.useState([]);
  const [activeSheet, setActiveSheet] = React.useState<string>("0");
  const styles = createStyles();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();
      const rABS = !!reader.readAsBinaryString;
      reader.onload = () => {
        const fileData = reader.result;
        const workbook = XLSX.read(fileData, { type: rABS ? "binary" : "array", bookVBA: true });
        const sheetNames = workbook.SheetNames;
        const sheetsData = sheetNames.map((sheetName) => {
          const worksheet = workbook.Sheets[sheetName];
          const range = XLSX.utils.decode_range(worksheet["!ref"] || "A1");
          const columns = Array.from({ length: range.e.c + 1 }, (_, i) => ({
            /* for an array of arrays, the keys are "0", "1", "2", ... */
            key: String(i),
            /* column labels: encode_col translates 0 -> "A", 1 -> "B", 2 -> "C", ... */
            name: XLSX.utils.encode_col(i),
          }));
          const rows = Array.from({ length: range.e.r + 1 }, (_, i) => ({
            /* for an array of arrays, the keys are "0", "1", "2", ... */
            key: String(i),
            /* rows labels: encode_col translates 0 -> "A", 1 -> "B", 2 -> "C", ... */
            name: XLSX.utils.encode_row(i),
          }));
          return {
            name: sheetName,
            data: XLSX.utils.sheet_to_json(worksheet, { raw: false, header: 1 }),
            columns,
            rows,
          };
        });
        setData((prevSheets) => [...prevSheets, ...sheetsData] as any);
      };
      reader.readAsBinaryString(file);
      setData([]);
      setActiveSheet("0");
    });
  }, []);

  const { getRootProps } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.ms-excel": [],
    },
  });

  // const sheetRenderer = (props: any) => {
  //   const { cell } = props;
  //   return { cell };
  // };

  const SheetRenderer = ({ columns, ...props }: any) => {
    const { children, className } = props;
    return (
      <table style={styles.defaultStyles as any}>
        <thead>
          <tr>
            <th style={styles.Spreadsheet_header as any} />
            {columns.map((col: any, colIndex: number) => (
              <th style={styles.Spreadsheet_header as any} key={colIndex}>
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {children?.map((row: any, rowIndex: number) => (
            <tr key={rowIndex}>
              <th style={styles.Spreadsheet_header as any}>{+row.key + 1}</th>

              {row.props.cells?.map((cell: any, cellIndex: number) => (
                <td style={styles.Spreadsheet_cell as any} key={cellIndex}>
                  <div> {cell}</div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveSheet(newValue);
  };

  return (
    <MainLayout
      children={
        <Box>
          <Box sx={styles.container}>
            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "16px" }} {...getRootProps({ className: "dropzone" })}>
              <Button variant="contained">Chọn files</Button>
              <Text>(Only *.xlsx will be accepted)</Text>
            </Grid>
            {data.length > 0 && <Button variant="contained">Submit</Button>}
          </Box>
          <TabContext value={activeSheet}>
            <Tabs value={activeSheet} onChange={handleChange} textColor="primary" indicatorColor="primary">
              {data.map((sheet: any, index: number) => (
                <Tab key={`${index} - ${sheet.name}`} label={sheet.name} value={index.toString()} />
              ))}
            </Tabs>
            {data.map((sheetData: any, index: number) => {
              if (activeSheet === index.toString()) {
                return (
                  <TabPanel key={index} value={activeSheet}>
                    <Spreadsheet
                      data={sheetData.data}
                      DataViewer={(props: any) => {
                        return <div>{props.cell?.value ? props.cell?.value : props.cell}</div>;
                      }}

                    />
                    {/* <DataSheet data={sheetData.data} sheetRenderer={(props: any) => <SheetRenderer {...props} columns={sheetData.columns} />} valueRenderer={(cell: any) => cell} /> */}
                  </TabPanel>
                );
              }
            })}
          </TabContext>
        </Box>
      }
    />
  );
};

export default memo(Excel);
