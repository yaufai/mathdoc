import { MathdocInline } from "./MathdocInlines";

export enum BlockType {
    Comment="Comment",
    Definition="Definition",
    Theorem="Theorem",
    Proof="Proof",
    List="List",
    Image="Image",
    HorizontalLine="HorizontalLine",
    H6="H6",
    H5="H5",
    H4="H4",
    H3="H3",
    H2="H2",
    H1="H1",
    TOC="TOC",
    MathBlock="MathBlock",
    CodeBlock="CodeBlock",
    QuoteBlock="QuoteBlock",
    Paragraph="Paragraph",
    EmptyLine="EmptyLine"
}

export type MathdocBlock
    = MathdocComment
    | MathdocDefinition
    | MathdocTheorem
    | MathdocProof
    | MathdocList
    | MathdocImage
    | MathdocHorizontalLine
    | MathdocH6
    | MathdocH5
    | MathdocH4
    | MathdocH3
    | MathdocH2
    | MathdocH1
    | MathdocTOC
    | MathdocMathBlock
    | MathdocCodeBlock
    | MathdocQuoteBlock
    | MathdocParagraph
    | MathdocEmptyLine

export function createMathdocComment(content: string): MathdocComment {
    return {
        type   : BlockType.Comment,
        content: content
    }
}

export function createMathdocDefinition(title: MathdocInline[], content: BoxBody): MathdocDefinition {
    return {
        type   : BlockType.Definition,
        title  : title,
        content: content
    }
}

export function createMathdocTheorem(title: MathdocInline[], content: BoxBody): MathdocTheorem {
    return {
        type   : BlockType.Theorem,
        title  : title,
        content: content
    } 
}

export function createMathdocProof(title: MathdocInline[], content: BoxBody): MathdocProof {
    return {
        type   : BlockType.Proof,
        title  : title,
        content: content
    }
}

export function createIndentedLine(indent: string, content: MathdocInline[]): IndentedLine {
    return {
        indent : indent,
        content: content
    }
}

export function createMathdocList(items: ListItem[]): MathdocList {
    return {
        type   : BlockType.List,
        items  : items
    }
}

export function createListItem(content: MathdocInline[], indent: string): ListItem {
    return {
        point  : "*",
        content: content,
        indent : indent
    }
}

export function createMathdocImage(reference: string, alternative: string): MathdocImage {
    return {
        type   : BlockType.Image,
        reference  : reference,
        alternative: alternative
    }
}

export function createMathdocHorizontalLine(): MathdocHorizontalLine {
    return {
        type   : BlockType.HorizontalLine
    }
}

export function createMathdocH6(content: MathdocInline[]): MathdocH6 {
    return {
        type   : BlockType.H6,
        content: content
    }
}

export function createMathdocH5(content: MathdocInline[]): MathdocH5 {
    return {
        type   : BlockType.H5,
        content: content
    }
}

export function createMathdocH4(content: MathdocInline[]): MathdocH4 {
    return {
        type   : BlockType.H4,
        content: content
    }
}

export function createMathdocH3(content: MathdocInline[]): MathdocH3 {
    return {
        type   : BlockType.H3,
        content: content
    }
}

export function createMathdocH2(content: MathdocInline[]): MathdocH2 {
    return {
        type   : BlockType.H2,
        content: content
    }
}

export function createMathdocH1(content: MathdocInline[]): MathdocH1 {
    return {
        type   : BlockType.H1,
        content: content
    }
}

export function createMathdocTOC(): MathdocTOC {
    return {
        type   : BlockType.TOC
    }
}

export function createMathdocMathBlock(content: string): MathdocMathBlock {
    return {
        type   : BlockType.MathBlock,
        content: content
    }
}

export function createMathdocCodeBlock(content: string): MathdocCodeBlock {
    // TODO: Implement language name and config
    return {
        type   : BlockType.CodeBlock,
        content: content
    }
}

export function createMathdocQuoteBlock(content: QuoteLine[]): MathdocQuoteBlock {
    return {
        type   : BlockType.QuoteBlock,
        content: content
    }
}

export function createQuoteLine(content: string): QuoteLine {
    return {
        content: content
    }
}

export function createMathdocParagraph(content: MathdocInline[]): MathdocParagraph {
    return {
        type   : BlockType.Paragraph,
        content: content
    }
}

