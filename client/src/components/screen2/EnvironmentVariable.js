import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EnvironmentVaribaleFormDialog from "../Dialog/EnvironmentVariableFormDialog";
import EVconfirmDialog from "../Dialog/EVConfirmDialog";
import EVvalueDialog from "../Dialog/EVvalueDialog";
import AddEnvironmentVariable from "../Dialog/AddEnvironmentVariable";
import axios from "axios";
import ContextItemRow from "../reusable-components/ContextItemRow";

const EnvironmentVariable = ({ setEv }) => {
  const [environmentVariable, setEnvironmentVariable] = useState([]);
  const [update, setUpdate] = useState(false);
  const [showAddDialogForEv, setShowAddDialogForEv] = useState(false);
  const [showValueDialog, setShowValueDialogForEv] = useState(false);
  const [showDialogForEv, setShowDialogForEv] = useState(false);
  const [currentEv, setCurrentEv] = useState("");
  const [removeDialogForEv, setRemoveDialogForEv] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "http://localhost:9001/screen2/environment_variable"
      );
      setEnvironmentVariable(data.data);
      setEv(data.data);
    })();
  }, [update]);

  return (
    <div className="screen-main-div">
      <EnvironmentVaribaleFormDialog
        showDialogForEv={showDialogForEv}
        setShowDialogForEv={setShowDialogForEv}
        currentEv={currentEv}
        setCurrentEv={setCurrentEv}
        setUpdate={setUpdate}
        update={update}
      />
      <EVconfirmDialog
        removeDialogForEv={removeDialogForEv}
        setRemoveDialogForEv={setRemoveDialogForEv}
        currentEv={currentEv}
        setUpdate={setUpdate}
        update={update}
      />

      <EVvalueDialog
        showValueDialog={showValueDialog}
        setShowValueDialogForEv={setShowValueDialogForEv}
        currentEv={currentEv}
        setUpdate={setUpdate}
        update={update}
      />

      <AddEnvironmentVariable
        setUpdate={setUpdate}
        update={update}
        showAddDialogForEv={showAddDialogForEv}
        setShowAddDialogForEv={setShowAddDialogForEv}
      />

      <div className="list-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Environment Variables :</h4>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => setShowAddDialogForEv(true)}
          >
            <AddBoxIcon />
          </IconButton>
        </div>

        {environmentVariable.map((ev, i) => (
          <div key={i}>
            <ContextItemRow
              data={ev}
              setShowDialogFor={setShowDialogForEv}
              setCurrentData={setCurrentEv}
              setRemoveDialogForData={setRemoveDialogForEv}
              setShowValueDialogForData={setShowValueDialogForEv}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnvironmentVariable;
