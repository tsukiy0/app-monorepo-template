import { RequestHandler } from "express";
import { PinoLogger } from "@app/infrastructure";

export class LoggerMiddleware {
  handle: RequestHandler = (req, res, next) => {
    const logger = new PinoLogger(req.header("x-request-id") as string);

    try {
      logger.info("request", {
        request: {
          method: req.method,
          path: req.path,
          url: req.url,
          query: req.query,
          headers: req.headers,
          body: req.body as unknown,
        },
      });

      res.on("finish", () => {
        logger.info("response", {
          response: {
            status: res.statusCode,
          },
        });
      });

      res.locals.logger = logger;

      next();
    } catch (err) {
      next(err);
    }
  };
}
