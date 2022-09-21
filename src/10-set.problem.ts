import { expect, it } from "vitest";
import { Equal, Expect } from "./helpers/type-utils";

const guitarists = new Set<string>(); /** I knew I had to type annotate somewhere up here. I tried it on Guitarists but got an error. Was unsure how to proceed. */

guitarists.add("Jimi Hendrix");
guitarists.add("Eric Clapton");

it("Should contain Jimi and Eric", () => {
  expect(guitarists.has("Jimi Hendrix")).toEqual(true);
  expect(guitarists.has("Eric Clapton")).toEqual(true);
});

it("Should give a type error when you try to pass a non-string", () => {
  // @ts-expect-error
  guitarists.add(2);
});

it("Should be typed as an array of strings", () => {
  const guitaristsAsArray = Array.from(guitarists);

  type tests = [Expect<Equal<typeof guitaristsAsArray, string[]>>];
});
