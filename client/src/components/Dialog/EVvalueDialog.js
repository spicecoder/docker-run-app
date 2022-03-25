import { useState, useEffect } from "react";
import {
  Button,
  DialogTitle,
  DialogContent,
  Dialog,
  TextField,
  DialogActions,
} from "@mui/material";

export default function FormDialog({
  showValueDialog,
  setShowValueDialogForEv,
  currentEv,
  dataStorage,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowValueDialogForEv(false);
  };

  useEffect(() => {
    if (Object.values(currentEv)[0]) {
      setData(Object.values(currentEv)[0]);
    } else {
      setData("");
    }
  }, [currentEv]);

  const addValue = async (e) => {
    for (let i in dataStorage.DS[0].d[1].FS[2].f[1].ES) {
      var ev = dataStorage.DS[0].d[1].FS[2].f[1].ES[i];

      if (Object.keys(ev)[0] === Object.keys(currentEv)[0]) {
        const obj = {};
        obj[`${Object.keys(ev)[0]}`] = data;
        dataStorage.DS[0].d[1].FS[2].f[1].ES[i] = obj;
      }
    }
    setShowValueDialogForEv(false);
    setData("");
  };

  return (
    <div>
      <Dialog open={showValueDialog} onClose={handleClose}>
        <DialogTitle>Delete Environment variable</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            fullWidth
            variant="standard"
            value={Object.keys(currentEv)[0]}
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
