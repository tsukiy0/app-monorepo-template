import express, { Application } from "express";
import { PublicRouter } from "./routers/PublicRouter";
import cors from "cors";

export class App {
  static build = (): Application => {
    const app = express();
    const publicRouter = new PublicRouter();

    app.use(cors());

    app.use(publicRouter.router());

    return app;
  };
}
