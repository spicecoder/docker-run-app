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
  removeDialogForRp,
  setRemoveDialogForRp,
  currentRp,
}) {
  const handleClose = () => {
    setRemoveDialogForRp(false);
  };

  return (
    <div>
      <Dialog open={removeDialogForRp} onClose={handleClose}>
        <DialogTitle>Delete Environment variable</DialogTitle>
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
          <Button onClick={handleClose}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
