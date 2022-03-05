import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({
  showDialogForRp,
  setShowDialogForRp,
  currentRp,
  setCurrentRp,
}) {
  const handleClose = () => {
    setShowDialogForRp(false);
  };
  const UpdateRuntimeParameter = (e) => {
    if (e.key === "Enter") {
      console.log(currentRp);
    }
  };
  return (
    <div>
      <Dialog open={showDialogForRp} onClose={handleClose}>
        <DialogTitle>Update runtime parameters</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="runtime parameters"
            type="email"
            fullWidth
            variant="standard"
            value={currentRp}
            onChange={(e) => setCurrentRp(e.target.value)}
            onKeyDown={UpdateRuntimeParameter}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
