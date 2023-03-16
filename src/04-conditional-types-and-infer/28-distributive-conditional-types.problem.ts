import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = Fruit extends "apple" | "banana" | 'orange'
  ? "apple" | "banana"
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
