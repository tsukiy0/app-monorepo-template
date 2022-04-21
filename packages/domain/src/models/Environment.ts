import { Literal, Static, Union } from "runtypes";

export const Environment = Union(Literal("dev"), Literal("prod"));

export type Environment = Static<typeof Environment>;
