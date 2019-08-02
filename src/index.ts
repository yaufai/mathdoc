#!/usr/bin/env node
import { Mathdoc } from "./Mathdoc";
import { ExecMode } from "./Mode";
import { CompileConfig, GetASTConfig, parseCommand } from "./CommanLineParser";

function compile(file_location: string, compileConfig: CompileConfig): string {
    let text: string = fs.readFileSync(file_location, 'utf-8')
    let mathdoc: Mathdoc = new Mathdoc(text)
    return mathdoc.compileToHTML()
}

function computeAST(file_location: string, getastConfig: GetASTConfig): string {
    let text: string = fs.readFileSync(file_location, 'utf-8')

    let mathdoc: Mathdoc = new Mathdoc(text)
    return mathdoc.getSyntaxTreeJSON()
}

let fs     = require('fs')

const commandLineOptions = parseCommand()

let mode   = commandLineOptions.getExecMode()

if (mode === ExecMode.Compile) {
    console.log(compile(process.argv[3], commandLineOptions.compileConfig))
} else if (mode === ExecMode.GetAst) {
    console.log(computeAST(process.argv[3], commandLineOptions.getastConfig))
} else {

}
