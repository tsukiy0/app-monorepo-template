import { Record, Static } from "runtypes";
import { Id } from "../models";

export const IdResponse = Record({
  id: Id,
});

export type IdResponse = Static<typeof IdResponse>;
