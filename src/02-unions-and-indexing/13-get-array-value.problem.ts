import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const; //this is a tuple now because of the as const;

type AppleOrBanana = typeof fruits[0 | 1];
type Fruit = typeof fruits[number];

// number will work as 0, 1, 2, 3, etc, however many numbers there will be

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>,
];
