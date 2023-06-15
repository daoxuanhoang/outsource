import {
  Box,
  Grid,
  Typography,
  Divider,
  TextField,
  Button,
} from "@mui/material";
import { Modal } from "../Modal";
import xml2js from "xml2js";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import createStyles from "./styles";

const ImportData = ({ open, onClose }: any) => {
  const [file, setFile] = React.useState();
  const [content, setContent] = React.useState();
  // console.log(content);
  
  const style = createStyles();

  const parser = xml2js.parseString;
  const reader = new FileReader();

  const changeHandler = (e: any) => {
    setFile(e.target.files[0]);
    // console.log(e.target.files[0]);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    reader.readAsText(file as any);
    reader.onloadend = (evt: any) => {
      const readerData = evt.target.result;
      parser(readerData, (err: any, result: any) => {
        setContent(result);
      });
    };
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      direction={"up"}
    >
      <Box sx={style.container}>
        <Grid sx={style.flexCenter}>
          <Typography id="modal-modal-title" variant="h6">
            Chọn file XML để upload
          </Typography>
          <CloseIcon onClick={onClose} />
        </Grid>
        <Divider />
        <Grid
          container
          spacing={2}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item sx={{ marginTop: "16px", width:'100%' }}>
            <form>
              <input
                id="upload"
                type="file"
                accept="text/xml, application/xml"
                onChange={changeHandler}
              />
            </form>
          </Grid>
          <Grid item sx={{width:'100%'}}>
          </Grid>
        </Grid>
        <Divider sx={{ marginTop: "16px" }} />
        <Box sx={{ marginTop: "16px", display: "flex", justifyContent: "end" }}>
          <Button variant="contained" onClick={submitHandler}>Lưu dữ liệu</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImportData;
