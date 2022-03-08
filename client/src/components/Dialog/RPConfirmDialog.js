import * as React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
  TextField,
  DialogActions,
} from "@mui/material";
import axios from "axios";
export default function FormDialog({
  removeDialogForRp,
  setRemoveDialogForRp,
  currentRp,
  update,
  setUpdate,
}) {
  const deleteEntity = async () => {
    await axios.delete("http://localhost:9001/screen2/runtime_parameter", {
      data: { entity: currentRp },
    });
    setUpdate(!update);
    setRemoveDialogForRp(false);
  };

  const handleClose = () => {
    setRemoveDialogForRp(false);
  };

  return (
    <div>
      <Dialog open={removeDialogForRp} onClose={handleClose}>
        <DialogTitle>Delete runtime parameter</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="environment variable"
            type="email"
            fullWidth
            variant="standard"
            value={currentRp}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => deleteEntity()}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
