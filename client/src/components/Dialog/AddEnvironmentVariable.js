import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({
  showAddDialogForEv,
  setShowAddDialogForEv,
  dataStorage,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowAddDialogForEv(false);
  };
  const UpdateRuntimeParameter = async (e) => {
    if (e.key === "Enter") {
      const obj = {};
      obj[`${data}`] = "";
      dataStorage.DS[0].d[1].FS[2].f[1].ES.push(obj);
      setShowAddDialogForEv(false);
      setData("");
    }
  };

  return (
    <div>
      <Dialog open={showAddDialogForEv} onClose={handleClose}>
        <DialogTitle>Add Environment Variable</DialogTitle>
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
