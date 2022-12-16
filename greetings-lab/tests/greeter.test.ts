import { Greeter } from "../src/greeter";

describe("greeter test", () => {
    test("greeting property works", () => {
      let newGreeter: Greeter = new Greeter("Hello");
      expect(newGreeter.greeting).toBe("Hello");
    });

    test("greeting returns sentence", () => {
      let newGreeter: Greeter = new Greeter("Hello");
      expect(newGreeter.greet("Jill")).toBe("Hello, Jill!");
    }); 
});