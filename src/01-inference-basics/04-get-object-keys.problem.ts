import { Equal, Expect } from "../helpers/type-utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

// keyof only operates on types, not on runtime things

type TestingFramework = keyof typeof testingFrameworks

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];

console.log(Object.entries(testingFrameworks));