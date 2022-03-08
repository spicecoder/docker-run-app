import { useState, useEffect } from "react";
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
  showValueDialog,
  setShowValueDialogForEv,
  setUpdate,
  update,
  currentEv,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowValueDialogForEv(false);
  };

  useEffect(() => {
    setData(currentEv.value);
  }, [currentEv]);

  const addValue = async (e) => {
    if (e.key === "Enter") {
      await axios.put(
        "http://localhost:9001/screen2/environment_variable/value",
        {
          key: currentEv.context_entity,
          value: data,
        }
      );
      setUpdate(!update);
      setShowValueDialogForEv(false);
    }
  };

  return (
    <div>
      <Dialog open={showValueDialog} onClose={handleClose}>
        <DialogTitle>Delete Environment variable</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="environment variable"
            type="text"
            fullWidth
            variant="standard"
            value={currentEv.context_entity}
            disabled
          />
          <TextField
            autoFocus
            margin="dense"
            label="environment variable"
            type="text"
            fullWidth
            variant="standard"
            value={data}
            onChange={(e) => setData(e.target.value)}
            onKeyDown={addValue}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
