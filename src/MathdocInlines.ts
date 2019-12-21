export enum InlineType {
    Bold="Bold",
    Italic="Italic",
    Link="Link",
    MathInline="MathInline",
    CodeInline="CodeInline",
    RawChars="RawChars"
}

export type MathdocInline
    = MathdocBold
    | MathdocItalic
    | MathdocLink
    | MathdocMathInline
    | MathdocCodeInline
    | MathdocRawChars

export function createBold(content: MathdocInline[]): MathdocBold {
    return {
        type   : InlineType.Bold,
        content: content
    }
}
export function createItalic(content: MathdocInline[]): MathdocItalic {
    return {
        type   : InlineType.Italic,
        content: content
    }
}
export function createMathdocLink(content: MathdocRawChars, reference: string): MathdocLink {
    return {
        type   : InlineType.Link,
        content: content,
        reference: reference
    }
}
export function createMathdocMathInline(content: string): MathdocMathInline {
    return {
        type   : InlineType.MathInline,
        content: content
    }
}
export function createMathdocCodeInline(content: string): MathdocCodeInline {
    return {
        type   : InlineType.CodeInline,
        content: content
    }
}
export function createMathdocRawChars(content: string): MathdocRawChars {
    return {
        type   : InlineType.RawChars,
        content: content
    }
}

export type MathdocBold = {
    type   : InlineType,
    content: MathdocInline[]
}
export type MathdocItalic = {
    type   : InlineType,
    content: MathdocInline[]
}
export type MathdocLink = {
    type   : InlineType,
    content: MathdocRawChars,
    reference: string
}
export type MathdocMathInline = {
    type   : InlineType,
    content: string
}
export type MathdocCodeInline = {
    type   : InlineType,
    content: string
}
export type MathdocRawChars = {
    type   : InlineType,
    content: string
}

export function isBold(arg: any): arg is MathdocBold {
    return arg.type === InlineType.Bold
}
export function isItalic(arg: any): arg is MathdocItalic {
    return arg.type === InlineType.Italic
}
export function isLink(arg: any): arg is MathdocLink {
    return arg.type === InlineType.Link
}
export function isMathInline(arg: any): arg is MathdocMathInline {
    return arg.type === InlineType.MathInline
}
export function isCodeInline(arg: any): arg is MathdocCodeInline {
    return arg.type === InlineType.CodeInline
}
export function isRawChars(arg: any): arg is MathdocRawChars {
    return arg.type === InlineType.RawChars
}