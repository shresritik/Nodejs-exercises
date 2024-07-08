import config from "./config";
import express from "express";
import router from "./routes";

const app = express();
app.use(express.json()); //read json during post req
app.use(router);
app.listen(config.port, () => {
  console.log(`Server started at ${config.port}`);
});
