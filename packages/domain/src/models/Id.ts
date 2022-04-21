import { Static, String } from "runtypes";
import { faker } from "@faker-js/faker";

export const Id = String.withBrand("Id").withConstraint((_) => _.length <= 8);

export type Id = Static<typeof Id>;

export class IdExt {
  static rand(): Id {
    return Id.check(faker.datatype.string(8));
  }
}
