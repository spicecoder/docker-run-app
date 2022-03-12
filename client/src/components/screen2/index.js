import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import RuntimeParameter from "./RuntimeParameter";
import EnvironmentVariable from "./EnvironmentVariable";

const Screen2 = () => {
  const [rp, setRp] = useState([]);
  const [ev, setEv] = useState([]);
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState("");

  function handleChange(event) {
    const data = [];
    for (let i = 0; i < event.target.files.length; i++) {
      data.push(event.target.files[i].name);
    }

    setFiles(data);
  }

  const handleSubmit = async () => {
    const obj = {
      domain: "Docker_image",
      flow1: "Runtime parameters",
      flow2: "Environment Variables",
      atn1: rp,
      atn2: ev,
      files: files,
    };

    const res = await axios.post("http://localhost:9001/context", obj);
    setResult(res.data);
  };
  const handleRemoveItem = (name) => {
    setFiles(files.filter((item) => item !== name));
  };
  return (
    <div className="screen-main-div">
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
      <RuntimeParameter setRp={setRp} />

      <EnvironmentVariable setEv={setEv} />

      <div>
        <input type="file" multiple onChange={handleChange} />
      </div>

      <div>
        {files.map((file, i) => (
          <li key={i}>
            {file}
            <button onClick={() => handleRemoveItem(files[i])}> X</button>
          </li>
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
