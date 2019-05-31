#!/usr/bin/env node
import { Mathdoc } from "./Mathdoc";
import { getExecMode, ExecMode } from "./Mode";

function compile(file_location: string): string {
    let text: string = fs.readFileSync(file_location, 'utf-8')
    let mathdoc: Mathdoc = new Mathdoc(text)
    return mathdoc.compileToHTML()
}

function computeAST(file_location: string): string {
    let text: string = fs.readFileSync(file_location, 'utf-8')

    let mathdoc: Mathdoc = new Mathdoc(text)
    return mathdoc.getSyntaxTreeJSON()
}

let fs     = require('fs')

let mode   = getExecMode()

if (mode === ExecMode.Compile) {
    console.log(compile(process.argv[3]))
} else if (mode === ExecMode.GetAst) {
    console.log(computeAST(process.argv[3]))
} else {

}
