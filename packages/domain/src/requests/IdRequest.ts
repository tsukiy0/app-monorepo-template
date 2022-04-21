import { Record, Static } from "runtypes";
import { Id } from "../models";

export const IdRequest = Record({
  id: Id,
});

export type IdRequest = Static<typeof IdRequest>;
