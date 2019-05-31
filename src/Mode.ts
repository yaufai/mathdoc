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

export function getExecMode(): ExecMode {
    let mode = process.argv[2]
    if (isExecMode(mode)) {
        return mode
    } else {
        throw new UnknownExecModeError('"' + mode + '" is not a valid mode.')
    }
}
