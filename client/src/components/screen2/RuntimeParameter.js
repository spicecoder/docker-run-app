import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RuntimeFormDialog from "../Dialog/RuntimeFormDialog";
import RPConfirmDialog from "../Dialog/RPConfirmDialog";
import RPvalueDialog from "../Dialog/RPvalueDialog";
import AddRuntimeParameter from "../Dialog/AddRuntimeParameter";
import axios from "axios";
import ContextItemRow from "../reusable-components/ContextItemRow";

const RuntimeParameter = ({ setRp }) => {
  const [runtimeParameters, setRuntimeParameters] = useState([]);
  const [update, setUpdate] = useState(false);
  const [showAddDialogForRp, setShowAddDialogForRp] = useState(false);
  const [showDialogForRp, setShowDialogForRp] = useState(false);
  const [currentRp, setCurrentRp] = useState("");
  const [removeDialogForRp, setRemoveDialogForRp] = useState(false);
  const [showValueDialogRp, setShowValueDialogForRp] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "http://localhost:9001/screen2/runtime_parameter"
      );
      setRuntimeParameters(data.data);
      setRp(data.data);
    })();
  }, [update]);

  return (
    <div className="screen-main-div">
      <RuntimeFormDialog
        showDialogForRp={showDialogForRp}
        setShowDialogForRp={setShowDialogForRp}
        currentRp={currentRp}
        setCurrentRp={setCurrentRp}
        setUpdate={setUpdate}
        update={update}
      />

      <RPConfirmDialog
        removeDialogForRp={removeDialogForRp}
        setRemoveDialogForRp={setRemoveDialogForRp}
        currentRp={currentRp}
        setUpdate={setUpdate}
        update={update}
      />

      <RPvalueDialog
        showValueDialog={showValueDialogRp}
        setShowValueDialogForRp={setShowValueDialogForRp}
        currentRp={currentRp}
        setUpdate={setUpdate}
        update={update}
      />

      <AddRuntimeParameter
        setUpdate={setUpdate}
        update={update}
        showAddDialogForRp={showAddDialogForRp}
        setShowAddDialogForRp={setShowAddDialogForRp}
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

        {runtimeParameters.map((rp, i) => (
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
