import { DefaultProcessor, ProcessorServices } from "@tsukiy0/extensions-core";

export class Processor extends DefaultProcessor<void, void> {
  protected handle = async (
    request: void,
    { logger }: ProcessorServices,
  ): Promise<void> => {
    logger.info("hello");
  };
}
