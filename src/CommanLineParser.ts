import { ExecMode } from "./Mode";

export type CompileConfig = {}
export type GetASTConfig  = {
    configOnly: Boolean
} 

export class CommandLineArgModel {
    mode         : ExecMode
    targetFile   : String
    getastConfig : GetASTConfig
    compileConfig: CompileConfig
    getExecMode(): ExecMode {
        return this.mode
    }
}

export function parseCommand(arg: String[]) : CommandLineArgModel {

}