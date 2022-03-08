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
  removeDialogForEv,
  setRemoveDialogForEv,
  currentEv,
  setUpdate,
  update,
}) {
  const handleClose = () => {
    setRemoveDialogForEv(false);
  };

  const deleteEntity = async () => {
    await axios.delete("http://localhost:9001/screen2/environment_variable", {
      data: { entity: currentEv },
    });
    setUpdate(!update);
    setRemoveDialogForEv(false);
  };

  return (
    <div>
      <Dialog open={removeDialogForEv} onClose={handleClose}>
        <DialogTitle>Add Value</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="environment variable"
            type="email"
            fullWidth
            variant="standard"
            value={currentEv}
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
