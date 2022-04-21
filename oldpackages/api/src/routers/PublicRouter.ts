import { Router } from "express";
import { ExpressJsonRuntime } from "@tsukiy0/extensions-express";
import { Processor } from "../Processor";

export class PublicRouter {
  router = (): Router => {
    const router = Router();

    router.post(
      "/v1/public/health",
      new ExpressJsonRuntime(
        "/v1/public/health",
        new Processor(async ({ correlationService }, body) => {
          return {
            traceId: correlationService.getTraceId(),
          };
        }),
      ).handler,
    );

    return router;
  };
}
