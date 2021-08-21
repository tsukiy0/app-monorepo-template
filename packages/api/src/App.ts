import express, { Application } from "express";
import {
  CorrelationMiddleware,
  ErrorMiddleware,
  LoggerMiddleware,
} from "@tsukiy0/extensions-express";
import { PublicRouter } from "./routers/PublicRouter";
import { ServicesMiddleware } from "./middlewares/ServicesMiddleware";

export class App {
  static build = (): Application => {
    const app = express();

    const correlationMiddleware = new CorrelationMiddleware();
    const loggerMiddleware = new LoggerMiddleware(
      "@app/api",
      correlationMiddleware,
    );
    const servicesMiddleware = new ServicesMiddleware(correlationMiddleware);
    const errorMiddleware = new ErrorMiddleware(loggerMiddleware);
    const publicRouter = new PublicRouter();

    app.use(correlationMiddleware.handler);
    app.use(loggerMiddleware.handler);
    app.use(servicesMiddleware.handler);

    app.use(publicRouter.router());

    app.use(errorMiddleware.handler);

    return app;
  };
}
