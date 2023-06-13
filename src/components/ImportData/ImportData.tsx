import { Box, Grid, Typography, Divider, TextField, Button } from "@mui/material";
import { Modal } from "../Modal";
import CloseIcon from '@mui/icons-material/Close';
import createStyles from "./styles";

const ImportData = ({ open, onClose }: any) => {
  const style = createStyles();
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      direction={"up"}
    >
      <Box sx={style.container}>
        <Grid sx={style.flexCenter}>
          <Typography id="modal-modal-title" variant="h5">
            Nhập dữ liệu
          </Typography>
          <CloseIcon onClick={onClose} />
        </Grid>
        <Divider sx={{marginTop: '16px'}} />
        <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              label="Mã dịch vụ"
              type="text"
              variant="standard"
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              label="Tên dịch vụ"
              type="text"
              variant="standard"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              autoFocus
              margin="dense"
              label="Phòng ban dịch vụ"
              type="text"
              variant="standard"
              fullWidth
            />
             <TextField
              autoFocus
              margin="dense"
              label="Thông tin nhà cung cấp dịch vụ"
              type="text"
              variant="standard"
              fullWidth
            />
          </Grid>
        </Grid>
        <Divider sx={{marginTop: '16px'}} />
        <Box sx={{marginTop: '16px',display:'flex', justifyContent: 'end'}}>
            <Button variant="contained">Lưu dữ liệu</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImportData;
