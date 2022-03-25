const Express = require("express");
const router = Express.Router();
const fs = require("fs");
const { exec } = require("child_process");
router.post("/", async (req, res) => {
  try {
    fs.writeFileSync("dfc_db.txt", JSON.stringify(req.body), (err) => {
      if (err) console.log(err);
    });

    exec("echo 'hello world in child' ;", (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      res.send(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
