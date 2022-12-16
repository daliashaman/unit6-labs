import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter test", () => {
    test("inherits the greeting property from parent", () => {
      let newLoudGreeter: LoudGreeter = new LoudGreeter("Hello");
      expect(newLoudGreeter.greeting).toBe("Hello");
    });

    test("override greet to account for extra", () => {
      let newLoudGreeter: LoudGreeter = new LoudGreeter("Hello");
      expect(newLoudGreeter.greet("Bob")).toBe("Hello, Bob!!");
    });

    test("addVolume adds extra", () => {
      let newLoudGreeter: LoudGreeter = new LoudGreeter("Hello");
      newLoudGreeter.addVolume();
      newLoudGreeter.addVolume();
      expect(newLoudGreeter.greet("Bob")).toBe("Hello, Bob!!!!");
    });
  });