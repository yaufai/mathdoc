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

    getSyntaxTreeJSON(): string {
        return JSON.stringify(this.syntaxTree)
    }

    compileToHTML(): string {
        return this.compiler.compile(this.syntaxTree)
    }

    getConfig(): {[key: string]: string} {
        return this.syntaxTree["DocumentConfig"]["content"]
    }

    getConfigJSON(): string {
        const result = this.syntaxTree["DocumentConfig"]["content"]
        if (result == null) {
            return JSON.stringify({})
        } else {
            return JSON.stringify(result)
        }
    }
}