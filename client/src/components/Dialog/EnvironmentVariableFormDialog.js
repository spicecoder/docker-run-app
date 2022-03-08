import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function FormDialog({
  showDialogForEv,
  setShowDialogForEv,
  currentEv,
  update,
  setUpdate,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowDialogForEv(false);
  };
  const UpdateRuntimeParameter = async (e) => {
    if (e.key === "Enter") {
      await axios.put("http://localhost:9001/screen2/environment_variable", {
        newdata: data,
        olddata: currentEv,
      });
      setShowDialogForEv(false);
      setUpdate(!update);
    }
  };

  useEffect(() => {
    setData(currentEv);
  }, [currentEv]);

  return (
    <div>
      <Dialog open={showDialogForEv} onClose={handleClose}>
        <DialogTitle>Update Environment Variable</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Environment Variable"
            type="email"
            fullWidth
            variant="standard"
            value={data}
            onChange={(e) => setData(e.target.value)}
            onKeyDown={UpdateRuntimeParameter}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
