import { Equal, Expect } from "../helpers/type-utils";

type GetParametersAndReturnType<T extends (...args: any) => any> = {
  params: Parameters<T>;
  returnValue: ReturnType<T>;
};

const randomFunc = (
  product: string,
  bestDue: number
): { product: string; bestDue: number } => {
  return {
    product,
    bestDue,
  };
};

type functionInfoTypes = GetParametersAndReturnType<typeof randomFunc>

randomFunc('cheese', 13)

type tests = [
  Expect<
    Equal<
      GetParametersAndReturnType<() => string>,
      { params: []; returnValue: string }
    >
  >,
  Expect<
    Equal<
      GetParametersAndReturnType<(s: string) => void>,
      { params: [string]; returnValue: void }
    >
  >,
  Expect<
    Equal<
      GetParametersAndReturnType<(n: number, b: boolean) => number>,
      { params: [number, boolean]; returnValue: number }
    >
  >,
];
