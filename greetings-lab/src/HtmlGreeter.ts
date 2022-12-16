import { Greeter } from "../src/greeter";

class HtmlGreeter extends Greeter {
    tagName: string;
    constructor(greeting: string, newTagName: string = "h1") {
        super(greeting);
        this.tagName = newTagName;
    }
    greet(name: string) :string {
        return `<${this.tagName}>${super.greet(name)}</${this.tagName}>`;
    }
}

export {HtmlGreeter};