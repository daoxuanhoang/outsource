import Button from "components/Button/Button";
import React from "react";
import { useDropzone } from "react-dropzone";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Text } from "components/Text";
import createStyles from "./styles";
import { IUploadSInitStep } from "types";

function UploadDropzone({ onChange, myFiles, removeFile, removeAll }: IUploadSInitStep) {
  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    onChange(acceptedFiles);
  }, []);
  const styles = createStyles();
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/xml": [],
      "application/xml": [],
    },
  });

  const files = myFiles?.map((file: any) => (
    <Box key={file.path} sx={styles.uploadContent}>
      <li>
        {file.path} - {file.size} bytes
      </li>
      <IconButton aria-label="delete" size="small" onClick={() => removeFile(file)}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </Box>
  ));

  return (
    <Box className="container">
      <Grid sx={styles.header} {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <Button variant="contained" sx={{ marginRight: "8px" }}>
          Chọn files
        </Button>
        <Text>(Only *.xml will be accepted)</Text>
      </Grid>
      <Box>
        <h4>Files</h4>
        <Box sx={{ fontWeight: "600" }}>{files}</Box>
      </Box>
      {/* {files.length > 0 && <button onClick={removeAll}>Remove All</button>} */}
    </Box>
  );
}

export default React.memo(UploadDropzone);
