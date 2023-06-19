import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Modal } from "../Modal";
import xml2js from "xml2js";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import createStyles from "./styles";
import { IDataStore, INofifyState } from "../../types";
import { useHome } from "hooks";
import { ButtonCus } from "components/Button";
import { Text } from "components/Text";
import { error } from "store/notify";
import { useDispatch } from "react-redux";

const ImportData = ({ open, onClose }: any) => {
  const [file, setFile] = React.useState("");
  const { onImportXML, isLoading } = useHome();
  const dispatch = useDispatch();

  const [content, setContent] = React.useState();

  const style = createStyles();

  const parser = xml2js.parseString;
  const reader = new FileReader();

  const changeHandler = (e: any) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!file) {
      dispatch(error({ message: "Chưa chọn file" } as INofifyState));
      return;
    } else {
      // reader.readAsText(file as any);
      // reader.onloadend = (evt: any) => {
      //   const readerData = evt.target.result;
      //   parser(readerData, (err: any, result: any) => {
      //     setContent(result);
      //   });
      // };
      onImportXML(file);
      setFile("");
      onClose && onClose();
    }
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
          <Grid item sx={{ marginTop: "16px", width: "100%" }}>
            <form>
              <input
                id="upload"
                type="file"
                accept="text/xml, application/xml"
                onChange={changeHandler}
              />
            </form>
          </Grid>
          <Grid item sx={{ width: "100%" }}></Grid>
        </Grid>
        <Divider sx={{ marginTop: "16px" }} />
        <Box sx={{ marginTop: "16px", display: "flex", justifyContent: "end" }}>
          <ButtonCus variant="contained" onClick={submitHandler}>
            Lưu dữ liệu
          </ButtonCus>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImportData;
