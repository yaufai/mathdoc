import { isString } from "util";

export enum ExecMode {
    Compile = "compile",
    GetAst  = "getast"
}

export class UnknownExecModeError implements Error {
    name = "UnknownExecModeError"
    message
    constructor(message: string) {
        this.message = message
    }
}

export function isExecMode(arg: any): arg is ExecMode {
    if (isString(arg)) {
        return [ ExecMode.Compile.toString(), ExecMode.GetAst.toString() ].includes(arg.toLowerCase())
    } else {
        return false
    }
}
