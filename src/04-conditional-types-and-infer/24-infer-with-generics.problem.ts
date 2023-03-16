import { Equal, Expect } from "../helpers/type-utils";

interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

type GetPoint<T> = T extends MyComplexInterface<infer TEvent, infer TContext, infer TName, infer TPoint> ? TPoint : never;

type Example2 = GetPoint<MyComplexInterface<1, 2, 3, 4>>

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
