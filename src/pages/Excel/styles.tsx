export default () => {
  return {
    container: { marginBottom: "16px", display: "flex" },
    defaultStyles: {
      borderCollapse: "collapse",
      tableLayout: "fixed",
      "& .Spreadsheet": {
        "& .Spreadsheet__table": {
          "& .Spreadsheet__cell": {
            cursor: "default",
          },
        },
      },
    },
  };
};
