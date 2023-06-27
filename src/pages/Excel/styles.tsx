export default () => {
  return {
    container: { marginBottom: "16px", display: "flex" },
    defaultStyles: {
      borderCollapse: "collapse",
      tableLayout: "fixed",
      // ".cell": {
      //   padding: "8px !important",
      //   border: "1px solid red !important",
      // },
    },
    Spreadsheet_header: {
      minWidth: "6em",
      padding: "4px",
      background: "rgba(0, 0, 0, 0.04)",
      color: "rgba(0, 0, 0, 0.4)",
      textAlign: "center",
      border: "1px solid rgba(0, 0, 0, 0.4)",
    },
    Spreadsheet_cell: {
      minWidth: "6em",
      padding: "4px",
      background: "#fff",
      color: "#000",
      textAlign: "center",
      border: "1px solid rgba(0, 0, 0, 0.4)",
    },
  };
};
