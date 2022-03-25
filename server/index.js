const config = require("./config");
const Express = require("express");
const cors = require("cors");

const screen1Router = require("./routes/screen1/screen1");
const contextRouter = require("./routes/screen2/context");

const app = Express();
app.use(cors());
app.use(Express.json());

app.use(cors());
app.use(Express.json());
app.use("/screen1", screen1Router);
app.use("/context", contextRouter);
app.listen(config.PORT, () => {
  console.log(`Server is running on port: ${config.PORT}`);
});
