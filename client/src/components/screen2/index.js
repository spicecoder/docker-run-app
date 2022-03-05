import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import RuntimeFormDialog from "../Dialog/RuntimeFormDialog";
import EnvironmentVaribaleFormDialog from "../Dialog/EnvironmentVariableFormDialog";
import EVconfirmDialog from "../Dialog/EVConfirmDialog";
import RPConfirmDialog from "../Dialog/RPConfirmDialog";
const names = ["James", "John", "Paul", "Ringo", "George"];
const Screen2 = () => {
  const [showDialogForRp, setShowDialogForRp] = useState(false);
  const [currentRp, setCurrentRp] = useState("");

  const [removeDialogForRp, setRemoveDialogForRp] = useState(false);

  const [showDialogForEv, setShowDialogForEv] = useState(false);
  const [currentEv, setCurrentEv] = useState("");

  const [removeDialogForEv, setRemoveDialogForEv] = useState(false);
  return (
    <div className="screen-main-div">
      <RuntimeFormDialog
        showDialogForRp={showDialogForRp}
        setShowDialogForRp={setShowDialogForRp}
        currentRp={currentRp}
        setCurrentRp={setCurrentRp}
      />
      <EnvironmentVaribaleFormDialog
        showDialogForEv={showDialogForEv}
        setShowDialogForEv={setShowDialogForEv}
        currentEv={currentEv}
        setCurrentEv={setCurrentEv}
      />
      <EVconfirmDialog
        removeDialogForEv={removeDialogForEv}
        setRemoveDialogForEv={setRemoveDialogForEv}
        currentEv={currentEv}
      />
      <RPConfirmDialog
        removeDialogForRp={removeDialogForRp}
        setRemoveDialogForRp={setRemoveDialogForRp}
        currentRp={currentRp}
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
          >
            <AddBoxIcon />
          </IconButton>
        </div>

        {names.map((filteredName, i) => (
          <div key={i} className="list">
            <div className="list-item">{filteredName}</div>
            <div>
              <button
                onClick={() => {
                  setShowDialogForRp(true);
                  setCurrentRp(filteredName);
                }}
              >
                C
              </button>
              <button
                onClick={() => {
                  setRemoveDialogForRp(true);
                  setCurrentRp(filteredName);
                }}
              >
                D
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
          >
            <AddBoxIcon />
          </IconButton>
        </div>

        {names.map((filteredName, i) => (
          <div key={i} className="list">
            <div className="list-item">{filteredName}</div>
            <div>
              <button
                onClick={() => {
                  setShowDialogForEv(true);
                  setCurrentEv(filteredName);
                }}
              >
                C
              </button>{" "}
              <button
                onClick={() => {
                  setRemoveDialogForEv(true);
                  setCurrentEv(filteredName);
                }}
              >
                D
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="screen-button">
        <Button variant="contained">Submit</Button>
      </div>

      <div className="screen-input">
        <h4>Result :</h4>
        <TextField fullWidth id="fullWidth" />
      </div>
    </div>
  );
};

export default Screen2;
