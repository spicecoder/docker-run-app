import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RuntimeFormDialog from "../Dialog/RuntimeFormDialog";
import RPConfirmDialog from "../Dialog/RPConfirmDialog";
import RPvalueDialog from "../Dialog/RPvalueDialog";
import AddRuntimeParameter from "../Dialog/AddRuntimeParameter";
import ContextItemRow from "../reusable-components/ContextItemRow";

const RuntimeParameter = ({ dataStorage }) => {
  const [showAddDialogForRp, setShowAddDialogForRp] = useState(false);
  const [showDialogForRp, setShowDialogForRp] = useState(false);
  const [currentRp, setCurrentRp] = useState("");
  const [removeDialogForRp, setRemoveDialogForRp] = useState(false);
  const [showValueDialogRp, setShowValueDialogForRp] = useState(false);

  return (
    <div className="screen-main-div">
      <RuntimeFormDialog
        showDialogForRp={showDialogForRp}
        setShowDialogForRp={setShowDialogForRp}
        currentRp={currentRp}
        setCurrentRp={setCurrentRp}
        dataStorage={dataStorage}
      />

      <RPConfirmDialog
        removeDialogForRp={removeDialogForRp}
        setRemoveDialogForRp={setRemoveDialogForRp}
        currentRp={currentRp}
      />

      <RPvalueDialog
        showValueDialog={showValueDialogRp}
        setShowValueDialogForRp={setShowValueDialogForRp}
        currentRp={currentRp}
        dataStorage={dataStorage}
      />

      <AddRuntimeParameter
        showAddDialogForRp={showAddDialogForRp}
        setShowAddDialogForRp={setShowAddDialogForRp}
        dataStorage={dataStorage}
      />

      <div className="list-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Runtime parameters :</h4>
          <IconButton
            color="primary"
            component="span"
            onClick={() => setShowAddDialogForRp(true)}
          >
            <AddBoxIcon />
          </IconButton>
        </div>

        {dataStorage.DS[0].d[1].FS[1].f[1].ES.map((rp, i) => (
          <div key={i}>
            <ContextItemRow
              data={rp}
              setShowDialogFor={setShowDialogForRp}
              setCurrentData={setCurrentRp}
              setRemoveDialogForData={setRemoveDialogForRp}
              setShowValueDialogForData={setShowValueDialogForRp}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RuntimeParameter;
