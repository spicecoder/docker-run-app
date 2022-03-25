import { useState, useEffect } from "react";
import {
  DialogTitle,
  DialogContent,
  Dialog,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";

export default function FormDialog({
  showValueDialog,
  setShowValueDialogForRp,
  currentRp,
  dataStorage,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowValueDialogForRp(false);
  };

  useEffect(() => {
    if (Object.values(currentRp)[0]) {
      setData(Object.values(currentRp)[0]);
    } else {
      setData("");
    }
  }, [currentRp]);

  const addValue = async (e) => {
    for (let i in dataStorage.DS[0].d[1].FS[1].f[1].ES) {
      var rp = dataStorage.DS[0].d[1].FS[1].f[1].ES[i];

      if (Object.keys(rp)[0] === Object.keys(currentRp)[0]) {
        const obj = {};
        obj[`${Object.keys(rp)[0]}`] = data;
        dataStorage.DS[0].d[1].FS[1].f[1].ES[i] = obj;
      }
    }

    setShowValueDialogForRp(false);
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
            value={Object.keys(currentRp)[0]}
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
            // onKeyDown={addValue}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => addValue()}>
            confirm change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
