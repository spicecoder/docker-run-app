const Express = require("express");
const router = Express.Router();
const fs = require("fs");
const cp = require("child_process");

router.post("/", async (req, res) => {
  try {
    const { data } = req.body;

    fs.writeFileSync("file.js", data, (err) => {
      if (err) console.log(err);
    });

    const output = cp.execSync(
      "node file.js",
      {
        encoding: "utf8",
        maxBuffer: 50 * 1024 * 1024,
      },
      (err) => {
        if (err) console.log("ramae", err);
      }
    );

    res.send(output);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
