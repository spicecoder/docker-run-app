import React, { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RuntimeFormDialog from "../Dialog/RuntimeFormDialog";
import EnvironmentVaribaleFormDialog from "../Dialog/EnvironmentVariableFormDialog";
import EVconfirmDialog from "../Dialog/EVConfirmDialog";
import RPConfirmDialog from "../Dialog/RPConfirmDialog";
import EVvalueDialog from "../Dialog/EVvalueDialog";
import RPvalueDialog from "../Dialog/RPvalueDialog";
import AddRuntimeParameter from "../Dialog/AddRuntimeParameter";
import AddEnvironmentVariable from "../Dialog/AddEnvironmentVariable";
import axios from "axios";

const Screen2 = () => {
  const [runtimeParameters, setRuntimeParameters] = useState([]);
  const [environmentVariable, setEnvironmentVariable] = useState([]);
  const [update, setUpdate] = useState(false);

  const [showAddDialogForRp, setShowAddDialogForRp] = useState(false);
  const [showAddDialogForEv, setShowAddDialogForEv] = useState(false);

  const [showDialogForRp, setShowDialogForRp] = useState(false);
  const [currentRp, setCurrentRp] = useState("");

  const [removeDialogForRp, setRemoveDialogForRp] = useState(false);
  const [showValueDialog, setShowValueDialogForEv] = useState(false);

  const [showDialogForEv, setShowDialogForEv] = useState(false);
  const [currentEv, setCurrentEv] = useState("");

  const [removeDialogForEv, setRemoveDialogForEv] = useState(false);
  const [showValueDialogRp, setShowValueDialogForRp] = useState(false);

  const [result, setResult] = useState("");

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "http://localhost:9001/screen2/runtime_parameter"
      );
      setRuntimeParameters(data.data);
    })();
  }, [update]);

  useEffect(() => {
    (async () => {
      const data = await axios.get(
        "http://localhost:9001/screen2/environment_variable"
      );
      setEnvironmentVariable(data.data);
    })();
  }, [update]);

  const handleSubmit = async () => {
    const obj = {
      domain: "Docker_image",
      flow1: "Runtime parameters",
      flow2: "Environment Variables",
      atn1: runtimeParameters,
      atn2: environmentVariable,
    };
    const res = await axios.post("http://localhost:9001/context", obj);
    setResult(res.data);
  };

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
      <RPConfirmDialog
        removeDialogForRp={removeDialogForRp}
        setRemoveDialogForRp={setRemoveDialogForRp}
        currentRp={currentRp}
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

      <AddEnvironmentVariable
        setUpdate={setUpdate}
        update={update}
        showAddDialogForEv={showAddDialogForEv}
        setShowAddDialogForEv={setShowAddDialogForEv}
      />
      <h4 className="main-heading">Screen 2</h4>
      <div className="screen-input">
        <h4>Docker Run :</h4>

        <TextField
          fullWidth
          id="fullWidth"
          value={"Docker run docker_demo"}
          disabled
        />
      </div>

      <div className="list-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>Runtime parameters :</h4>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => setShowAddDialogForRp(true)}
          >
            <AddBoxIcon />
          </IconButton>
        </div>

        {runtimeParameters.map((rp, i) => (
          <div key={i} className="list">
            <div className="list-item">{rp.context_entity}</div>
            <div>
              <button
                onClick={() => {
                  setShowDialogForRp(true);
                  setCurrentRp(rp.context_entity);
                }}
              >
                C
              </button>
              <button
                onClick={() => {
                  setRemoveDialogForRp(true);
                  setCurrentRp(rp.context_entity);
                }}
              >
                D
              </button>
              <button
                onClick={() => {
                  setShowValueDialogForRp(true);
                  setCurrentRp(rp);
                }}
              >
                V
              </button>
            </div>
          </div>
        ))}
      </div>

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
          <div key={i} className="list">
            <div className="list-item">{ev.context_entity}</div>
            <div>
              <button
                onClick={() => {
                  setShowDialogForEv(true);
                  setCurrentEv(ev.context_entity);
                }}
              >
                C
              </button>
              <button
                onClick={() => {
                  setRemoveDialogForEv(true);
                  setCurrentEv(ev.context_entity);
                }}
              >
                D
              </button>
              <button
                onClick={() => {
                  setShowValueDialogForEv(true);
                  setCurrentEv(ev);
                }}
              >
                V
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="screen-button">
        <Button variant="contained" onClick={() => handleSubmit()}>
          Submit
        </Button>
      </div>

      <div className="screen-input">
        <h4>Result :</h4>
        <TextField fullWidth id="fullWidth" value={result} />
      </div>
    </div>
  );
};

export default Screen2;
