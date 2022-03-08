import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function FormDialog({
  showDialogForRp,
  setShowDialogForRp,
  currentRp,
  setUpdate,
  update,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowDialogForRp(false);
  };
  const UpdateRuntimeParameter = async (e) => {
    if (e.key === "Enter") {
      await axios.put("http://localhost:9001/screen2/runtime_parameter", {
        newdata: data,
        olddata: currentRp,
      });
      setShowDialogForRp(false);
      setUpdate(!update);
    }
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
            onKeyDown={UpdateRuntimeParameter}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
