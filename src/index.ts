#!/usr/bin/env node
import { Mathdoc } from "./Mathdoc";
import { ExecMode } from "./Mode";
import { CompileConfig, GetASTConfig, parseCommand } from "./CommanLineParser";

function compile(filePath: string, compileConfig: CompileConfig): string {
    let text: string = fs.readFileSync(filePath, 'utf-8')
    let mathdoc: Mathdoc = new Mathdoc(text)
    return mathdoc.compileToHTML()
}

function computeAST(filePath: string, getastConfig: GetASTConfig): string {
    let text: string = fs.readFileSync(filePath, 'utf-8')

    let mathdoc: Mathdoc = new Mathdoc(text)
    if (getastConfig.configOnly) {
        return mathdoc.getConfigJSON()
    } else{
        return mathdoc.getSyntaxTreeJSON()
    }
}

let fs     = require('fs')

const commandLineOptions = parseCommand()

let mode   = commandLineOptions.getExecMode()

if (mode === ExecMode.Compile) {
    console.log(compile(commandLineOptions.targetFile, commandLineOptions.compileConfig))
} else if (mode === ExecMode.GetAst) {
    console.log(computeAST(commandLineOptions.targetFile, commandLineOptions.getastConfig))
} else {

}
