import { MathdocDocument } from "./MathdocDocument";
import { AbstractCompiler } from "./AbstractCompiler";
import { StandardHTMLCompiler } from "./StandardHTMLCompiler"

export class Mathdoc {
    text: string
    parser: any
    syntaxTree: MathdocDocument
    compiler  : AbstractCompiler

    constructor(text: string) {
        this.text = text + "\n"
        this.parser     = require("./mathdoc_syntax.js")
        this.syntaxTree = this.parser.parse(this.text)
        this.compiler   = new StandardHTMLCompiler(this.syntaxTree)
    }

    getSyntaxTree(): MathdocDocument {
        return this.syntaxTree
    }

    compileToHTML(): string {
        return this.compiler.compile(this.syntaxTree)
    }
}