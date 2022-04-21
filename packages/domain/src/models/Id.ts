import { Static, String } from "runtypes";

export const Id = String.withBrand("Id");

export type Id = Static<typeof Id>;
