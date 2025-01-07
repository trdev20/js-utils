export type Obj<K extends string | number | symbol = string, V = unknown> = {
  [key in K]: V;
};

export type Arr<T = unknown> = T[] | readonly T[];

export type Valid = any;

export type Prettify<Type> = {
  [Key in keyof Type]: Type[Key];
} & {};

export type PrettifyDeep<Type> = {
  [Key in keyof Type]: Type[Key] extends infer InferredType
    ? InferredType extends Obj | Arr
      ? PrettifyDeep<InferredType>
      : InferredType
    : never;
} & {};

export type Choices<T> = T | (string & {}) | (number & {});

export type StringChoices<T extends string> = T | (string & {});

export type NumberChoices<T extends number> = T | (number & {});
