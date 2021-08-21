import {
  ICorrelationService,
  SystemConfiguration,
} from "@tsukiy0/extensions-core";
import {
  AbstractServicesMiddleware,
  CorrelationMiddleware,
} from "@tsukiy0/extensions-express";
import { Request, Response } from "express";

type Services = {
  correlationService: ICorrelationService;
  test: string;
};

export class ServicesMiddleware extends AbstractServicesMiddleware<Services> {
  constructor(private readonly correlationMiddleware: CorrelationMiddleware) {
    super();
  }

  protected buildServices = async (
    req: Request,
    res: Response,
  ): Promise<Services> => {
    const config = new SystemConfiguration();
    const correlationService = this.correlationMiddleware.getService(res);

    return {
      correlationService,
      test: config.get("TEST"),
    };
  };
}
