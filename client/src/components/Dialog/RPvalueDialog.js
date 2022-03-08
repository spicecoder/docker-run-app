import { useState, useEffect } from "react";
import { DialogTitle, DialogContent, Dialog, TextField } from "@mui/material";
import axios from "axios";

export default function FormDialog({
  showValueDialog,
  setShowValueDialogForRp,
  setUpdate,
  update,
  currentRp,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowValueDialogForRp(false);
  };

  useEffect(() => {
    setData(currentRp.value);
  }, [currentRp]);

  const addValue = async (e) => {
    if (e.key === "Enter") {
      await axios.put("http://localhost:9001/screen2/runtime_parameter/value", {
        key: currentRp.context_entity,
        value: data,
      });
      setUpdate(!update);
      setShowValueDialogForRp(false);
    }
  };

  return (
    <div>
      <Dialog open={showValueDialog} onClose={handleClose}>
        <DialogTitle>Add Value</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="runtime parameter"
            type="text"
            fullWidth
            variant="standard"
            value={currentRp.context_entity}
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
