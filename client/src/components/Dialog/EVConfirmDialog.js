import * as React from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
  TextField,
  DialogActions,
} from "@mui/material";

export default function FormDialog({
  removeDialogForEv,
  setRemoveDialogForEv,
  currentEv,
  dataStorage,
}) {
  const handleClose = () => {
    setRemoveDialogForEv(false);
  };

  const deleteEntity = async () => {
    for (let i in dataStorage.DS[0].d[1].FS[2].f[1].ES) {
      var ev = dataStorage.DS[0].d[1].FS[2].f[1].ES[i];
      if (Object.keys(ev)[0] === currentEv) {
        delete dataStorage.DS[0].d[1].FS[2].f[1].ES[i];
      }
    }
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
