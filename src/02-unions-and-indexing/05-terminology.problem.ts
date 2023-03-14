/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

//discriminated union

//a discriminated union has a common key or a common aspect that is the discriminator

type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

const getUnion = (result: A) => {
  if (result.type === 'b') {
    return result.b
  }
}

//union    

type B = "a" | "b" | "c";

//enum

enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
