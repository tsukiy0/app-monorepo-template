import express, { Application } from "express";
import cors from "cors";
import { json } from "body-parser";
import { promisifyHandler } from "./utils/promisifyHandler";
import { LoggerMiddleware } from "./middleware/LoggerMiddleware";
import { ErrorMiddleware } from "./middleware/ErrorMiddleware";

export class App {
  static build = (): Application => {
    const app = express();

    app.use(cors());
    app.use(json());
    app.use(new LoggerMiddleware().handle);

    app.get(
      "/health",
      promisifyHandler(async (req, res) => {
        res.status(200).json({
          healthy: true,
        });
      }),
    );

    app.use(new ErrorMiddleware().handle);

    return app;
  };
}
