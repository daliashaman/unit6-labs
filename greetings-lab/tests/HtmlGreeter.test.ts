import {HtmlGreeter} from "../src/HtmlGreeter";

describe("HtmlGreeter test", () => {
    test("inherits the greeting from parent", () => {
      let newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Hello");
      expect(newHtmlGreeter.greeting).toBe("Hello");
    });

    test("tagName property is set by constructor", () => {
      let newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Hello", "div");
      expect(newHtmlGreeter.tagName).toBe("div");
    });

    test("tagName property defaults to h1", () => {
      let newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Hello");
      expect(newHtmlGreeter.tagName).toBe("h1");
    });
    
    test("greet method returns a string", () => {
      let newHtmlGreeter: HtmlGreeter = new HtmlGreeter("Hello");
      expect(newHtmlGreeter.greet("Bob")).toBe("<h1>Hello, Bob!</h1>");
    });
  });