import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Modal } from "../Modal";
import xml2js from "xml2js";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import createStyles from "./styles";
import { IDataStore, IModal, INofifyState } from "../../types";
import { useHome, useModal } from "hooks";
import { ButtonCus } from "components/Button";
import { Text } from "components/Text";
import { error } from "store/notify";
import { useDispatch } from "react-redux";
import { UploadDropzone } from "components/UploadDropzone";
import axios from "axios";

const ImportData = ({ open, onClose }: IModal) => {
  const [myFiles, setMyFiles] = React.useState([]);
  const { onImportXML } = useHome();
  const dispatch = useDispatch();

  const [content, setContent] = React.useState();

  const style = createStyles();

  const parser = xml2js.parseString;
  const reader = new FileReader();

  const changeHandler = (file: any) => {
    setMyFiles([...myFiles, ...file] as any);
  };

  const removeFile = (file: any) => {
    setMyFiles(myFiles.filter((f: any) => f?.name !== file?.name));
  };

  const removeAll = () => {
    setMyFiles([]);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    if (!myFiles.length) {
      dispatch(error({ message: "Chưa chọn file" } as INofifyState));
      return;
    } else {
      for (let i = 0; i < myFiles.length; i++) {
        // reader.readAsText(myFiles[i] as any);
        // reader.onload = (evt: any) => {
        //   const readerData = evt.target.result;
        //   parser(readerData, (err: any, result: any) => {
        //     setContent(result);
        //   });
        // };
        // reader.readAsDataURL(myFiles[i]);
        const file = myFiles[i];
        formData.append("file", file);
      }
      await onImportXML(formData);
      setMyFiles([]);
      onClose && onClose();
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="customized-dialog-title" direction={"up"}>
      <Box sx={style.container}>
        <Grid sx={style.flexCenter}>
          <Typography id="modal-modal-title" variant="h6">
            Chọn file XML để upload
          </Typography>
          <CloseIcon onClick={onClose} />
        </Grid>
        <Divider />
        <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item sx={{ marginTop: "16px", width: "100%" }}>
            <UploadDropzone onChange={changeHandler} myFiles={myFiles} removeAll={removeAll} removeFile={removeFile} />
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
