import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter test", () => {
    test("inherits greeting property from parent", () => {
      let newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
        "Hello");
      expect(newJavaScriptGreeter.greeting).toBe("Hello");
    });
    
    test("override greet method", () => {
      let newJavaScriptGreeter: JavaScriptGreeter = new JavaScriptGreeter(
        "Hello");
      expect(newJavaScriptGreeter.greet("Tom")).toBe(
        "console.log('Hello, Tom!')");
    });
  });
  