import config from "./config";
import express from "express";
import router from "./routes";
import { genericErrorHandler, notFoundError } from "./middlewares/errorHandler";
import { requestLogger } from "./middlewares/logger";

const app = express();
app.use(express.json()); //read json during post req
app.use(requestLogger);
app.use(router);
app.use(notFoundError);
app.use(genericErrorHandler);
app.listen(config.port, () => {
  console.log(`Server started at ${config.port}`);
});
