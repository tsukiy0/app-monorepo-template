import {
  DefaultProcessor,
  ICorrelationService,
  ProcessorServices,
  SystemConfiguration,
} from "@tsukiy0/extensions-core";

type Services = {
  correlationService: ICorrelationService;
  test: string;
};

export class Processor<T, U> extends DefaultProcessor<T, U> {
  constructor(
    private readonly handleWithServices: (
      services: Services,
      body: T,
    ) => Promise<U>,
  ) {
    super();
  }

  protected handle = async (
    body: T,
    { correlationService }: ProcessorServices,
  ): Promise<U> => {
    const config = new SystemConfiguration();
    return await this.handleWithServices(
      {
        correlationService,
        test: config.get("TEST"),
      },
      body,
    );
  };
}
