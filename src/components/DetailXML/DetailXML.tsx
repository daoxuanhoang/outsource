import React from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { Modal } from "../Modal";
import CloseIcon from "@mui/icons-material/Close";
import createStyles from "./styles";
import { useModal } from "../../hooks/useModal";
import { DetailXMLDataFirst } from "./components";
import { IDetailXML } from "types/component";

const DetailXML = ({ open, onClose, type }: IDetailXML) => {
  const { content } = useModal();
  const style = createStyles();
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="customized-dialog-title" direction={"up"}>
      <Box sx={style.container}>
        <Grid sx={style.flexCenter}>
          <Typography id="modal-modal-title" variant="h6">
            Chi tiết
          </Typography>
          <CloseIcon sx={style.cursor} onClick={onClose} />
        </Grid>
        <Divider sx={style.mB8} />
        <Box>
          {content.id}
          {type === "dataFirst" ? <DetailXMLDataFirst /> : <>Asds</>}
        </Box>
      </Box>
    </Modal>
  );
};

export default React.memo(DetailXML);
