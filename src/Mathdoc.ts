import { MathdocDocument } from "./MathdocDocument";


export class Mathdoc {
    text: string
    parser: any
    constructor(text: string) {
        this.text = text + "\n"
        this.parser = require("./mathdoc_syntax.js")
    }

    getSyntaxTree(): MathdocDocument {
        return this.parser.parse(this.text)
    }
}