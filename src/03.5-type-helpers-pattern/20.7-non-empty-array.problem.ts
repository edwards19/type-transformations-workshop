type NonEmptyArray<T> = [T, ...Array<T>];

// this type helper has a lot of use cases

export const makeEnum = (values: NonEmptyArray<string>) => {};

makeEnum(["a"]);
makeEnum(["a", "b", "c"]);

// @ts-expect-error
makeEnum([]);
