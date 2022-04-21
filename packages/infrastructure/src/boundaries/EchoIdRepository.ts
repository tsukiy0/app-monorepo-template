import { IIdRepository } from "@packages/application";
import { Id } from "@packages/domain";

export class EchoIdRepository implements IIdRepository {
  get = async (id: Id): Promise<Id> => {
    return id;
  };
}
