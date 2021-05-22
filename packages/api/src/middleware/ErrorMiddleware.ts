import { ErrorRequestHandler } from "express";
import { ILogger } from "@app/core";

export class ErrorMiddleware {
  handle: ErrorRequestHandler = (err, req, res, next) => {
    const logger = res.locals.logger as ILogger;

    logger.error(err);

    if (err instanceof Error) {
      res.status(500).json({
        name: err.name,
        message: err.message,
      });
      next();
    } else {
      next(err);
    }
  };
}