export function createMathdocEmptyLine(): MathdocEmptyLine {
    return {
        type   : BlockType.EmptyLine
    }
}


export type MathdocComment = {
    type   : BlockType,
    content: string
}

export type MathdocDefinition = {
    type   : BlockType,
    title  : MathdocInline[],
    content: BoxBody
}

export type MathdocProof = {
    type   : BlockType,
    title  : MathdocInline[],
    content: BoxBody
}

export type MathdocTheorem = {
    type   : BlockType,
    title  : MathdocInline[],
    content: BoxBody
}

// TODO: adopt block elements
export type BoxBody = (IndentedLine|MathdocMathBlock)[]

export type IndentedLine = {
    indent : string,
    content: MathdocInline[]
}

export type MathdocList = {
    type   : BlockType,
    items  : ListItem[]
}

export type MathdocImage = {
    type   : BlockType,
    reference  : string,
    alternative: string
}

export type MathdocHorizontalLine = {
    type   : BlockType
}

export type MathdocH1 = {
    type   : BlockType,
    content: MathdocInline[]
}

export type MathdocH2 = {
    type   : BlockType,
    content: MathdocInline[]
}

export type MathdocH3 = {
    type   : BlockType,
    content: MathdocInline[]
}

export type MathdocH4 = {
    type   : BlockType,
    content: MathdocInline[]
}

export type MathdocH5 = {
    type   : BlockType,
    content: MathdocInline[]
}

export type MathdocH6 = {
    type   : BlockType,
    content: MathdocInline[]
}

export type MathdocTOC = {
    type   : BlockType
}

export type MathdocMathBlock = {
    type   : BlockType,
    content: string
}

export type MathdocCodeBlock = {
    type   : BlockType,
    content: string
}

export type MathdocQuoteBlock = {
    type   : BlockType,
    content: QuoteLine[]
}

export type MathdocParagraph = {
    type   : BlockType,
    content: MathdocInline[]
}

export type MathdocEmptyLine = {
    type   : BlockType
}

export type QuoteLine = {
    content: string
}

export type ListItem  = {
    point  : string,
    content: MathdocInline[],
    indent : string
}

export function isComment(arg: any): arg is MathdocComment {
    return arg.type === BlockType.Comment
}
export function isDefinition(arg: any): arg is MathdocDefinition {
    return arg.type === BlockType.Definition
}
export function isTheorem(arg: any): arg is MathdocTheorem {
    return arg.type === BlockType.Theorem
}
export function isProof(arg: any): arg is MathdocProof {
    return arg.type === BlockType.Proof
}
export function isList(arg: any): arg is MathdocList {
    return arg.type === BlockType.List
}
export function isImage(arg: any): arg is MathdocImage {
    return arg.type === BlockType.Image
}
export function isHorizontalLine(arg: any): arg is MathdocHorizontalLine {
    return arg.type === BlockType.HorizontalLine
}
export function isH6(arg: any): arg is MathdocH6 {
    return arg.type === BlockType.H6
}
export function isH5(arg: any): arg is MathdocH5 {
    return arg.type === BlockType.H5
}
export function isH4(arg: any): arg is MathdocH4 {
    return arg.type === BlockType.H4
}
export function isH3(arg: any): arg is MathdocH3 {
    return arg.type === BlockType.H3
}
export function isH2(arg: any): arg is MathdocH2 {
    return arg.type === BlockType.H2
}
export function isH1(arg: any): arg is MathdocH1 {
    return arg.type === BlockType.H1
}
export function isTOC(arg: any): arg is MathdocTOC {
    return arg.type === BlockType.TOC
}
export function isMathBlock(arg: any): arg is MathdocMathBlock {
    return arg.type === BlockType.MathBlock
}
export function isCodeBlock(arg: any): arg is MathdocCodeBlock {
    return arg.type === BlockType.CodeBlock
}
export function isQuoteBlock(arg: any): arg is MathdocQuoteBlock {
    return arg.type === BlockType.QuoteBlock
}
export function isParagraph(arg: any): arg is MathdocParagraph {
    return arg.type === BlockType.Paragraph
}
export function isEmptyLine(arg: any): arg is MathdocEmptyLine {
    return arg.type === BlockType.EmptyLine
}