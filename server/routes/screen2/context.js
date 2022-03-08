const Express = require("express");
const router = Express.Router();
const fs = require("fs");
const { exec } = require("child_process");

router.post("/", async (req, res) => {
  try {
    const { domain, flow1, flow2, atn1, atn2 } = req.body;
    const arr1 = [];
    const arr2 = [];
    for (let i of atn1) {
      const obj = {};
      obj[`${i.context_entity}`] = i.value;
      arr1.push(obj);
    }
    for (let i of atn2) {
      const obj = {};
      obj[`${i.context_entity}`] = i.value;
      arr2.push(obj);
    }

    const context = [
      { domain: domain, flow: flow1, attentionentities: arr1 },
      { domain: domain, flow: flow2, attentionentities: arr2 },
    ];

    fs.writeFileSync("file.txt", JSON.stringify(context), (err) => {
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
