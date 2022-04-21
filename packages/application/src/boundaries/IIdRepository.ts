import { Id } from "@packages/domain";

export interface IIdRepository {
  get: (id: Id) => Promise<Id>;
}
