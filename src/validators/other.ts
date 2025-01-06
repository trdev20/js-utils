import { Arr } from "../types";

export const isOneOf = <T extends Arr>(value: unknown, array: T): value is T[number] => array.includes(value as T[number]);

