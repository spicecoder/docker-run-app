import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const Screen1 = () => {
  const [data, setData] = useState("");
  const [result, setResult] = useState("");
  const exexcuteFile = async () => {
    const res = await axios.post("http://localhost:9001/screen1", {
      data: data,
    });
    console.log(res);
    setResult(res);
  };

  return (
    <div className="screen-main-div">
      <h4 className="main-heading">Submit Dockerfile</h4>
      <div className="screen-input">
        <h4>Dockerfile Content :</h4>
        <TextField
          fullWidth
          id="fullWidth"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div className="screen-button">
        <Button variant="contained" onClick={() => exexcuteFile()}>
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

export default Screen1;
