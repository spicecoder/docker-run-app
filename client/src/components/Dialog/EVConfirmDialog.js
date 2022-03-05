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
}) {
  const handleClose = () => {
    setRemoveDialogForEv(false);
  };

  return (
    <div>
      <Dialog open={removeDialogForEv} onClose={handleClose}>
        <DialogTitle>Delete Environment variable</DialogTitle>
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
          <Button onClick={handleClose}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
