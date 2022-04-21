import { IdRequest } from "@packages/domain";
import express, { Express, json } from "express";
import { buildHandlers } from "./buildHandlers";
import { promisifyHandler } from "./promisifyHandler";

export const buildApp = async (): Promise<Express> => {
  const app = express();

  app.use(json());

  app.post(
    "/api/v1/id",
    promisifyHandler(async (req, res) => {
      const { idHandler } = await buildHandlers();

      const data = await idHandler.handle(IdRequest.check(req.body))

      res.status(200).json(data);
    })
  );

  return app;
};
