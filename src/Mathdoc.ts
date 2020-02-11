import { MathdocDocument } from "./MathdocDocument";
import { AbstractCompiler } from "./compilers/AbstractCompiler";
import { StandardHTMLCompiler } from "./compilers/StandardHTMLCompiler"
import { ReactCompiler } from "./compilers/ReactCompiler"
import { ReactElement } from "react";

export class Mathdoc {
    text: string
    parser: any
    syntaxTree: MathdocDocument
    compiler  : AbstractCompiler<string>
    reactcompiler: AbstractCompiler<ReactElement>

    constructor(text: string) {
        this.text = text + "\n"
        this.parser     = require("./mathdoc_syntax.js")
        this.syntaxTree = this.parser.parse(this.text)
        this.compiler   = new StandardHTMLCompiler(this.syntaxTree)
        this.reactcompiler = new ReactCompiler(this.syntaxTree)
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

    compileToReactElement(): ReactElement {
        return this.reactcompiler.compile(this.syntaxTree)
    }
}