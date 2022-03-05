import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({
  showDialogForEv,
  setShowDialogForEv,
  currentEv,
  setCurrentEv,
}) {
  const handleClose = () => {
    setShowDialogForEv(false);
  };
  const UpdateRuntimeParameter = (e) => {
    if (e.key === "Enter") {
      console.log(currentEv);
    }
  };
  return (
    <div>
      <Dialog open={showDialogForEv} onClose={handleClose}>
        <DialogTitle>Update runtime parameters</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="runtime parameters"
            type="email"
            fullWidth
            variant="standard"
            value={currentEv}
            onChange={(e) => setCurrentEv(e.target.value)}
            onKeyDown={UpdateRuntimeParameter}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
