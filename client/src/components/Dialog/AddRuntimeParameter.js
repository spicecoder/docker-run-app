import { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function FormDialog({
  showAddDialogForRp,
  setShowAddDialogForRp,
  setUpdate,
  update,
}) {
  const [data, setData] = useState("");
  const handleClose = () => {
    setShowAddDialogForRp(false);
  };
  const UpdateRuntimeParameter = async (e) => {
    if (e.key === "Enter") {
      await axios.post("http://localhost:9001/screen2/runtime_parameter", {
        entity: data,
      });
      setShowAddDialogForRp(false);
      setUpdate(!update);
    }
  };

  return (
    <div>
      <Dialog open={showAddDialogForRp} onClose={handleClose}>
        <DialogTitle>Add runtime parameters</DialogTitle>
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
