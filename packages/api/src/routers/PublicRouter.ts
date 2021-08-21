import { Router } from "express";
import { promisifyHandler } from "@tsukiy0/extensions-express";

export class PublicRouter {
  router = (): Router => {
    const router = Router();

    router.get(
      "/v1/public/health",
      promisifyHandler(async (req, res) => {
        res.status(200).end();
      }),
    );

    return router;
  };
}
