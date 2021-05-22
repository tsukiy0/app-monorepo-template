import { ILogger } from "@app/core";
import pino from "pino";
import UUID from "pure-uuid";

export class PinoLogger implements ILogger {
  private readonly logger: pino.Logger;

  constructor(
    public readonly traceId: string = new UUID(4).toString(),
    context?: unknown,
  ) {
    this.logger = pino({
      base: {
        context,
        traceId,
      },
    });
  }

  info(message: string, context?: unknown): void {
    this.logger.info(
      {
        localContext: context,
      },
      message,
    );
  }
  error(e: Error, context?: unknown): void {
    this.logger.error(
      {
        localContext: context,
        error: {
          ...e,
          name: e.name,
          message: e.message,
          stack: e.stack,
        },
      },
      e.message,
    );
  }
}
