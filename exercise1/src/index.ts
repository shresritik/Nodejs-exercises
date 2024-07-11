import config from "./config";
import express from "express";
import router from "./routes";
import { genericErrorHandler, notFoundError } from "./middlewares/errorHandler";
import { requestLogger } from "./middlewares/logger";
import helmet from "helmet";
import rateLimiter from "express-rate-limit";
import cors from "cors";
const limiter = rateLimiter({
  windowMs: 60 * 1000,
  limit: 10,
  message: "Too many requests",
});
const allowedOrigins = ["https://www.test.com"];
const app = express();
app.use(helmet());
app.use(limiter);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, origin);
      } else {
        callback(new Error("Not Allowed"));
      }
    },
  })
);
app.use(express.json()); //read json during post req
app.use(requestLogger);
app.use(router);
app.use(notFoundError);
app.use(genericErrorHandler);
app.listen(config.port, () => {
  console.log(`Server started at ${config.port}`);
});
