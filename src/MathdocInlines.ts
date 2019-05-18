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

export function createBold(content: [MathdocInline]): MathdocBold {
    return {
        type   : InlineType.Bold,
        content: content
    }
}
export function createItalic(content: [MathdocInline]): MathdocItalic {
    return {
        type   : InlineType.Italic,
        content: content
    }
}
export function createLink(content: [MathdocInline], reference: string): MathdocLink {
    return {
        type   : InlineType.Link,
        content: content,
        reference: reference
    }
}
export function createMathInline(content: string): MathdocMathInline {
    return {
        type   : InlineType.MathInline,
        content: content
    }
}
export function createCodeInline(content: string): MathdocCodeInline {
    return {
        type   : InlineType.CodeInline,
        content: content
    }
}
export function createRawChars(content: string): MathdocRawChars {
    return {
        type   : InlineType.RawChars,
        content: content
    }
}

export type MathdocBold = {
    type   : InlineType,
    content: [MathdocInline]
}
export type MathdocItalic = {
    type   : InlineType,
    content: [MathdocInline]
}
export type MathdocLink = {
    type   : InlineType,
    content: [MathdocInline],
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
