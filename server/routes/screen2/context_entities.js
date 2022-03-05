const Express = require("express");
const router = Express.Router();
const fs = require("fs");
const cp = require("child_process");
const environment_variable = require("../../entities/environment_variable.json");
const runtime_parameter = require("../../entities/runtime_parameter.json");

router.get("/runtime_parameter", async (req, res) => {
  try {
    console.log(runtime_parameter);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

router.get("/environment_variable", async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
