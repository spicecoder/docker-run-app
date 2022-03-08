const Express = require("express");
const router = Express.Router();
const fs = require("fs");

router.get("/runtime_parameter", async (req, res) => {
  try {
    fs.readFile(
      "./entities/runtime_parameter.txt",
      "utf8",
      function (err, data) {
        if (err) console.log(err);

        data = JSON.parse(data);
        res.send(data);
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.post("/runtime_parameter", async (req, res) => {
  try {
    const { entity } = req.body;

    fs.readFile(
      "./entities/runtime_parameter.txt",
      "utf8",
      function (err, data) {
        if (err) console.log(err);

        data = JSON.parse(data);
        data.push({ context_entity: entity, value: "" });
        fs.writeFileSync(
          "./entities/runtime_parameter.txt",
          JSON.stringify(data),
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    );
    res.send({ msg: "successfully added!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.post("/environment_variable", async (req, res) => {
  try {
    const { entity } = req.body;

    fs.readFile(
      "./entities/environment_variable.txt",
      "utf8",
      function (err, data) {
        if (err) console.log(err);

        data = JSON.parse(data);
        data.push({ context_entity: entity, value: "" });
        fs.writeFileSync(
          "./entities/environment_variable.txt",
          JSON.stringify(data),
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    );
    res.send({ msg: "successfully added!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.get("/environment_variable", async (req, res) => {
  try {
    fs.readFile(
      "./entities/environment_variable.txt",
      "utf8",
      function (err, data) {
        if (err) console.log(err);

        data = JSON.parse(data);
        res.send(data);
      }
    );
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.put("/runtime_parameter", async (req, res) => {
  try {
    const { newdata, olddata } = req.body;
    fs.readFile(
      "./entities/runtime_parameter.txt",
      "utf8",
      function (err, data) {
        if (err) console.log(err);
        data = JSON.parse(data);
        for (let i of data) {
          if (i.context_entity === olddata) {
            i.context_entity = newdata;
          }
        }
        fs.writeFileSync(
          "./entities/runtime_parameter.txt",
          JSON.stringify(data),
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    );
    res.send({ msg: "successfully updated!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.put("/environment_variable", async (req, res) => {
  try {
    const { newdata, olddata } = req.body;
    fs.readFile(
      "./entities/environment_variable.txt",
      "utf8",
      function (err, data) {
        if (err) console.log(err);
        data = JSON.parse(data);
        for (let i of data) {
          if (i.context_entity === olddata) {
            i.context_entity = newdata;
          }
        }
        fs.writeFileSync(
          "./entities/environment_variable.txt",
          JSON.stringify(data),
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    );
    res.send({ msg: "successfully updated!" });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.delete("/environment_variable", async (req, res) => {
  try {
    const { entity } = req.body;

    fs.readFile(
      "./entities/environment_variable.txt",
      "utf8",
      function (err, data) {
        if (err) console.log(err);
        data = JSON.parse(data);
        for (let i of data) {
          if (i.context_entity === entity) {
            data.splice(
              data.findIndex((a) => a.context_entity === entity),
              1
            );
          }
        }
        fs.writeFileSync(
          "./entities/environment_variable.txt",
          JSON.stringify(data),
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    );
    res.send({ msg: "successfully updated!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
});

router.put("/environment_variable/value", async (req, res) => {
  try {
    const { key, value } = req.body;

    fs.readFile(
      "./entities/environment_variable.txt",
      "utf8",
      function (err, data) {
        if (err) console.log(err);
        data = JSON.parse(data);
        for (let i of data) {
          if (i.context_entity === key) {
            i.value = value;
          }
        }
        fs.writeFileSync(
          "./entities/environment_variable.txt",
          JSON.stringify(data),
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    );
    res.send({ msg: "successfully updated!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
});

router.put("/runtime_parameter/value", async (req, res) => {
  try {
    const { key, value } = req.body;

    fs.readFile(
      "./entities/runtime_parameter.txt",
      "utf8",
      function (err, data) {
        if (err) console.log(err);
        data = JSON.parse(data);
        for (let i of data) {
          if (i.context_entity === key) {
            i.value = value;
          }
        }
        fs.writeFileSync(
          "./entities/runtime_parameter.txt",
          JSON.stringify(data),
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    );
    res.send({ msg: "successfully updated!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
});

router.delete("/runtime_parameter", async (req, res) => {
  try {
    const { entity } = req.body;

    fs.readFile(
      "./entities/runtime_parameter.txt",
      "utf8",
      function (err, data) {
        if (err) console.log(err);
        data = JSON.parse(data);
        for (let i of data) {
          if (i.context_entity === entity) {
            data.splice(
              data.findIndex((a) => a.context_entity === entity),
              1
            );
          }
        }
        fs.writeFileSync(
          "./entities/runtime_parameter.txt",
          JSON.stringify(data),
          (err) => {
            if (err) console.log(err);
          }
        );
      }
    );
    res.send({ msg: "successfully updated!" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
