import { IdHandler } from "@packages/application";
import { EchoIdRepository } from "@packages/infrastructure";

export const buildHandlers = (): {
  idHandler: IdHandler;
} => {
  const idHandler = new IdHandler(new EchoIdRepository());

  return {
    idHandler,
  };
};
