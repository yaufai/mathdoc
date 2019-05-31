import { MathdocDocument } from "./MathdocDocument";
import { MathdocComment, MathdocDefinition, MathdocTheorem, MathdocProof, MathdocList, MathdocImage, MathdocHorizontalLine, MathdocH6, MathdocH5, MathdocH4, MathdocH3, MathdocH2, MathdocH1, MathdocTOC, MathdocMathBlock, MathdocCodeBlock, MathdocQuoteBlock, MathdocParagraph, MathdocEmptyLine, MathdocBlock, QuoteLine, ListItem, isComment, isDefinition, isTheorem, isProof, isList, isImage, isHorizontalLine, isH6, isH5, isH4, isH3, isH2, isH1, isTOC, isMathBlock, isCodeBlock, isQuoteBlock, isParagraph, isEmptyLine, IndentedLine, BoxBody } from "./MathdocBlocks";
import { MathdocBold, MathdocItalic, MathdocLink, MathdocMathInline, MathdocCodeInline, MathdocRawChars, MathdocInline, isBold, isItalic, isLink, isMathInline, isCodeInline, isRawChars } from "./MathdocInlines";
import { isArray } from "util";

export type Evaluatable
    = MathdocBlock
    | MathdocInline
    | Array<MathdocBlock|MathdocInline>

export function isEvaluatableArray(arg: any): arg is Array<MathdocBlock|MathdocInline> {
    // TODO: implement a strict judge
    return isArray(arg)
}

export abstract class AbstractCompiler {
    document: MathdocDocument

    constructor(document: MathdocDocument) {
        this.document = document
    }

    compile(document: MathdocDocument): string {
        // Adopt multiple pages
        return this.evaluate(document.pages[0].blocks)
    }
    evaluate(element: Evaluatable): string {
        if (isEvaluatableArray(element)) {
            return element.reduce(
                (acc, cur, _) => {
                    return acc + this.evaluate(cur)
                },
                ""
            )
        } else if (isComment(element)) {
            return this.evaluateComment(element)
        } else if (isDefinition(element)) {
            return this.evaluateDefinition(element)
        } else if (isTheorem(element)) {
            return this.evaluateTheorem(element)
        } else if (isProof(element)) {
            return this.evaluateProof(element)
        } else if (isList(element)) {
            return this.evaluateList(element)
        } else if (isImage(element)) {
            return this.evaluateImage(element)
        } else if (isHorizontalLine(element)) {
            return this.evaluateHorizontalLine(element)
        } else if (isH6(element)) {
            return this.evaluateH6(element)
        } else if (isH5(element)) {
            return this.evaluateH5(element)
        } else if (isH4(element)) {
            return this.evaluateH4(element)
        } else if (isH3(element)) {
            return this.evaluateH3(element)
        } else if (isH2(element)) {
            return this.evaluateH2(element)
        } else if (isH1(element)) {
            return this.evaluateH1(element)
        } else if (isTOC(element)) {
            return this.evaluateTOC(element)
        } else if (isMathBlock(element)) {
            return this.evaluateMathBlock(element)
        } else if (isCodeBlock(element)) {
            return this.evaluateCodeBlock(element)
        } else if (isQuoteBlock(element)) {
            return this.evaluateQuoteBlock(element)
        } else if (isParagraph(element)) {
            return this.evaluateParagraph(element)
        } else if (isEmptyLine(element)) {
            return this.evaluateEmptyLine(element)
        } else if (isBold(element)) {
            return this.evaluateBold(element)
        } else if (isItalic(element)) {
            return this.evaluateItalic(element)
        } else if (isLink(element)) {
            return this.evaluateLink(element)
        } else if (isMathInline(element)) {
            return this.evaluateMathInline(element)
        } else if (isCodeInline(element)) {
            return this.evaluateCodeInline(element)
        } else if (isRawChars(element)) {
            return this.evaluateRawChars(element)
        } else {
            return undefined
        }
    }
    abstract evaluateComment(block: MathdocComment): string
    abstract evaluateDefinition(block: MathdocDefinition): string
    abstract evaluateTheorem(block: MathdocTheorem): string
    abstract evaluateProof(block: MathdocProof): string
    abstract evaluateList(block: MathdocList): string
    abstract evaluateImage(block: MathdocImage): string
    abstract evaluateHorizontalLine(block: MathdocHorizontalLine): string
    abstract evaluateH6(block: MathdocH6): string
    abstract evaluateH5(block: MathdocH5): string
    abstract evaluateH4(block: MathdocH4): string
    abstract evaluateH3(block: MathdocH3): string
    abstract evaluateH2(block: MathdocH2): string
    abstract evaluateH1(block: MathdocH1): string
    abstract evaluateTOC(block: MathdocTOC): string
    abstract evaluateMathBlock(block: MathdocMathBlock): string
    abstract evaluateCodeBlock(block: MathdocCodeBlock): string
    abstract evaluateQuoteBlock(block: MathdocQuoteBlock): string
    abstract evaluateParagraph(block: MathdocParagraph): string
    abstract evaluateEmptyLine(block: MathdocEmptyLine): string


    abstract evaluateBold(inline: MathdocBold): string
    abstract evaluateItalic(inline: MathdocItalic): string
    abstract evaluateLink(inline: MathdocLink): string
    abstract evaluateMathInline(inline: MathdocMathInline): string
    abstract evaluateCodeInline(inline: MathdocCodeInline): string
    abstract evaluateRawChars(inline: MathdocRawChars): string
    
}