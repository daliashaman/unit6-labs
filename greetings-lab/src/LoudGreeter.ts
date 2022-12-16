import { Greeter } from "../src/greeter";

class LoudGreeter extends Greeter {
    private extra: string = "!";
    constructor(greeting: string) {
        super(greeting);
    }
    addVolume(): void {
        this.extra += "!";
    }
    greet(name: string) {
        return `${super.greet(name)}${this.extra}`;
    }
}

export { LoudGreeter };