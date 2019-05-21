#!/usr/bin/env node
import { Mathdoc } from "./Mathdoc";

let fs     = require('fs')
let file_location: string = process.argv[2]

let text: string = fs.readFileSync(file_location, 'utf-8')

let mathdoc: Mathdoc = new Mathdoc(text)
console.log(mathdoc.getSyntaxTreeJSON())
