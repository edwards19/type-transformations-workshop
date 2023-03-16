export type Maybe<T extends {}> = T | null | undefined;

// this value '{}' has a specific use in typescript, it represents everything that is not null or undefined

// everything is an object in typescript 'string', represents the string object with all the methods and we can use {} to represent everything that isn't null or undefined

type tests = [
  // @ts-expect-error
  Maybe<null>,
  // @ts-expect-error
  Maybe<undefined>,

  Maybe<string>,
  Maybe<false>,
  Maybe<0>,
  Maybe<"">,
];
