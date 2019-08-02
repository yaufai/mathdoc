import { ExecMode } from "./Mode";
import commandLineArgs = require("command-line-args");

export type CompileConfig = {}
export type GetASTConfig  = {
    configOnly: Boolean
} 

export class CommandLineArgModel {
    mode         : ExecMode
    targetFile   : string
    getastConfig : GetASTConfig
    compileConfig: CompileConfig
    constructor(mode: ExecMode, targetFile: string, getastConfig: GetASTConfig, compileConfig: CompileConfig) {
        this.mode = mode
        this.targetFile    = targetFile
        this.getastConfig  = getastConfig
        this.compileConfig = compileConfig
    }
    getExecMode(): ExecMode {
        return this.mode
    }
}

export function parseCommand() : CommandLineArgModel {
    const optionDefinitions = [
        { name: "compile", type: String, defaultValue: ""},
        { name: "getast" , type: String, defaultValue: ""},
        { name: "config-only", type: Boolean, defaultValue: false }
    ]
    const parseResult = commandLineArgs(optionDefinitions)

    if (parseResult.compile === "" && parseResult.getast !== "") {
        return new CommandLineArgModel(
            ExecMode.GetAst,
            parseResult.getast,
            { configOnly: parseResult["config-only"]},
            {}
        )
    } else if (parseResult.compile !== "" && parseResult.getast === "") {
        return new CommandLineArgModel(
            ExecMode.Compile,
            parseResult.compile,
            { configOnly: parseResult["config-only"]},
            {}
        )
    } else {
        throw new Error("Exactly one of compile/getast options has to be given.")
    }
}