import { useEffect, useState } from "react";
import { TextField, Button, DialogActions } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({
  showDialogForRp,
  setShowDialogForRp,
  currentRp,
  dataStorage,
}) {
  const [data, setData] = useState("");

  const handleClose = () => {
    setShowDialogForRp(false);
  };

  const UpdateRuntimeParameter = async () => {
    for (let i in dataStorage.DS[0].d[1].FS[1].f[1].ES) {
      var rp = dataStorage.DS[0].d[1].FS[1].f[1].ES[i];
      if (Object.keys(rp)[0] === currentRp) {
        const obj = {};
        obj[`${data}`] = "";
        dataStorage.DS[0].d[1].FS[1].f[1].ES[i] = obj;
      }
    }
    setShowDialogForRp(false);
    setData("");
  };

  useEffect(() => {
    setData(currentRp);
  }, [currentRp]);

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
            value={data}
            onChange={(e) => setData(e.target.value)}
            // onKeyDown={(e) => e.key === "Enter" && UpdateRuntimeParameter()}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => UpdateRuntimeParameter()}>
            confirm change
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
