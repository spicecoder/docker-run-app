import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EnvironmentVaribaleFormDialog from "../Dialog/EnvironmentVariableFormDialog";
import EVconfirmDialog from "../Dialog/EVConfirmDialog";
import EVvalueDialog from "../Dialog/EVvalueDialog";
import AddEnvironmentVariable from "../Dialog/AddEnvironmentVariable";
import ContextItemRow from "../reusable-components/ContextItemRow";

const EnvironmentVariable = ({ dataStorage }) => {
  const [showAddDialogForEv, setShowAddDialogForEv] = useState(false);
  const [showValueDialog, setShowValueDialogForEv] = useState(false);
  const [showDialogForEv, setShowDialogForEv] = useState(false);
  const [currentEv, setCurrentEv] = useState("");
  const [removeDialogForEv, setRemoveDialogForEv] = useState(false);

  return (
    <div className="screen-main-div">
      <EnvironmentVaribaleFormDialog
        showDialogForEv={showDialogForEv}
        setShowDialogForEv={setShowDialogForEv}
        currentEv={currentEv}
        setCurrentEv={setCurrentEv}
        dataStorage={dataStorage}
      />
      <EVconfirmDialog
        removeDialogForEv={removeDialogForEv}
        setRemoveDialogForEv={setRemoveDialogForEv}
        currentEv={currentEv}
        dataStorage={dataStorage}
      />

      <EVvalueDialog
        showValueDialog={showValueDialog}
        setShowValueDialogForEv={setShowValueDialogForEv}
        currentEv={currentEv}
        setCurrentEv={setCurrentEv}
        dataStorage={dataStorage}
      />

      <AddEnvironmentVariable
        dataStorage={dataStorage}
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

        {dataStorage.DS[0].d[1].FS[2].f[1].ES.map((ev, i) => (
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
